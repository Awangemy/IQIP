import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

export interface PilingState {
  project: string;
  vessel: string;
  location: string;
  pileId: string;
  hammer: string;
  targetDepth: number;
  currentDepth: number;
  blowRate: number;
  energyDelivered: number;
  penetrationRate: number;
  blowCount: number;
  hydraulicPressure: number;
  oilTemperature: number;
  cushionCondition: number;
  systemHealth: number;
  safetyIndex: number;
  dataConfidence: string;
  installationPhase: string;
  isOperating: boolean;
  
  // Weather & Vessel Motion
  windSpeed: number;
  windDirection: string;
  waveHeight: number;
  currentSpeed: number;
  heave: number;
  roll: number;
  pitch: number;
  weatherWindowStatus: string;
  
  // AI Recommendations
  recommendedEnergy: number;
  recommendedBlowRate: number;
  aiConfidence: number;
  soilBehaviour: string;
  vesselImpact: string;
}

export interface AlertNotification {
  id: string;
  type: 'info' | 'warn' | 'success';
  message: string;
  time: Date;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private state$ = new BehaviorSubject<PilingState>({
    project: 'North Sea Jacket Installation',
    vessel: 'I-Lift 1200',
    location: 'Block A, Western Pacific',
    pileId: 'P12-J04',
    hammer: 'IHC-150',
    targetDepth: 45.0,
    currentDepth: 32.4,
    blowRate: 34,
    energyDelivered: 82,
    penetrationRate: 17,
    blowCount: 1245,
    hydraulicPressure: 210,
    oilTemperature: 58,
    cushionCondition: 72,
    systemHealth: 98,
    safetyIndex: 96,
    dataConfidence: 'High',
    installationPhase: 'Main Driving',
    isOperating: true,
    
    windSpeed: 12.6,
    windDirection: 'NE (45°)',
    waveHeight: 1.2,
    currentSpeed: 0.8,
    heave: 0.35,
    roll: 1.2,
    pitch: 0.9,
    weatherWindowStatus: 'GOOD',
    
    recommendedEnergy: 82,
    recommendedBlowRate: 34,
    aiConfidence: 92,
    soilBehaviour: 'Stable',
    vesselImpact: 'Low'
  });

  private alerts$ = new BehaviorSubject<AlertNotification[]>([
    {
      id: '1',
      type: 'warn',
      message: 'Weather Advisory: Wind gust increasing in next 2 hrs',
      time: new Date()
    },
    {
      id: '2',
      type: 'info',
      message: 'Next Soil Layer Change: Expected at ~34.0m depth',
      time: new Date()
    }
  ]);

  private autoRefresh = true;
  private timerSubscription: any;

  constructor() {
    this.startSimulation();
  }

  getState(): Observable<PilingState> {
    return this.state$.asObservable();
  }

  getAlerts(): Observable<AlertNotification[]> {
    return this.alerts$.asObservable();
  }

  toggleOperation() {
    const current = this.state$.value;
    this.state$.next({
      ...current,
      isOperating: !current.isOperating
    });
    
    this.addAlert({
      id: Math.random().toString(),
      type: current.isOperating ? 'warn' : 'success',
      message: current.isOperating ? 'Operations PAUSED by operator' : 'Operations RESUMED by operator',
      time: new Date()
    });
  }

  setOperatingState(state: boolean) {
    const current = this.state$.value;
    if (current.isOperating !== state) {
      this.state$.next({
        ...current,
        isOperating: state
      });
      this.addAlert({
        id: Math.random().toString(),
        type: state ? 'success' : 'warn',
        message: state ? 'Operations STARTED' : 'Operations HALTED',
        time: new Date()
      });
    }
  }

  updateEnergy(energy: number) {
    const current = this.state$.value;
    this.state$.next({
      ...current,
      energyDelivered: energy
    });
  }

  updateBlowRate(rate: number) {
    const current = this.state$.value;
    this.state$.next({
      ...current,
      blowRate: rate
    });
  }

