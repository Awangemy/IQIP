import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonSegment, IonSegmentButton, IonLabel, IonButton,
  AlertController, ToastController, IonContent, 
  ModalController} from '@ionic/angular/standalone';
import { LucideAngularModule } from 'lucide-angular';
import { DataService, PilingState, AlertNotification } from '../services/data.service';
import { RadarAnalysisModalComponent } from './radar-analysis-modal.component';
import { LiveTrendModalComponent } from './live-trend-modal.component';
import { volumeHighOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-live-operations',
  standalone: true,
  imports: [IonContent,
    CommonModule,
    FormsModule,
    IonSegment, IonSegmentButton, IonLabel, IonButton,
    LucideAngularModule],
  templateUrl: './live-operations.page.html',
  styleUrls: ['./live-operations.page.scss']
})
export class LiveOperationsPage implements OnInit, OnDestroy {
  Math = Math; // Expose Math
  state!: PilingState;
  activeLiveTab = 'feed';
  
  // States
  isFullScreen = false;
  isRecordingCam1 = false;
  isRecordingCam2 = false;
  isMuted = false;
  
  // Handling View Inputs
  handlingOperation = 'lowering';
  liftPlan = 'lp058';
  calcPileWeight = 28.5;
  calcHookWeight = 1.2;
  calcTotalWeight = 29.7;
  isCraneMoving = false;
  
  // Safety Checklist
  chkPathClear = true;
  chkPersonnelClear = true;
  chkCraneCapacity = true;
  chkWeatherLimit = true;
  isScanningSafety = false;
  
  // Controls & Sidebar
  streamQuality = 'hd';
  activeAlerts: AlertNotification[] = [];
  
  private stateSub: any;
  private alertsSub: any;

  constructor(
    private dataService: DataService,
    private alertController: AlertController,
    private toastController: ToastController,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.stateSub = this.dataService.getState().subscribe(st => {
      this.state = st;
      // sync checklist if weather changes
      if (this.state.windSpeed > 14 && this.chkWeatherLimit) {
        this.chkWeatherLimit = false;
        this.checkSafetyStatus();
      }
    });

    this.alertsSub = this.dataService.getAlerts().subscribe(al => {
      this.activeAlerts = al;
    });
  }

  ngOnDestroy() {
    if (this.stateSub) this.stateSub.unsubscribe();
    if (this.alertsSub) this.alertsSub.unsubscribe();
  }

  onLiveTabChange(event: any) {
    this.activeLiveTab = event.detail.value;
  }

  toggleFullScreenSim() {
    this.isFullScreen = !this.isFullScreen;
    this.showToast(this.isFullScreen ? 'Live feeds switched to full-screen grid.' : 'Full-screen grid minimized.');
  }

  takeScreenshot(camName: string) {
    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
    this.showToast(`Capturing frame on ${camName}...`);
    setTimeout(() => {
      this.showToast(`Screenshot downloaded: ${camName.replace(' ', '_')}_${timestamp.replace(/[: ]/g, '')}.png`);
    }, 1200);
  }

  toggleRecordCam1() {
    this.isRecordingCam1 = !this.isRecordingCam1;
    this.showToast(this.isRecordingCam1 ? 'CAM 01 recording started.' : 'CAM 01 recording stopped and saved to deck logs.');
  }

  toggleRecordCam2() {
    this.isRecordingCam2 = !this.isRecordingCam2;
    this.showToast(this.isRecordingCam2 ? 'CAM 02 recording started.' : 'CAM 02 recording stopped and saved to deck logs.');
  }

  toggleAudio() {
    this.isMuted = !this.isMuted;
    this.showToast(this.isMuted ? 'All live audio streams muted.' : 'Live marine ambient audio enabled.');
  }

  recalculateCraneWeight() {
    this.calcTotalWeight = Math.round((this.calcPileWeight + this.calcHookWeight) * 100) / 100;
    // Crane SWL is 60t. If weight exceeds 60t, capacity fails
    if (this.calcTotalWeight > 60) {
      this.chkCraneCapacity = false;
    } else {
      this.chkCraneCapacity = true;
    }
    this.checkSafetyStatus();
  }

  craneCommand(direction: string) {
    this.showToast(`Pulse: Crane command [${direction}] sent to operator console.`);
  }

  startCraneSequence() {
    if (!this.chkPathClear || !this.chkPersonnelClear || !this.chkCraneCapacity || !this.chkWeatherLimit) {
      this.showErrorAlert('LIFT BLOCKER DETECTED', 'Lifting sequence cannot initiate while safety checklist markers are failed. Resolve checklist issues first.');
      return;
    }

    if (this.isCraneMoving) return;
    this.isCraneMoving = true;
    this.showToast('Initiating automated crane hook guide path...');
    
    setTimeout(() => {
      this.isCraneMoving = false;
      this.showToast('Monopile lift sequence completed safely. Object positioned.');
    }, 3000);
  }

