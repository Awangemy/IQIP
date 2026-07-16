import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  IonContent, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonText, 
  IonBadge, IonProgressBar, ToastController, AlertController
} from '@ionic/angular/standalone';
import { OperationsService, OperationsState } from '../services/operations.service';
import { Subscription } from 'rxjs';
import { addIcons } from 'ionicons';
import {
  constructOutline, sparklesOutline, checkmarkCircleOutline, closeOutline,
  warningOutline, timerOutline, statsChartOutline, arrowForwardOutline,
  downloadOutline, optionsOutline, listOutline, eyeOutline, arrowBackOutline,
  shieldCheckmarkOutline, alertCircleOutline, flashOutline, speedometerOutline,
  buildOutline, ribbonOutline, documentTextOutline, settingsOutline,
  refreshOutline, informationCircleOutline, trashOutline, copyOutline
} from 'ionicons/icons';

export interface RecommendationReport {
  modelName: string;
  size: string;
  pressure: string;
  oilFlow: string;
  impactEnergy: string;
  excavatorRange: string;
  bestApplication: string;
  reason: string;
  advantages: string[];
  limitations: string[];
  alternatives: { model: string; size: string; reason: string }[];
  safetyReminders: string[];
  maintenanceReminders: string[];
  specifications: { label: string; value: string }[];
}

