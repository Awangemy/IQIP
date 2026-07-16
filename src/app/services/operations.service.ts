import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, timer } from 'rxjs';

export interface OperationsState {
  // Metadata
  project: string;
  vessel: string;
  location: string;
  pileId: string;
  hammer: string;
  
  // Progress
  targetDepth: number;
  currentDepth: number;
  depthRemaining: number;
  estimatedCompletionHrs: number;
  estimatedBlowsRemaining: number;
  startTime: string;
  progressPercentage: number;
  
  // Hammer details
  blowRate: number;
  energyDelivered: number;
  hydraulicPressure: number;
  oilTemperature: number;
  cushionCondition: number;
  strokeCount: number;
  hammerEfficiency: number;
  drivingActive: boolean;

  // Pile analytics
  penetrationPerBlow: number;
  compressionStress: number;
  tensionStress: number;
  bendingStress: number;
  pileAlignment: number;

  // Soil
  currentSoilLayer: string;
  predictedNextLayer: string;
  soilResistance: number;
  rateOfPenetration: number;
  refusalProbability: number;
  cptCorrelationIndex: number;
  soilConfidence: number;

  // Weather & Vessel Motion
  windSpeed: number;
  windDirection: string;
  waveHeight: number;
  currentSpeed: number;
  heave: number;
  roll: number;
  pitch: number;
  weatherWindowStatus: 'GOOD' | 'CAUTION' | 'POOR';

  // AI Recommendations
  recommendedEnergy: number;
  recommendedBlowRate: number;
  recommendedCushion: string;
  recommendedSoil: string;
  recommendedMotion: string;
  recommendationConfidence: number;

  // Risk Matrix
  riskOverstress: 'Low' | 'Medium' | 'High';
  riskMisalignment: 'Low' | 'Medium' | 'High';
  riskHammer: 'Low' | 'Medium' | 'High';
  riskWeather: 'Low' | 'Medium' | 'High';

  // System Health
  systemHealthScore: number;
  healthHydraulic: number;
  healthHammer: number;
  healthPowerPack: number;
  healthSensor: number;
  cushionRemainingHrs: number;

