import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonSegment, IonSegmentButton, IonLabel, 
  AlertController, ToastController, IonButton, IonContent, 
  ModalController} from '@ionic/angular/standalone';
import { LucideAngularModule } from 'lucide-angular';
import { DataService, PilingState } from '../services/data.service';
import { StressLimitsModalComponent } from './stress-limits-modal.component';
import { ForecastHourModalComponent } from './forecast-hour-modal.component';
import { TwinPileModalComponent } from './twin-pile-modal.component';


interface ForecastHour {
  time: string;
  status: 'Good' | 'Caution' | 'Poor';
  wave: number;
  wind: number;
}

@Component({
  selector: 'app-advanced-analytics',
  standalone: true,
  imports: [IonContent, IonButton, 
    CommonModule,
    FormsModule,
    IonSegment, IonSegmentButton, IonLabel,
    LucideAngularModule
  ],
  templateUrl: './advanced-analytics.page.html',
  styleUrls: ['./advanced-analytics.page.scss']
})
export class AdvancedAnalyticsPage implements OnInit, OnDestroy {
  state!: PilingState;
  activeTab = 'soil';
  
  // Stress thresholds
  compressionLimit = 75;
  tensionLimit = 40;
  bendingLimit = 45;
  
  // States
  isPredictingSoil = false;
  isRecalculatingForecast = false;
  isRunningDiag = false;
  twinZoom = false;
  
  forecastHours: ForecastHour[] = [
    { time: '10:00', status: 'Good', wave: 1.1, wind: 12.0 },
    { time: '12:00', status: 'Good', wave: 1.2, wind: 12.6 },
    { time: '14:00', status: 'Good', wave: 1.3, wind: 13.2 },
    { time: '16:00', status: 'Caution', wave: 1.5, wind: 14.5 },
    { time: '18:00', status: 'Poor', wave: 2.2, wind: 17.8 }
  ];

  private stateSub: any;

  constructor(
    private dataService: DataService,
    private alertController: AlertController,
    private toastController: ToastController,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.stateSub = this.dataService.getState().subscribe(st => {
      this.state = st;
    });
  }

  ngOnDestroy() {
    if (this.stateSub) this.stateSub.unsubscribe();
  }

  onTabChange(event: any) {
    this.activeTab = event.detail.value;
  }

  exportAllAnalytics() {
    this.showToast('Compiling comprehensive engineering analytics packet (ZIP)...');
    setTimeout(() => {
      this.showToast('ZIP packet "IQIP_ANALYTICS_OVERWATCH.zip" generated successfully.');
    }, 1500);
  }

  predictNextLayer() {
    if (this.isPredictingSoil) return;
    this.isPredictingSoil = true;
    this.showToast('Initializing advanced seismic wave mapping algorithm...');
    
    setTimeout(() => {
      this.isPredictingSoil = false;
      this.showToast('Seismic layer correlation scan complete: Next boundary verified at 34.2m.');
    }, 2000);
  }

  resetLimits() {
    this.compressionLimit = 75;
    this.tensionLimit = 40;
    this.bendingLimit = 45;
    this.showToast('Stress warning limits reset to defaults.');
  }

  async saveLimits() {
    const modal = await this.modalController.create({
      component: StressLimitsModalComponent,
      componentProps: {
        compression: this.compressionLimit,
        tension: this.tensionLimit,
        bending: this.bendingLimit
      },
      cssClass: 'standard-centered-modal',
      animated: true,
      showBackdrop: true
    });
    await modal.present();
  }

  recalculateForecast() {
    if (this.isRecalculatingForecast) return;
    this.isRecalculatingForecast = true;
    this.showToast('Regressing real-time penetration rate against previous run coefficients...');
    
    setTimeout(() => {
      this.isRecalculatingForecast = false;
      this.showToast('Predictive ETA recalculated. ETA stable at 11:20 AM UTC (94% accuracy).');
    }, 2000);
  }

  async selectForecastHour(hour: ForecastHour) {
    const modal = await this.modalController.create({
      component: ForecastHourModalComponent,
      componentProps: {
        hour: hour
      },
      cssClass: 'standard-centered-modal',
      animated: true,
      showBackdrop: true
    });
    await modal.present();
  }

  async openSchedulingModal() {
    const alert = await this.alertController.create({
      header: 'Lifting Window Scheduler',
      message: 'Select the optimal starting date and time based on predicted weather window profiles over the next 48 hours.',
      inputs: [
        {
          name: 'pilingDate',
          type: 'date',
          value: '2026-07-14'
        },
        {
          name: 'pilingTime',
          type: 'time',
          value: '08:00'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Schedule',
          handler: (data) => {
            this.showToast(`Lifting operation scheduled for ${data.pilingDate} at ${data.pilingTime} UTC.`);
          }
        }
      ]
    });
    await alert.present();
  }

runDiagnostics() {

  if (this.isRunningDiag) return;

  this.isRunningDiag = true;

  (document.activeElement as HTMLElement)?.blur();


  this.showToast(
    'Querying hydraulic valve sensors & power pack transceivers...'
  );


  setTimeout(() => {

    this.isRunningDiag = false;

    this.showToast(
      'All diagnostics green. Overall equipment condition: Excellent (94%).'
    );


    // Pastikan focus clear selepas selesai
    setTimeout(() => {
      (document.activeElement as HTMLElement)?.blur();
    }, 100);


  }, 2000);

}

  exportRecommendations() {
    this.showToast('Exporting dynamic AI recommendations package (PDF)...');
    setTimeout(() => {
      this.showToast('AI Recommendations downloaded successfully.');
    }, 1200);
  }

  applyAllRecommendations() {
    this.dataService.applyAiRecommendation();
  }

  toggleTwinZoom() {
    this.twinZoom = !this.twinZoom;
    this.showToast(this.twinZoom ? 'Digital twin canvas zoomed in (x2.5).' : 'Digital twin canvas zoom reset.');
  }

  async clickTwinPile() {
    const modal = await this.modalController.create({
      component: TwinPileModalComponent,
      cssClass: 'standard-centered-modal',
      animated: true,
      showBackdrop: true
    });
    await modal.present();
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