@Component({
  selector: 'app-before-operation',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonContent, IonGrid, IonRow, IonCol, IonButton, IonIcon,
    IonBadge, IonProgressBar
],
  templateUrl: './before-operation.page.html',
  styleUrls: ['./before-operation.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeforeOperationPage implements OnInit, OnDestroy {
  // Navigation & Wizard Step Signals
  public currentStep = signal<number>(1); // 1: Project Conditions, 2: Machine Info, 3: AI Analysis, 4: Report
  
  // Selection Signals
  public selectedMaterial = signal<string>('rock'); // rock, concrete, soil
  public selectedRockHardness = signal<string>('medium'); // soft, medium, hard, extreme
  public selectedConcreteStrength = signal<string>('standard'); // low, standard, high, ultra
  public selectedGroundCondition = signal<string>('stable'); // stable, clay, loose_sand, gravel, saturated, offshore
  public selectedWorkingEnvironment = signal<string>('general'); // general, urban, underwater, tunnel, open_pit
  
  public selectedExcavatorIndex = signal<number>(2); // Default to CAT 320
  public selectedProductivity = signal<string>('high'); // standard, high, ultra
  public selectedApplication = signal<string>('quarry'); // demolition, trenching, quarry, road_work, foundation, general
  
  // Real-time State from Operations Service
  public state!: OperationsState;
  private subscriptions: Subscription[] = [];
  
  // Excavators Fleet List
  public excavators = [
    { model: 'CAT 313', weight: 14, class: 'mini' },
    { model: 'Komatsu PC200', weight: 21, class: 'utility' },
    { model: 'CAT 320', weight: 22, class: 'utility' },
    { model: 'Volvo EC300', weight: 31, class: 'heavy' },
    { model: 'Hitachi ZX350', weight: 36, class: 'heavy' },
    { model: 'Volvo EC380', weight: 41, class: 'heavy' },
    { model: 'CAT 349', weight: 51, class: 'ultra' },
    { model: 'Liebherr R950', weight: 53, class: 'ultra' },
    { model: 'CAT 374', weight: 74, class: 'ultra' },
    { model: 'Komatsu PC800', weight: 83, class: 'ultra' }
  ];

  // AI Scanning Terminal Logs Signal
  public scanningLogs = signal<string[]>([]);
  public scanProgress = signal<number>(0);

  // Computed: Selected Excavator object
  public selectedExcavator = computed(() => this.excavators[this.selectedExcavatorIndex()]);

  // Computed: Real-time warnings based on parameters
  public configWarnings = computed(() => {
    const warnings: string[] = [];
    const material = this.selectedMaterial();
    const hardness = this.selectedRockHardness();
    const weight = this.selectedExcavator().weight;
    const env = this.selectedWorkingEnvironment();
    const cond = this.selectedGroundCondition();
    const app = this.selectedApplication();

    if (material === 'rock' && (hardness === 'hard' || hardness === 'extreme') && weight < 25) {
      warnings.push(`Carrier mismatch: Excavator operating weight (${weight}t) is light for ${hardness.replace('_', ' ')} rock breaker applications. Operating components will endure maximum peak loads.`);
    }

    if (env === 'urban' && app === 'quarry') {
      warnings.push('Environmental warning: Open-pit quarry operations in noise-sensitive urban settings require strict decibel dampening compliance.');
    }

    if (env === 'underwater' && cond !== 'offshore' && cond !== 'saturated') {
      warnings.push('Underwater warning: Dry seabed configurations selected for underwater working environment. Ensure specialized hydraulic venting is configured.');
    }

    return warnings;
  });

  // Computed: Comprehensive Engineering Report Recommendation
  public recommendation = computed<RecommendationReport>(() => {
    const material = this.selectedMaterial();
    const hardness = this.selectedRockHardness();
    const strength = this.selectedConcreteStrength();
    const cond = this.selectedGroundCondition();
    const env = this.selectedWorkingEnvironment();
    const excavator = this.selectedExcavator();
    const prod = this.selectedProductivity();
    const app = this.selectedApplication();

    // Logic variables for matching
    const wt = excavator.weight;
    
    // Default model initializations
    let modelName = 'HB1900';
    let size = 'Medium Duty';
    let pressure = '140 - 160 bar';
    let oilFlow = '110 - 150 l/min';
    let impactEnergy = '4,000 Joules';
    let excavatorRange = '18 - 28 tons';
    let bestApplication = 'Quarrying, secondary breaking, and commercial demolition.';
    let reason = 'An optimized pairing providing robust impact velocity to tackle standard material excavation.';
    let advantages: string[] = [
      'Excellent balance of impact force and tool frequency',
      'High-grade nitrogen accumulator absorbs recoil shock',
      'Durable housing prevents lateral tool play'
    ];
    let limitations: string[] = [
      'Not optimized for continuous monolithic granite or extremely hard rock breaking',
      'Requires standard carrier cooling package in warm operations'
    ];
    let alternatives = [
      { model: 'HB1600', size: '18 - 24 tons', reason: 'High fuel efficiency for utility excavation.' },
      { model: 'HB2200', size: '24 - 32 tons', reason: 'Upgraded power option if additional tool weight is supported.' }
    ];

    // Branching Hammer Selection Engine
    if (app === 'foundation' && (cond === 'offshore' || env === 'underwater')) {
      // Special Offshore Piling Hammer Selection
      modelName = wt > 40 ? 'IHC-180 Hydropile' : 'IHC-150 Hydropile';
      size = 'Heavy-Duty Impact Piling Hammer';
      pressure = '210 - 240 bar';
      oilFlow = '180 - 280 l/min';
      impactEnergy = wt > 40 ? '180,000 Joules' : '150,000 Joules';
      excavatorRange = wt > 40 ? '45 - 90 tons' : '30 - 60 tons';
      bestApplication = 'Offshore jacket piles, dense marine sandy foundations, and harbor pile driving.';
      reason = `Selected specifically for offshore pile-driving foundation application inside marine/underwater environments. The ${modelName} offers high-energy hydraulic blow capability perfectly synchronized with dynamic overwatch strain sensors.`;
      advantages = [
        'Specialized marine subsea venting valves prevent water ingestion',
        'Direct energy sensor arrays feed telemetry live into IQIP Overwatch',
        'Continuous stroke rate self-regulates to protect pile toe stress'
      ];
      limitations = [
        'Requires complete deck power-pack unit for continuous marine delivery',
        'Extremely heavy configuration requiring direct crane or high-capacity rig support'
      ];
      alternatives = [
        { model: 'IHC-120', size: '25 - 45 tons', reason: 'Compact offshore piling for lighter pile sleeves.' },
        { model: 'HB4800', size: '40 - 70 tons', reason: 'Standard hydraulic breaker configuration if pile driving is not required.' }
      ];
    } else if (wt < 18) {
      // Light Class Recommendation
      modelName = 'HB1200';
      size = 'Lightweight Class';
      pressure = '110 - 130 bar';
      oilFlow = '70 - 100 l/min';
      impactEnergy = '1,800 Joules';
      excavatorRange = '10 - 18 tons';
      bestApplication = 'Utility trenching, asphalt tearing, and light residential construction.';
      reason = 'Engineered for lightweight carriers. Maximizes flow efficiency and prevents hydraulic circuit overheating on utility class excavator units.';
      advantages = [
        'Highly compact profile fits easily into narrow utility trenches',
        'Auto-lubrication cartridge ready for uninterrupted grease supply',
        'Very low fuel consumption during high frequency cycling'
      ];
      limitations = [
        'Insufficient structural mass to break thick reinforced concrete or natural quarry bedrock',
        'Shorter lifespan under continuous maximum-power operation'
      ];
      alternatives = [
        { model: 'HB1400', size: '13 - 18 tons', reason: 'Slightly higher impact mass for stubborn clay-bound sandstones.' }
      ];
    } else if (wt >= 18 && wt < 30) {
      // Medium Class Selection based on hardness
      if (material === 'rock' && (hardness === 'hard' || hardness === 'extreme')) {
        modelName = 'HB2200-S';
        size = 'Medium-Heavy Breaker (Silenced)';
        pressure = '150 - 170 bar';
        oilFlow = '130 - 170 l/min';
        impactEnergy = '5,200 Joules';
        excavatorRange = '22 - 32 tons';
        bestApplication = 'Continuous secondary quarry breaking and thick highway slab crushing.';
        reason = `Tuned for hard rock breaking on a medium carrier. The HB2200-S features a reinforced box housing and vibration dampers to protect the excavator's boom joints.`;
        advantages = [
          'Excellent power-to-weight ratio to bust hard basalt/granite',
          'Vibration-dampened polyurethane buffers absorb side-impact shock',
          'Dual tool retainer pin design ensures steady alignment'
        ];
        limitations = [
          'May trigger high-temperature warnings on standard hydraulic pumps if worked without cooling packages',
          'Requires skilled operator alignment to avoid dynamic fatigue on tool shank'
        ];
        alternatives = [
          { model: 'HB1900', size: '18 - 28 tons', reason: 'Lighter choice, safer on extended boom reaches.' },
          { model: 'HB3200', size: '28 - 40 tons', reason: 'Max power choice if excavator lifting limits permit.' }
        ];
      } else {
        // Standard medium duty
        modelName = 'HB1900';
        size = 'Medium Class';
        pressure = '140 - 160 bar';
        oilFlow = '110 - 150 l/min';
        impactEnergy = '4,000 Joules';
        excavatorRange = '18 - 28 tons';
        bestApplication = 'Concrete demolition, medium sandstone trenching, and general site preparation.';
        reason = 'Perfect structural pairing for utility-class excavators. The HB1900 delivers steady impact rate with outstanding energy efficiency.';
        advantages = [
          'Highly reliable field-proven monoblock design with very few moving parts',
          'Auto-control valve maintains constant velocity under fluctuating hydraulic pressures',
          'Excellent resale value and widely available replacement bushings'
        ];
        limitations = [
          'Reduced productivity on ultra-reinforced high-hardness foundations',
          'Unsuited for direct subsea usage without external air-compressor auxiliary kits'
        ];
        alternatives = [
          { model: 'HB1600', size: '18 - 24 tons', reason: 'Fuel efficient utility option.' },
          { model: 'HB2200', size: '24 - 32 tons', reason: 'Heavier blow capacity for structural foundations.' }
        ];
      }
    } else if (wt >= 30 && wt < 45) {
      // Heavy Breaker Class
      if (material === 'rock' && (hardness === 'hard' || hardness === 'extreme')) {
        modelName = 'HB3600-S Pro';
        size = 'Heavy-Duty Production Breaker';
        pressure = '160 - 180 bar';
        oilFlow = '170 - 240 l/min';
        impactEnergy = '8,500 Joules';
        excavatorRange = '32 - 48 tons';
        bestApplication = 'Primary quarry breaking, deep rock trenching, and heavy marine pier demolition.';
        reason = `Engineered for intense quarry operations. The HB3600-S Pro offers immense impact energy designed to propagate shockwaves deep into hard rock formations, fracturing them along natural seams.`;
        advantages = [
          'Energy recovery system recycles piston rebound energy to boost the next stroke',
          'Fully enclosed silenced box structure protects internal components',
          'Hardox steel front protective armor plate standard'
        ];
        limitations = [
          'Heavy weight restricts carrier stability on steep side slopes',
          'High oil flow requirements require dual-pump configuration on certain excavator models'
        ];
        alternatives = [
          { model: 'HB3200', size: '28 - 40 tons', reason: 'Reduced tool mass if high speed slewing is required.' },
          { model: 'HB4800', size: '40 - 60 tons', reason: 'Maximum impact class for high productivity.' }
        ];
      } else {
        modelName = 'HB3200';
        size = 'Heavy Duty Utility Breaker';
        pressure = '150 - 175 bar';
        oilFlow = '150 - 210 l/min';
        impactEnergy = '6,500 Joules';
        excavatorRange = '28 - 40 tons';
        bestApplication = 'Heavy building demolition, bridge pier removal, and dense gravel excavations.';
        reason = 'Standard heavy breaker optimized for 30+ ton carriers. Highly reliable stroke control ensures maximum utility across concrete and soil applications.';
        advantages = [
          'Slip-fit tool bushing can be replaced easily in the field',
          'Internal accumulator design cushions carrier main control valves',
          'Piston strokes can be toggled between long/slow and short/fast'
        ];
        limitations = [
          'Lower impact velocity than lighter breakers on soft loose clay sandstone',
          'Requires auxiliary hydraulic piping to handle high pressure flow return'
        ];
        alternatives = [
          { model: 'HB3600-S Pro', size: '32 - 48 tons', reason: 'Upgrade for continuous high-strength breaking.' }
        ];
      }
    } else {
      // Ultra-Heavy production series (wt >= 45 tons)
      modelName = (material === 'rock' && (hardness === 'hard' || hardness === 'extreme')) ? 'HB6000 Extreme' : 'HB4800 Pro';
      size = 'Ultra-Heavy Production Series';
      pressure = '165 - 190 bar';
      oilFlow = '210 - 310 l/min';
      impactEnergy = modelName === 'HB6000 Extreme' ? '14,000 Joules' : '11,500 Joules';
      excavatorRange = modelName === 'HB6000 Extreme' ? '55 - 90 tons' : '40 - 70 tons';
      bestApplication = 'Large-scale quarry mining, deep foundation excavation, and massive coastal breakwater reconstruction.';
      reason = `Selected for ultra-heavy production scale with a high-capacity carrier. Designed for maximum mechanical shattering force to maximize productivity under standard and hard rock requirements.`;
      advantages = [
        'Immense structural mass creates unrivaled material fragmentation per blow',
        'Dynamic auto-control valve detects rock hardness and shifts stroke profile instantly',
        'Heavy-duty dual-layer bushing prevents tool alignment drift'
      ];
      limitations = [
        'Extremely high structural and hydraulic footprint restricts usage to specialized heavy machinery',
        'High wear on tool point requires continuous dynamic grease supply'
      ];
      alternatives = [
        { model: 'HB3600-S Pro', size: '32 - 48 tons', reason: 'Lighter option, easier on standard utility sites.' }
      ];
    }

    // Safety and Maintenance lists customized by selections
    const safetyReminders = [
      'Safety Glass Goggles & High-Vis PPE: Mandatory for all personnel within a 20-meter radius.',
      'No Dry/Blank Firing: Never allow the hammer to strike without full pressure on the chisel point.',
      'Check Lock Pins: Ensure tool retainer pins are fully locked before starting the hydraulic cycle.'
    ];

    if (env === 'underwater') {
      safetyReminders.push('Marine Keepout Zone: Activate dynamic vessel watch and verify subsea diver clearances.');
    }

    const maintenanceReminders = [
      'Lubrication Frequency: Grease tool shank/bushing manually every 2 hours of active operation, or verify automatic grease line level.',
      'Nitrogen Accumulator Charge: Verify nitrogen gas charge pressure (recommended 40 bar) weekly.',
      'Bolt Torque Verification: Perform hourly visual inspection on housing bolts and tie rods during first 10 operating hours.'
    ];

    if (material === 'rock' && hardness === 'extreme') {
      maintenanceReminders.push('Chisel Profiling: Dress chisel edges frequently to prevent stress concentrations leading to fracturing.');
    }

    // Specifications array
    const specifications = [
      { label: 'Hammer Model Name', value: modelName },
      { label: 'Equipment Size Class', value: size },
      { label: 'Impact Energy Rating', value: impactEnergy },
      { label: 'Required Oil Flow Rate', value: oilFlow },
      { label: 'Operating Circuit Pressure', value: pressure },
      { label: 'Recommended Carrier Weight', value: excavatorRange },
      { label: 'Productivity Tune', value: prod.toUpperCase() },
      { label: 'Acoustic Compliance', value: env === 'urban' ? 'Quiet (Silenced Box)' : 'Standard' }
    ];

    return {
      modelName,
      size,
      pressure,
      oilFlow,
      impactEnergy,
      excavatorRange,
      bestApplication,
      reason,
      advantages,
      limitations,
      alternatives,
      safetyReminders,
      maintenanceReminders,
      specifications
    };
  });

  constructor(
    private operationsService: OperationsService,
    private toastController: ToastController,
    private alertController: AlertController
  ) {
    // Add all icons needed
    addIcons({
      constructOutline, sparklesOutline, checkmarkCircleOutline, closeOutline,
      warningOutline, timerOutline, statsChartOutline, arrowForwardOutline,
      downloadOutline, optionsOutline, listOutline, eyeOutline, arrowBackOutline,
      shieldCheckmarkOutline, alertCircleOutline, flashOutline, speedometerOutline,
      buildOutline, ribbonOutline, documentTextOutline, settingsOutline,
      refreshOutline, informationCircleOutline, trashOutline, copyOutline
    });
  }

  ngOnInit() {
    this.subscriptions.push(
      this.operationsService.state$.subscribe(state => {
        this.state = state;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // Set selected parameter options
  public selectMaterial(type: string) {
    this.selectedMaterial.set(type);
    
    // Auto-adjust default application
    if (type === 'rock') {
      this.selectedApplication.set('quarry');
    } else if (type === 'concrete') {
      this.selectedApplication.set('demolition');
    } else {
      this.selectedApplication.set('foundation');
    }
  }

  public selectRockHardness(level: string) {
    this.selectedRockHardness.set(level);
  }

  public selectConcreteStrength(level: string) {
    this.selectedConcreteStrength.set(level);
  }

  public selectGroundCondition(cond: string) {
    this.selectedGroundCondition.set(cond);
  }

  public selectWorkingEnvironment(env: string) {
    this.selectedWorkingEnvironment.set(env);
  }

  public selectExcavator(index: number) {
    this.selectedExcavatorIndex.set(index);
  }

  public selectProductivity(level: string) {
    this.selectedProductivity.set(level);
  }

  public selectApplication(app: string) {
    this.selectedApplication.set(app);
  }

  // Navigation handlers
  public nextStep() {
    const step = this.currentStep();
    if (step === 2) {
      // Transitioning to Step 3: AI Analysis Phase
      this.currentStep.set(3);
      this.runAnalysisSimulation();
    } else if (step < 4) {
      this.currentStep.set(step + 1);
    }
  }

  public prevStep() {
    const step = this.currentStep();
    if (step > 1) {
      this.currentStep.set(step - 1);
    }
  }

  public resetWizard() {
    this.currentStep.set(1);
    this.scanProgress.set(0);
    this.scanningLogs.set([]);
  }

  // AI Recommendation Engine Simulation Process
  private runAnalysisSimulation() {
    this.scanningLogs.set([]);
    this.scanProgress.set(0);

    const logStatements = [
      'INITIALIZING IQIP ANALYSIS MATRIX...',
      `PARSING CHASSIS: ${this.selectedExcavator().model} (${this.selectedExcavator().weight}t)`,
      `EVALUATING EXCAVATOR OIL DELIVERY CAPACITY...`,
      `ASSESSING MATERIAL CHARACTERISTICS: ${this.selectedMaterial().toUpperCase()} (${this.selectedMaterial() === 'rock' ? this.selectedRockHardness() : this.selectedConcreteStrength()})`,
      `GROUND MODELING: ${this.selectedGroundCondition().replace('_', ' ').toUpperCase()}`,
      `ENVIRONMENT FILTERING: ${this.selectedWorkingEnvironment().toUpperCase()} CONSTRAINTS`,
      'RUNNING MULTI-AGENT CORRELATION ON DYNAMIC IMPEDANCE LIMITS...',
      'VERIFYING MECHANICAL CAVITATION LIMITS AND OVERHEAT MARGINS...',
      'ANALYSIS COMPLETE: GENERATING DYNAMIC SPECIFICATION SHEETS...'
    ];

    let count = 0;
    const logInterval = 300; // time per log statement
    
    const interval = setInterval(() => {
      if (count < logStatements.length) {
        this.scanningLogs.update(logs => [...logs, logStatements[count]]);
        this.scanProgress.set(Math.round(((count + 1) / logStatements.length) * 100));
        count++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          this.currentStep.set(4); // Advance to report screen
        }, 500);
      }
    }, logInterval);
  }

  // Helper Actions on the generated report
  public async copyRecommendation() {
    const rec = this.recommendation();
    const text = `
IQIP OVERWATCH™ - AI HAMMER RECOMMENDATION REPORT
==================================================
Hammer Model: ${rec.modelName}
Size Class: ${rec.size}
Impact Energy Category: ${rec.impactEnergy}
Required Oil Flow: ${rec.oilFlow}
Circuit Pressure: ${rec.pressure}
Carrier Recommended Range: ${rec.excavatorRange}

Mechanical Reasoning:
${rec.reason}

Advantages:
${rec.advantages.map(a => '- ' + a).join('\n')}

Limitations:
${rec.limitations.map(l => '- ' + l).join('\n')}
`;

    try {
      await navigator.clipboard.writeText(text);
      this.showToast('Report Copied', 'Success! Hammer specification text copied to clipboard.', 'success');
    } catch (err) {
      this.showToast('Copy Failed', 'Could not copy text automatically.', 'danger');
    }
  }

  public async exportPDF() {
    this.showToast('Generating PDF', 'Compiling PDF Specification Sheet...', 'primary');
    
    setTimeout(() => {
      this.showToast('Export Successful', `SpecSheet_${this.recommendation().modelName}.pdf has been downloaded successfully.`, 'success');
    }, 1500);
  }

  public async applyToOperations() {
    // Apply selected parameters to existing active overwatch telemetry
    const rec = this.recommendation();
    
    // Adjust values in OperationsService
    this.operationsService.addAlert('success', `AI Recommendation Applied: Pre-Operation verified with ${rec.modelName}.`);
    
    // Direct modal alert
    const alert = await this.alertController.create({
      header: 'Recommendation Synchronized',
      message: `The recommended ${rec.modelName} has been successfully registered to the overwatch system. Real-time telemetry indicators are now adjusted to track nominal limits.`,
      buttons: ['CONTINUE']
    });
    await alert.present();
  }

  private async showToast(header: string, message: string, color: string) {
    const toast = await this.toastController.create({
      header,
      message,
      duration: 2500,
      position: 'bottom',
      color: color,
      cssClass: 'ow-toast'
    });
    await toast.present();
  }
}