  // Crane & Lifting details (Live Feed / Handling)
  craneRadius: number;
  liftPlanId: string;
  tagLineStatus: string;
  craneSelection: string;
  loadWeight: number;
  craneCapacityPercentage: number;
  personnelRedZone: number;
  personnelYellowZone: number;
}

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  private initialState: OperationsState = {
    project: 'North Sea Jacket Installation',
    vessel: 'Van Oord – Aeolus (I-Lift 1200)',
    location: 'Block A, Western Pacific (North of Taiwan)',
    pileId: 'P12-J04',
    hammer: 'IHC-150',
    
    targetDepth: 45.0,
    currentDepth: 32.4,
    depthRemaining: 12.6,
    estimatedCompletionHrs: 2.6,
    estimatedBlowsRemaining: 680,
    startTime: '07:45 AM',
    progressPercentage: 72,
    
    blowRate: 34,
    energyDelivered: 82,
    hydraulicPressure: 210,
    oilTemperature: 58,
    cushionCondition: 72,
    strokeCount: 1245,
    hammerEfficiency: 88,
    drivingActive: true,

    penetrationPerBlow: 18.6,
    compressionStress: 62,
    tensionStress: 28,
    bendingStress: 31,
    pileAlignment: 0.6,

    currentSoilLayer: 'Medium Dense Sand',
    predictedNextLayer: 'Dense Sand',
    soilResistance: 12.4,
    rateOfPenetration: 17,
    refusalProbability: 12,
    cptCorrelationIndex: 0.87,
    soilConfidence: 94,

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
    recommendedCushion: 'Good',
    recommendedSoil: 'Stable',
    recommendedMotion: 'Low',
    recommendationConfidence: 92,

    riskOverstress: 'Low',
    riskMisalignment: 'Low',
    riskHammer: 'Low',
    riskWeather: 'Medium',

    systemHealthScore: 98,
    healthHydraulic: 96,
    healthHammer: 94,
    healthPowerPack: 92,
    healthSensor: 99,
    cushionRemainingHrs: 18,

    craneRadius: 18.2,
    liftPlanId: 'LP-2025-058',
    tagLineStatus: 'Connected',
    craneSelection: 'Main Crane',
    loadWeight: 28.5,
    craneCapacityPercentage: 47,
    personnelRedZone: 0,
    personnelYellowZone: 0
  };

  private stateSubject = new BehaviorSubject<OperationsState>(this.initialState);
  public state$: Observable<OperationsState> = this.stateSubject.asObservable();

  private refreshIntervalSubject = new BehaviorSubject<number>(5000); // Default: 5s
  public refreshInterval$: Observable<number> = this.refreshIntervalSubject.asObservable();

  private simulationSub: Subscription | null = null;
  private autoRefreshActive = new BehaviorSubject<boolean>(true);
  public autoRefreshActive$: Observable<boolean> = this.autoRefreshActive.asObservable();

  // Observable for alert items
  private alertsSubject = new BehaviorSubject<Array<{ id: string; type: 'success' | 'warning' | 'info'; message: string; time: string }>>([
    { id: '1', type: 'info', message: 'No Critical Alerts. Base systems are operating within nominal specifications.', time: '10:45 AM' },
    { id: '2', type: 'warning', message: 'Weather Advisory: Wind gusts increasing slightly north of Taiwan in next 2 hrs.', time: '10:42 AM' },
    { id: '3', type: 'info', message: 'Next Soil Layer Change: Expected at ~34.0m depth.', time: '10:35 AM' }
  ]);
  public alerts$ = this.alertsSubject.asObservable();

  constructor() {
    this.startSimulation();
  }

  public get currentState(): OperationsState {
    return this.stateSubject.value;
  }

  public setRefreshInterval(ms: number) {
    this.refreshIntervalSubject.next(ms);
    this.startSimulation();
  }

  public toggleAutoRefresh(active: boolean) {
    this.autoRefreshActive.next(active);
    if (active) {
      this.startSimulation();
    } else {
      this.stopSimulation();
    }
  }

  private stopSimulation() {
    if (this.simulationSub) {
      this.simulationSub.unsubscribe();
      this.simulationSub = null;
    }
  }

  private startSimulation() {
    this.stopSimulation();
    if (!this.autoRefreshActive.value) return;

    this.simulationSub = timer(0, this.refreshIntervalSubject.value).subscribe(() => {
      this.simulateStep();
    });
  }

  private simulateStep() {
    const state = { ...this.stateSubject.value };

    // Weather and vessel motion fluctuations
    state.heave = Number((0.3 + Math.random() * 0.1).toFixed(2));
    state.roll = Number((1.0 + Math.random() * 0.4).toFixed(1));
    state.pitch = Number((0.7 + Math.random() * 0.3).toFixed(1));
    state.windSpeed = Number((12.0 + Math.random() * 1.2).toFixed(1));
    state.waveHeight = Number((1.1 + Math.random() * 0.2).toFixed(1));

    // Hammer & Pile interactions
    if (state.drivingActive) {
      state.strokeCount += Math.round(state.blowRate * (this.refreshIntervalSubject.value / 60000));
      
      // Advance depth
      const mmPerBlow = state.penetrationPerBlow;
      const totalBlowsInStep = state.blowRate * (this.refreshIntervalSubject.value / 60000);
      const depthGain = (mmPerBlow * totalBlowsInStep) / 1000; // in meters
      
      state.currentDepth = Number(Math.min(state.targetDepth, state.currentDepth + depthGain).toFixed(2));
      state.depthRemaining = Number(Math.max(0, state.targetDepth - state.currentDepth).toFixed(2));
      
      // Progress percent
      state.progressPercentage = Math.round((state.currentDepth / state.targetDepth) * 100);

      // Remaining blows estimation
      state.estimatedBlowsRemaining = Math.max(0, Math.round((state.depthRemaining * 1000) / mmPerBlow));
      state.estimatedCompletionHrs = Number(((state.estimatedBlowsRemaining / state.blowRate) / 60).toFixed(1));

      // Fluctuating stresses
      state.compressionStress = Math.min(100, Math.max(40, state.compressionStress + Math.round((Math.random() - 0.5) * 6)));
      state.tensionStress = Math.min(100, Math.max(15, state.tensionStress + Math.round((Math.random() - 0.5) * 4)));
      state.bendingStress = Math.min(100, Math.max(20, state.bendingStress + Math.round((Math.random() - 0.5) * 5)));
      
      // Temperature rises slightly if driving is active
      state.oilTemperature = Math.min(85, Math.max(50, state.oilTemperature + (Math.random() > 0.4 ? 1 : -1)));
    } else {
      // Temperature cools off slowly
      state.oilTemperature = Math.max(40, state.oilTemperature - 1);
    }

    // Small hydraulic pressure fluctuations
    state.hydraulicPressure = state.drivingActive 
      ? Math.round(205 + Math.random() * 10) 
      : Math.round(15 + Math.random() * 5); // Idle pressure

    this.stateSubject.next(state);
  }

  // Set driving status
  public setDrivingActive(active: boolean) {
    const state = { ...this.stateSubject.value };
    state.drivingActive = active;
    if (!active) {
      state.blowRate = 0;
      state.hydraulicPressure = 15;
    } else {
      state.blowRate = 34;
      state.hydraulicPressure = 210;
    }
    this.stateSubject.next(state);
    
    this.addAlert(
      active ? 'success' : 'warning',
      active ? 'Pile driving sequence INITIATED.' : 'Pile driving sequence PAUSED by operator.'
    );
  }

  // Adjust hammer energy
  public updateEnergy(energy: number) {
    const state = { ...this.stateSubject.value };
    state.energyDelivered = energy;
    
    // Higher energy increases penetration slightly but also stress
    state.penetrationPerBlow = Number((15 + (energy / 100) * 5).toFixed(1));
    state.compressionStress = Math.min(95, Math.round(45 + (energy / 100) * 20));
    
    this.stateSubject.next(state);
  }

  public setHammerPower(throttle: number) {
    this.updateEnergy(throttle);
  }

  public updateAlignment(alignment: number) {
    const state = { ...this.stateSubject.value };
    state.pileAlignment = alignment;
    this.stateSubject.next(state);
  }

  // Adjust blow rate
  public updateBlowRate(change: number) {
    const state = { ...this.stateSubject.value };
    if (!state.drivingActive) return;
    state.blowRate = Math.max(10, Math.min(60, state.blowRate + change));
    this.stateSubject.next(state);
  }

  // Apply AI recommendations
  public applyAIRecommendations() {
    const state = { ...this.stateSubject.value };
    state.energyDelivered = state.recommendedEnergy;
    state.blowRate = state.recommendedBlowRate;
    state.hammerEfficiency = 92; // optimized
    state.drivingActive = true;
    
    this.stateSubject.next(state);
    
    this.addAlert('success', 'AI Recommendations Applied: Settings optimized for current soil layers.');
  }

  // Calibrate hammer simulation
  public calibrateHammer(): Observable<number> {
    const state = { ...this.stateSubject.value };
    this.addAlert('info', 'Starting hammer calibration sequence...');
    
    // Return a mock calibration progress stream
    return new Observable<number>(observer => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 20;
        if (progress >= 100) {
          clearInterval(interval);
          const finalState = { ...this.stateSubject.value };
          finalState.hammerEfficiency = 91; // Gained efficiency
          finalState.cushionCondition = Math.min(100, finalState.cushionCondition + 5);
          this.stateSubject.next(finalState);
          this.addAlert('success', 'Hammer calibration complete. Efficiency increased to 91%.');
          observer.next(100);
          observer.complete();
        } else {
          observer.next(progress);
        }
      }, 600);
    });
  }

  // Run diagnostics simulation
  public runDiagnostics(): Observable<number> {
    this.addAlert('info', 'Executing platform-wide system diagnostics scan...');
    return new Observable<number>(observer => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        if (progress >= 100) {
          clearInterval(interval);
          const state = { ...this.stateSubject.value };
          state.systemHealthScore = 99;
          state.healthHydraulic = 98;
          state.healthHammer = 97;
          state.healthPowerPack = 96;
          state.healthSensor = 100;
          this.stateSubject.next(state);
          this.addAlert('success', 'Diagnostics complete. All parameters nominal (99% overall health).');
          observer.next(100);
          observer.complete();
        } else {
          observer.next(progress);
        }
      }, 300);
    });
  }

  // Run detailed risk assessment
  public runRiskAnalysis(): Observable<boolean> {
    this.addAlert('info', 'Re-calculating risk factors with deep-learning soil modeling...');
    return new Observable<boolean>(observer => {
      setTimeout(() => {
        const state = { ...this.stateSubject.value };
        state.riskOverstress = 'Low';
        state.riskMisalignment = 'Low';
        state.riskHammer = 'Low';
        state.riskWeather = 'Medium';
        this.stateSubject.next(state);
        this.addAlert('success', 'Risk scan complete: Misalignment risk reduced to LOW.');
        observer.next(true);
        observer.complete();
      }, 1500);
    });
  }

  // Add alert to state
  public addAlert(type: 'success' | 'warning' | 'info', message: string) {
    const alerts = [...this.alertsSubject.value];
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    // Insert new alert at the top
    alerts.unshift({
      id: Math.random().toString(),
      type,
      message,
      time: timeStr
    });
    
    // Keep maximum 8 alerts for simplicity
    if (alerts.length > 8) {
      alerts.pop();
    }
    
    this.alertsSubject.next(alerts);
  }

  // Remove alert
  public dismissAlert(id: string) {
    const alerts = this.alertsSubject.value.filter(a => a.id !== id);
    this.alertsSubject.next(alerts);
  }

  // Clear/Dismiss all alerts
  public dismissAllAlerts() {
    this.alertsSubject.next([]);
  }

  // Crane lifting controls simulations
  public updateCraneChecklist(item: string, val: boolean) {
    // updates checklist options or capacity
  }

  public simulateCraneAction(action: string) {
    this.addAlert('info', `Crane action triggered: ${action}`);
  }
}