  applyAiRecommendation() {
    const current = this.state$.value;
    this.state$.next({
      ...current,
      energyDelivered: current.recommendedEnergy,
      blowRate: current.recommendedBlowRate,
      systemHealth: Math.min(100, current.systemHealth + 1)
    });

    this.addAlert({
      id: Math.random().toString(),
      type: 'success',
      message: `AI Recommendations applied: Energy ${current.recommendedEnergy}%, Blow Rate ${current.recommendedBlowRate} bpm`,
      time: new Date()
    });
  }

  addAlert(alert: AlertNotification) {
    const current = this.alerts$.value;
    this.alerts$.next([alert, ...current]);
  }

  removeAlert(id: string) {
    const current = this.alerts$.value;
    this.alerts$.next(current.filter(a => a.id !== id));
  }

  clearAlerts() {
    this.alerts$.next([]);
  }

  setAutoRefresh(active: boolean) {
    this.autoRefresh = active;
  }

  calibrateHammer() {
    const current = this.state$.value;
    this.state$.next({
      ...current,
      systemHealth: 99,
      hydraulicPressure: 200,
      oilTemperature: 52
    });
    
    this.addAlert({
      id: Math.random().toString(),
      type: 'success',
      message: 'Hammer system calibrated successfully. Diagnostics check out normal.',
      time: new Date()
    });
  }

  triggerWeatherRefresh() {
    const current = this.state$.value;
    // slightly randomize weather
    const wind = Math.round((11 + Math.random() * 3) * 10) / 10;
    const wave = Math.round((1.0 + Math.random() * 0.4) * 10) / 10;
    const heave = Math.round((0.2 + Math.random() * 0.3) * 100) / 100;
    const roll = Math.round((0.8 + Math.random() * 0.6) * 10) / 10;
    const pitch = Math.round((0.6 + Math.random() * 0.4) * 10) / 10;
    
    this.state$.next({
      ...current,
      windSpeed: wind,
      waveHeight: wave,
      heave: heave,
      roll: roll,
      pitch: pitch
    });

    this.addAlert({
      id: Math.random().toString(),
      type: 'info',
      message: 'Weather telemetry data updated.',
      time: new Date()
    });
  }

  private startSimulation() {
    // Check every second, update piling parameters if operating
    timer(1000, 1000).subscribe(() => {
      const current = this.state$.value;
      if (!this.autoRefresh) return;

      if (current.isOperating) {
        // Slow penetration: 0.02m per blow, blows every ~1.8 seconds (34 bpm)
        // Let's add 0.015m per second
        let newDepth = current.currentDepth + 0.015;
        let newBlowCount = current.blowCount + (Math.random() > 0.4 ? 1 : 0);
        
        // Wrap around if we hit target depth of 45m
        if (newDepth >= current.targetDepth) {
          newDepth = 32.4;
          newBlowCount = 1245;
          this.addAlert({
            id: Math.random().toString(),
            type: 'success',
            message: `Pile ID ${current.pileId} reached target depth of 45.0m! Resetting simulation for PoC showcase.`,
            time: new Date()
          });
        }

        // Randomly fluctuate details
        const pressure = Math.round(208 + Math.random() * 5);
        const temp = Math.round(57 + Math.random() * 3);
        const cushion = Math.max(10, Math.round(current.cushionCondition - 0.01 * 100) / 100);
        
        // Randomly fluctuate safety index and system health slightly
        const safety = Math.round(94 + Math.random() * 4);
        const health = Math.round(96 + Math.random() * 3);

        this.state$.next({
          ...current,
          currentDepth: Math.round(newDepth * 100) / 100,
          blowCount: newBlowCount,
          hydraulicPressure: pressure,
          oilTemperature: temp,
          cushionCondition: cushion < 40 ? 72 : cushion, // Auto replace cushion if worn out
          safetyIndex: safety,
          systemHealth: health
        });
      }
    });
  }
}