  async emergencyStopCrane() {
    const alert = await this.alertController.create({
      header: 'CRANE STOP ACTION',
      message: 'Halt all active crane slewing and hoist winches immediately?',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        { 
          text: 'HALT CRANE', 
          handler: () => {
            this.isCraneMoving = false;
            this.showToast('🚨 CRANE OPERATIONAL LOOP HALTED. Brakes locked.');
          } 
        }
      ]
    });
    await alert.present();
  }

  checkSafetyStatus() {
    // Triggers change detection and updates badges
  }

  getSafetyOverallStatus(): string {
    if (this.chkPathClear && this.chkPersonnelClear && this.chkCraneCapacity && this.chkWeatherLimit) {
      return 'Safe to Operate';
    }
    return 'CRITICAL BLOCKER';
  }

  getSafetyBadgeBg(): string {
    return this.getSafetyOverallStatus() === 'Safe to Operate' 
      ? 'rgba(0, 255, 157, 0.1)' 
      : 'rgba(255, 51, 102, 0.1)';
  }

  getSafetyBadgeColor(): string {
    return this.getSafetyOverallStatus() === 'Safe to Operate' 
      ? 'var(--app-accent-green)' 
      : 'var(--app-accent-red)';
  }

  runSafetyCheckScan() {
    if (this.isScanningSafety) return;
    this.isScanningSafety = true;
    this.showToast('Scanning deck transponders and wind velocity markers...');
    
    setTimeout(() => {
      this.isScanningSafety = false;
      this.chkPathClear = true;
      this.chkPersonnelClear = true;
      this.chkCraneCapacity = true;
      this.chkWeatherLimit = true;
      this.showToast('All safety override markers successfully validated. overall status: SAFE.');
    }, 2000);
  }

  onEnergySliderChange(event: any) {
    const val = parseInt(event.target.value, 10);
    this.dataService.updateEnergy(val);
  }

  adjustBlowRate(offset: number) {
    const newRate = Math.min(60, Math.max(10, this.state.blowRate + offset));
    this.dataService.updateBlowRate(newRate);
  }

  setDrivingState(state: boolean) {
    this.dataService.setOperatingState(state);
  }

  calibrateHammerFromLive() {
    this.dataService.calibrateHammer();
  }

  async triggerEmergencyStopFromLive() {
    const alert = await this.alertController.create({
      header: '🚨 EMERGENCY SHUTDOWN 🚨',
      subHeader: 'Confirm Live Shutdown Command',
      message: 'This will lock all hammer exhaust loops and trigger an immediate stand-by. Confirm?',
      buttons: [
        { text: 'Abort', role: 'cancel' },
        { 
          text: 'HALT IHC-150 NOW', 
          handler: () => {
            this.dataService.setOperatingState(false);
            this.showToast('🚨 IHC-150 HAMMER HALTED! Hydraulic pressure bled.');
          } 
        }
      ]
    });
    await alert.present();
  }

  async clickRadar() {
    const modal = await this.modalController.create({
      component: RadarAnalysisModalComponent,
      componentProps: {
        personnelClear: this.chkPersonnelClear
      },
      cssClass: 'radar-analysis-modal',
      animated: true,
      showBackdrop: true
    });
    await modal.present();
  }
  adjustRadarRadius() {
    this.showToast('Opening Safety Laser Grid configuration interface...');
  }

  async alertPersonnel() {
    this.showToast('Sounding deck siren and flashing hazard indicators...');
    
    const alert = await this.alertController.create({
      header: '🚨 ALARM SIREN INITIATED 🚨',
      message: 'Emergency siren sounded on deck. Automated warning flashing on crew transceivers.',
      buttons: [
        {
          text: 'Silence Alarm',
          handler: () => {
            this.chkPersonnelClear = true;
            this.showToast('Siren silenced. Crew confirmed clear of Red Zone.');
          }
        }
      ]
    });
    await alert.present();
  }

  async openLiveTrend(metricType: string) {
    let metricName = '';
    let values = '';
    
    switch (metricType) {
      case 'penetration':
        metricName = 'Penetration Depth (m)';
        values = 'Previous 5 mins: 32.1m → 32.2m → 32.3m → 32.4m. Consistent linear penetrability.';
        break;
      case 'rate':
        metricName = 'Penetration Rate (mm/blow)';
        values = 'Previous 5 mins: 18.2 → 17.8 → 17.5 → 17.0 mm/blow. Transitioning into dense sand strata.';
        break;
      case 'blows':
        metricName = 'Cumulative Blow Count';
        values = 'Total blows logged: 1,245. Cushion wear is within optimal limits (72%).';
        break;
      case 'verticality':
        metricName = 'Monopile Verticality Drift';
        values = 'Dual-axis inclinometer reading: 0.6°. Maximum tolerance limit is 1.0°. All normal.';
        break;
      case 'heave':
        metricName = 'Vessel Heave (Aeolus)';
        values = 'Significant vertical surge heave: 0.35m. System safe limit is 0.80m.';
        break;
      case 'wind':
        metricName = 'Wind Velocity (North Sea)';
        values = `Avg Speed: ${this.state.windSpeed} m/s. Safe lifting limit is 15.0 m/s.`;
        break;
    }

    // ✅ DIPERBAHARUI: Guna ModalController (Pop-up biasa, tiada bottom sheet)
    const modal = await this.modalController.create({
      component: LiveTrendModalComponent,
      componentProps: {
        metricName: metricName,
        values: values
      },
      cssClass: 'standard-centered-modal',
      animated: true,
      showBackdrop: true
    });
    await modal.present();
  }

  dismissAlert(id: string) {
    this.dataService.removeAlert(id);
  }

  markAllAlertsRead() {
    this.dataService.clearAlerts();
    this.showToast('All deck alarms cleared.');
  }

  onQualityChange() {
    this.showToast(`Video feed switched to: ${this.streamQuality.toUpperCase()}`);
  }

  private async showErrorAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Acknowledge']
    });
    await alert.present();
  }

  private async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'dark'
    });
    await toast.present();
  }
}

