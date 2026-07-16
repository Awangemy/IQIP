import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  AlertController,
  ToastController,
  ModalController,
  IonContent
} from '@ionic/angular/standalone';
import { LucideAngularModule } from 'lucide-angular';
import { DataService, PilingState } from '../services/data.service';
import { WeatherForecastModalComponent } from './weather-forecast-modal.component';
import { HammerDetailsModalComponent } from './hammer-details-modal.component'; // ✅ TAMBAH
import { KpiDetailModalComponent } from './kpi-detail-modal.component';

interface RiskItem {
  name: string;
  level: 'Low' | 'Medium' | 'High';
  mitigation: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    IonButton,
    LucideAngularModule
  ],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit, OnDestroy {
  Math = Math;
  state!: PilingState;
  autoRefresh = true;
  activeTimeFilter = '1h';
  timeFilters = ['1h', '6h', '24h'];
  showRecommendation = true;
  isCalibrating = false;
  isScanningRisks = false;
  risks: RiskItem[] = [
    { name: 'Pile Overstress Risk', level: 'Low', mitigation: 'Maintain current energy level under 85%. Blow rate remains safe.' },
    { name: 'Misalignment Risk', level: 'Low', mitigation: 'Dual-axis inclinometers are calibrated. Drift is under 0.6 degrees.' },
    { name: 'Hammer Temp Risk', level: 'Low', mitigation: 'Hydraulic cooling loops are operating at 100% capacity.' },
    { name: 'Weather Wind Risk', level: 'Medium', mitigation: 'Monitor gusts. If sustained wind exceeds 15 m/s, stand-by protocols will trigger.' }
  ];
  private stateSub: any;

  constructor(
    private dataService: DataService,
    private alertController: AlertController,
    private toastController: ToastController,
    private modalController: ModalController // ✅ PASTIKAN ADA
  ) {}

  ngOnInit() {
    this.stateSub = this.dataService.getState().subscribe(st => {
      this.state = st;
    });
  }

  ngOnDestroy() {
    if (this.stateSub) this.stateSub.unsubscribe();
  }

  toggleAutoRefresh() {
    this.autoRefresh = !this.autoRefresh;
    this.dataService.setAutoRefresh(this.autoRefresh);
    this.showToast(this.autoRefresh ? 'Telemetry stream resumed.' : 'Telemetry stream paused.');
  }

  setTimeFilter(filter: string) {
    this.activeTimeFilter = filter;
    this.showToast(`Historical filter updated to: ${filter}`);
  }

  async openKpiDetail(type: string) {
    let title = '';
    let message = '';
    
    switch (type) {
      case 'efficiency':
        title = 'Lifting & Driving Efficiency';
        message = 'The pile driving cycle is running 18% faster than the initial project plan. Soil dense sand transition went smoother than expected with the IHC-150 hammer configured at 82% energy.';
        break;
      case 'health':
        title = 'System Health Scan';
        message = `All hydraulics, sensor, and mechanical loops are reporting excellent values. Current overall score is ${this.state.systemHealth}%. Anvil cushion is well within acceptable limits.`;
        break;
      case 'safety':
        title = 'Safety Parameter Scan';
        message = `Offshore safety index is at ${this.state.safetyIndex}%. Safe operating limit for wind is 15.0 m/s (Current: ${this.state.windSpeed} m/s). Significant wave limit is 2.0 m (Current: ${this.state.waveHeight} m).`;
        break;
      case 'confidence':
        title = 'Dual-Sensor Consensus Scan';
        message = 'The consensus quality index is High. Telemetry is verified via GPS verticality check and secondary acoustic sensor checks on the seabed frame.';
        break;
      case 'phase':
        title = 'Monopile Driving Phase';
        message = `Current Phase: ${this.state.installationPhase}. The monopile has penetrated the seabed silt and sand layer, heading into dense sand. Stroke count: ${this.state.blowCount}.`;
        break;
    }

    const modal = await this.modalController.create({
      component: KpiDetailModalComponent,
      componentProps: {
        title: title,
        message: message,
        type: type
      },
      cssClass: 'standard-centered-modal',
      animated: true,
      showBackdrop: true
    });
    await modal.present();
  }

  // ✅ DIPERBAHARUI: Guna ModalController
  async openHammerDetailsModal() {
    const modal = await this.modalController.create({
      component: HammerDetailsModalComponent,
      componentProps: {
        energy: this.state.energyDelivered,
        blowRate: this.state.blowRate,
        pressure: this.state.hydraulicPressure,
        temperature: this.state.oilTemperature
      },
      cssClass: 'hammer-details-modal',
    });
    await modal.present();
  }

  calibrateHammer() {
    if (this.isCalibrating) return;
    this.isCalibrating = true;
    this.showToast('Initiating IHC-150 hammer auto-calibration...');
    setTimeout(() => {
      this.isCalibrating = false;
      this.dataService.calibrateHammer();
      this.showToast('Calibration cycle completed. System parameters adjusted.');
    }, 2000);
  }

  exportReport() {
    this.showToast('Generating penetration & soil resistance report (PDF)...');
    setTimeout(() => {
      this.showToast('PDF Report "IQIP_OVERWATCH_P12-J04.pdf" downloaded successfully!');
    }, 1500);
  }

  refreshWeather() {
    this.dataService.triggerWeatherRefresh();
    this.showToast('Fetching latest Aeolus telemetry data...');
  }

  async openWeatherForecastModal() {
    const modal = await this.modalController.create({
      component: WeatherForecastModalComponent,
      cssClass: 'weather-forecast-modal',

      handle: false
    });
    await modal.present();
  }

  applyRecommendation() {
    this.dataService.applyAiRecommendation();
    this.showRecommendation = false;
    this.showToast('AI recommendations applied to hammer controller.');
  }

  dismissRecommendation() {
    this.showRecommendation = false;
    this.showToast('AI recommendation dismissed.');
  }

  resetRecommendation() {
    this.showRecommendation = true;
    this.showToast('AI recommendations restored.');
  }

  async viewRiskMitigation(risk: RiskItem) {
    const alert = await this.alertController.create({
      header: risk.name,
      subHeader: `Current Risk Level: ${risk.level}`,
      message: `<strong>Mitigation Protocol:</strong><br><br>${risk.mitigation}`,
      buttons: ['Close']
    });
    await alert.present();
  }

  runRiskAnalysis() {
    if (this.isScanningRisks) return;
    this.isScanningRisks = true;
    this.showToast('Scanning soil resistance, wind gust velocity, and structural stress loads...');
    setTimeout(() => {
      this.isScanningRisks = false;
      this.showToast('Comprehensive risk scan completed. No anomalies detected.');
    }, 2000);
  }

  toggleOperation() {
    this.dataService.toggleOperation();
    const status = this.state.isOperating ? 'paused' : 'resumed';
    this.showToast(`Piling operations ${status}.`);
  }

  async triggerEmergencyStop() {
    const alert = await this.alertController.create({
      header: '🚨 CRITICAL WARNING 🚨',
      subHeader: 'EMERGENCY SHUTDOWN PROMPTED',
      message: 'Are you absolutely sure you want to stop the IHC-150 hammer and freeze all hydraulic lifters immediately? This action logs directly to maritime telemetry.',
      buttons: [
        { text: 'Cancel', role: 'cancel', cssClass: 'secondary' },
        {
          text: 'CONFIRM EMERGENCY STOP',
          cssClass: 'danger-text',
          handler: () => {
            this.confirmEmergencyStop();
          }
        }
      ]
    });
    await alert.present();
  }

  private async confirmEmergencyStop() {
    const doubleAlert = await this.alertController.create({
      header: '️ FINAL DOUBLE CONFIRMATION ⚠️',
      message: 'Entering emergency safety mode. Crane locks and cushion valves will lock. Confirm final command execution.',
      buttons: [
        { text: 'Abort Stop', role: 'cancel' },
        {
          text: 'EXECUTE HALT NOW',
          cssClass: 'danger-text',
          handler: () => {
            this.dataService.setOperatingState(false);
            this.showToast('🚨 EMERGENCY HALT EXECUTED! All operations halted.');
          }
        }
      ]
    });
    await doubleAlert.present();
  }

  private async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2500,
      position: 'bottom',
      color: 'dark'
    });
    await toast.present();
  }
}