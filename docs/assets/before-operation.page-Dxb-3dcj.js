import{g as L,B as C,t as D,O as I,s as l,h as T,i as G,j,k as B,l as F,m as q,w as W,n as U,o as _,p as V,q as $,r as Y,u as J,v as K,x as Q,y as Z,z as X,E as ee,G as re,H as te,J as ne,K as ie,N as ae,P as oe,Q as se,R as ce,S as le,T as P,A as z,C as de,a as pe,U as me,b as ge,V as ue,W as he,X as ve,c as be,Y as fe,Z as xe,_ as ye,$ as we}from"./index-QKuR8YBD.js";const ke=`<ion-content [scrollEvents]="true" class="before-operation-content">\r
  <div class="before-operation-wrapper">\r
    \r
    <!-- PAGE TITLE HEADER -->\r
    <div class="page-title-section">\r
      <div class="title-meta">\r
        <ion-badge color="primary" class="meta-badge">AI PLANNING MODULE</ion-badge>\r
        <h1>Before Operation — AI Hammer Recommendation</h1>\r
        <p class="subtitle text-secondary">Analyze project variables and match optimal hydraulic machinery prior to active pile driving or rock breaking sequences.</p>\r
      </div>\r
      \r
      <!-- STEP INDICATORS -->\r
      <div class="step-indicator-wrapper">\r
        <div class="step-item" [class.active]="currentStep() >= 1" [class.completed]="currentStep() > 1">\r
          <span class="step-num">1</span>\r
          <span class="step-lbl">Conditions</span>\r
        </div>\r
        <div class="step-line" [class.active]="currentStep() >= 2"></div>\r
        <div class="step-item" [class.active]="currentStep() >= 2" [class.completed]="currentStep() > 2">\r
          <span class="step-num">2</span>\r
          <span class="step-lbl">Carrier Fleet</span>\r
        </div>\r
        <div class="step-line" [class.active]="currentStep() >= 3"></div>\r
        <div class="step-item" [class.active]="currentStep() >= 3" [class.completed]="currentStep() > 3">\r
          <span class="step-num">3</span>\r
          <span class="step-lbl">AI Processing</span>\r
        </div>\r
        <div class="step-line" [class.active]="currentStep() >= 4"></div>\r
        <div class="step-item" [class.active]="currentStep() >= 4">\r
          <span class="step-num">4</span>\r
          <span class="step-lbl">Engineering Report</span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- STEP 1: SELECT PROJECT CONDITIONS -->\r
    <div class="step-container" *ngIf="currentStep() === 1" id="step-conditions">\r
      <div class="section-instruction">\r
        <h2>Step 1: Define Project & Ground Conditions</h2>\r
        <p class="text-secondary">Specify materials, hardness indicators, and environmental limitations.</p>\r
      </div>\r
\r
      <ion-grid class="ion-no-padding">\r
        <ion-row>\r
          <!-- Material Type Cards -->\r
          <ion-col size="12" class="grid-section">\r
            <h3 class="input-section-title"><ion-icon name="options"></ion-icon> TARGET MATERIAL TYPE</h3>\r
            <div class="custom-card-grid">\r
              <div \r
                class="selector-card" \r
                [class.selected]="selectedMaterial() === 'rock'" \r
                (click)="selectMaterial('rock')"\r
                id="material-rock"\r
              >\r
                <div class="card-glow"></div>\r
                <div class="icon-circle text-magenta">\r
                  <ion-icon name="construct"></ion-icon>\r
                </div>\r
                <div class="card-info">\r
                  <h4>Rock Formations</h4>\r
                  <p>Bedrock breaking, quarrying, secondary demolition, and dense aggregates.</p>\r
                </div>\r
                <div class="selection-indicator"></div>\r
              </div>\r
\r
              <div \r
                class="selector-card" \r
                [class.selected]="selectedMaterial() === 'concrete'" \r
                (click)="selectMaterial('concrete')"\r
                id="material-concrete"\r
              >\r
                <div class="card-glow"></div>\r
                <div class="icon-circle text-cyan">\r
                  <ion-icon name="build"></ion-icon>\r
                </div>\r
                <div class="card-info">\r
                  <h4>Concrete Structures</h4>\r
                  <p>Reinforced slabs, foundations, bridge deck removals, and commercial buildings.</p>\r
                </div>\r
                <div class="selection-indicator"></div>\r
              </div>\r
\r
              <div \r
                class="selector-card" \r
                [class.selected]="selectedMaterial() === 'soil'" \r
                (click)="selectMaterial('soil')"\r
                id="material-soil"\r
              >\r
                <div class="card-glow"></div>\r
                <div class="icon-circle text-green">\r
                  <ion-icon name="globe"></ion-icon>\r
                </div>\r
                <div class="card-info">\r
                  <h4>Soil & Foundations</h4>\r
                  <p>Pile driving, utility sheet piling, dense sand beds, and silty seabeds.</p>\r
                </div>\r
                <div class="selection-indicator"></div>\r
              </div>\r
            </div>\r
          </ion-col>\r
\r
          <!-- Dynamic Hardness / Strength Subsections -->\r
          <ion-col size="12" class="grid-section ion-margin-top" *ngIf="selectedMaterial() === 'rock'">\r
            <h3 class="input-section-title"><ion-icon name="speedometer"></ion-icon> ROCK HARDNESS PROFILE (COMPRESSIVE STRENGTH)</h3>\r
            <div class="segmented-grid">\r
              <div class="segment-card" [class.active]="selectedRockHardness() === 'soft'" (click)="selectRockHardness('soft')">\r
                <span>Soft (&lt;50 MPa)</span>\r
                <p>Sandstones, Shale, Coquina</p>\r
              </div>\r
              <div class="segment-card" [class.active]="selectedRockHardness() === 'medium'" (click)="selectRockHardness('medium')">\r
                <span>Medium (50-100 MPa)</span>\r
                <p>Limestones, Calcitic rocks</p>\r
              </div>\r
              <div class="segment-card" [class.active]="selectedRockHardness() === 'hard'" (click)="selectRockHardness('hard')">\r
                <span>Hard (100-150 MPa)</span>\r
                <p>Granites, Dolomite, Quartz</p>\r
              </div>\r
              <div class="segment-card" [class.active]="selectedRockHardness() === 'extreme'" (click)="selectRockHardness('extreme')">\r
                <span>Extremely Hard (&gt;150 MPa)</span>\r
                <p>Basalt, Dense Quartzite</p>\r
              </div>\r
            </div>\r
          </ion-col>\r
\r
          <ion-col size="12" class="grid-section ion-margin-top" *ngIf="selectedMaterial() === 'concrete'">\r
            <h3 class="input-section-title"><ion-icon name="speedometer"></ion-icon> CONCRETE STRENGTH RATING</h3>\r
            <div class="segmented-grid">\r
              <div class="segment-card" [class.active]="selectedConcreteStrength() === 'low'" (click)="selectConcreteStrength('low')">\r
                <span>Low / Standard (C20/25)</span>\r
                <p>Residential footers & brickworks</p>\r
              </div>\r
              <div class="segment-card" [class.active]="selectedConcreteStrength() === 'standard'" (click)="selectConcreteStrength('standard')">\r
                <span>Structural (C30/37)</span>\r
                <p>Beams, elevated slabs, standard walls</p>\r
              </div>\r
              <div class="segment-card" [class.active]="selectedConcreteStrength() === 'high'" (click)="selectConcreteStrength('high')">\r
                <span>High-Strength (C45/55)</span>\r
                <p>Industrial foundations, heavy pillars</p>\r
              </div>\r
              <div class="segment-card" [class.active]="selectedConcreteStrength() === 'ultra'" (click)="selectConcreteStrength('ultra')">\r
                <span>Ultra-High (C60+)</span>\r
                <p>Containment, heavy bridge piers</p>\r
              </div>\r
            </div>\r
          </ion-col>\r
\r
          <!-- Ground Condition Selection -->\r
          <ion-col size="12" class="grid-section ion-margin-top">\r
            <h3 class="input-section-title"><ion-icon name="analytics"></ion-icon> GROUND STRATA CONDITION</h3>\r
            <div class="segmented-grid gap-4">\r
              <div class="segment-card" [class.active]="selectedGroundCondition() === 'stable'" (click)="selectGroundCondition('stable')">\r
                <span>Stable Ground</span>\r
                <p>Firm consolidated dry clay or soilbed</p>\r
              </div>\r
              <div class="segment-card" [class.active]="selectedGroundCondition() === 'clay'" (click)="selectGroundCondition('clay')">\r
                <span>Dense Clay / Silt</span>\r
                <p>Cohesive sticky soil profiles</p>\r
              </div>\r
              <div class="segment-card" [class.active]="selectedGroundCondition() === 'loose_sand'" (click)="selectGroundCondition('loose_sand')">\r
                <span>Loose Sand / Silt</span>\r
                <p>Elastic non-cohesive sandy horizons</p>\r
              </div>\r
              <div class="segment-card" [class.active]="selectedGroundCondition() === 'gravel'" (click)="selectedGroundCondition.set('gravel')">\r
                <span>Dense Gravel & Cobbles</span>\r
                <p>High impedance pebble composite layers</p>\r
              </div>\r
              <div class="segment-card" [class.active]="selectedGroundCondition() === 'saturated'" (click)="selectGroundCondition('saturated')">\r
                <span>Saturated / Muddy</span>\r
                <p>Water-logged high pore pressure site</p>\r
              </div>\r
              <div class="segment-card" [class.active]="selectedGroundCondition() === 'offshore'" (click)="selectGroundCondition('offshore')">\r
                <span>Offshore Seabed</span>\r
                <p>Deep subsea marine jacket piling conditions</p>\r
              </div>\r
            </div>\r
          </ion-col>\r
\r
          <!-- Working Environment Options -->\r
          <ion-col size="12" class="grid-section ion-margin-top">\r
            <h3 class="input-section-title"><ion-icon name="cloud"></ion-icon> WORKING ENVIRONMENT CONSTRAINTS</h3>\r
            <div class="segmented-grid">\r
              <div class="segment-card" [class.active]="selectedWorkingEnvironment() === 'general'" (click)="selectWorkingEnvironment('general')">\r
                <span>Open General Site</span>\r
                <p>Unrestricted open air construction</p>\r
              </div>\r
              <div class="segment-card" [class.active]="selectedWorkingEnvironment() === 'urban'" (click)="selectWorkingEnvironment('urban')">\r
                <span>Urban (Noise Sensitive)</span>\r
                <p>Enforce strict decibel soundproofing</p>\r
              </div>\r
              <div class="segment-card" [class.active]="selectedWorkingEnvironment() === 'underwater'" (click)="selectWorkingEnvironment('underwater')">\r
                <span>Underwater / Subsea</span>\r
                <p>Submergible pressure supply required</p>\r
              </div>\r
              <div class="segment-card" [class.active]="selectedWorkingEnvironment() === 'tunnel'" (click)="selectWorkingEnvironment('tunnel')">\r
                <span>Tunnel / Confined Space</span>\r
                <p>Low-headroom compact reach setup</p>\r
              </div>\r
            </div>\r
          </ion-col>\r
        </ion-row>\r
      </ion-grid>\r
\r
      <!-- NAVIGATION ROW -->\r
      <div class="wizard-nav-bar border-top ion-margin-top">\r
        <div class="left-nav-meta text-secondary font-mono">\r
          <span>MATERIAL: {{ selectedMaterial() | uppercase }}</span>\r
          <span class="bullet-separator"></span>\r
          <span>ENVIRONMENT: {{ selectedWorkingEnvironment() | uppercase }}</span>\r
        </div>\r
        <ion-button fill="solid" color="primary" class="nav-next-btn" (click)="nextStep()" id="btn-next-step-1">\r
          Next: Machine Specs <ion-icon name="arrow-forward" slot="end"></ion-icon>\r
        </ion-button>\r
      </div>\r
    </div>\r
\r
    <!-- STEP 2: CHOOSE MACHINE INFORMATION -->\r
    <div class="step-container" *ngIf="currentStep() === 2" id="step-carrier">\r
      <div class="section-instruction">\r
        <h2>Step 2: Choose Machine & Carrier Specifications</h2>\r
        <p class="text-secondary">Configure excavator carrier capacities and required production velocities.</p>\r
      </div>\r
\r
      <ion-grid class="ion-no-padding">\r
        <ion-row>\r
          <!-- Carrier / Excavator Fleet List -->\r
          <ion-col size="12" class="grid-section">\r
            <h3 class="input-section-title"><ion-icon name="construct"></ion-icon> SELECT CARRIER FROM EQUIPMENT FLEET</h3>\r
            <div class="carrier-scroll-list">\r
              <div \r
                *ngFor="let exc of excavators; let i = index" \r
                class="carrier-item-card" \r
                [class.selected]="selectedExcavatorIndex() === i"\r
                (click)="selectExcavator(i)"\r
              >\r
                <div class="carrier-icon-cell">\r
                  <svg viewBox="0 0 100 100" class="carrier-svg">\r
                    <path d="M15,80 L85,80 L85,72 L70,72 L65,55 L35,55 L30,72 L15,72 Z" fill="currentColor" opacity="0.3"/>\r
                    <rect x="38" y="42" width="24" height="15" fill="currentColor" opacity="0.4"/>\r
                    <circle cx="28" cy="78" r="8" fill="none" stroke="currentColor" stroke-width="3"/>\r
                    <circle cx="72" cy="78" r="8" fill="none" stroke="currentColor" stroke-width="3"/>\r
                    <circle cx="50" cy="78" r="8" fill="none" stroke="currentColor" stroke-width="3"/>\r
                  </svg>\r
                </div>\r
                <div class="carrier-details">\r
                  <h4>{{ exc.model }}</h4>\r
                  <span class="weight-badge font-mono">{{ exc.weight }} Tons</span>\r
                </div>\r
                <div class="class-tag">\r
                  <ion-badge [color]="exc.weight >= 45 ? 'danger' : exc.weight >= 28 ? 'warning' : 'primary'">\r
                    {{ exc.weight >= 45 ? 'ULTRA-HEAVY' : exc.weight >= 28 ? 'HEAVY' : 'UTILITY' }}\r
                  </ion-badge>\r
                </div>\r
              </div>\r
            </div>\r
          </ion-col>\r
\r
          <!-- Required Productivity Tuning -->\r
          <ion-col size="12" class="grid-section ion-margin-top">\r
            <h3 class="input-section-title"><ion-icon name="speedometer"></ion-icon> TARGET PRODUCTIVITY / TUNING LEVEL</h3>\r
            <div class="productivity-cards-grid">\r
              <div class="prod-card" [class.selected]="selectedProductivity() === 'standard'" (click)="selectProductivity('standard')">\r
                <div class="card-title-row">\r
                  <h4>Standard Eco</h4>\r
                  <ion-icon name="leaf" class="text-green"></ion-icon>\r
                </div>\r
                <p>Focuses on maximum fuel efficiency and lowest wear rate on hydraulic circuits.</p>\r
              </div>\r
\r
              <div class="prod-card" [class.selected]="selectedProductivity() === 'high'" (click)="selectProductivity('high')">\r
                <div class="card-title-row">\r
                  <h4>High Velocity</h4>\r
                  <ion-icon name="flash" class="text-cyan"></ion-icon>\r
                </div>\r
                <p>Balances fuel economy and hammer blow rate for commercial excavators.</p>\r
              </div>\r
\r
              <div class="prod-card" [class.selected]="selectedProductivity() === 'ultra'" (click)="selectProductivity('ultra')">\r
                <div class="card-title-row">\r
                  <h4>Ultra Production</h4>\r
                  <ion-icon name="ribbon" class="text-magenta"></ion-icon>\r
                </div>\r
                <p>Delivers maximum kinetic breaking force per second. Engineered for rigid materials.</p>\r
              </div>\r
            </div>\r
          </ion-col>\r
\r
          <!-- Working Application -->\r
          <ion-col size="12" class="grid-section ion-margin-top">\r
            <h3 class="input-section-title"><ion-icon name="stats-chart"></ion-icon> WORKING APPLICATION</h3>\r
            <div class="application-grid">\r
              <div class="app-chip" [class.active]="selectedApplication() === 'demolition'" (click)="selectApplication('demolition')">\r
                <ion-icon name="build"></ion-icon>\r
                <span>Demolition</span>\r
              </div>\r
              <div class="app-chip" [class.active]="selectedApplication() === 'trenching'" (click)="selectApplication('trenching')">\r
                <ion-icon name="options"></ion-icon>\r
                <span>Trenching</span>\r
              </div>\r
              <div class="app-chip" [class.active]="selectedApplication() === 'quarry'" (click)="selectApplication('quarry')">\r
                <ion-icon name="construct"></ion-icon>\r
                <span>Quarry</span>\r
              </div>\r
              <div class="app-chip" [class.active]="selectedApplication() === 'road_work'" (click)="selectApplication('road_work')">\r
                <ion-icon name="trail-sign"></ion-icon>\r
                <span>Road Work</span>\r
              </div>\r
              <div class="app-chip" [class.active]="selectedApplication() === 'foundation'" (click)="selectApplication('foundation')">\r
                <ion-icon name="shield-checkmark"></ion-icon>\r
                <span>Foundation / Piling</span>\r
              </div>\r
              <div class="app-chip" [class.active]="selectedApplication() === 'general'" (click)="selectApplication('general')">\r
                <ion-icon name="apps"></ion-icon>\r
                <span>General Construction</span>\r
              </div>\r
            </div>\r
          </ion-col>\r
        </ion-row>\r
      </ion-grid>\r
\r
      <!-- NAVIGATION ROW -->\r
      <div class="wizard-nav-bar border-top ion-margin-top">\r
        <ion-button fill="outline" color="medium" (click)="prevStep()" class="nav-back-btn">\r
          <ion-icon name="arrow-back" slot="start"></ion-icon> Back\r
        </ion-button>\r
        <div class="left-nav-meta text-secondary font-mono hide-sm">\r
          <span>CARRIER: {{ selectedExcavator().model }} ({{ selectedExcavator().weight }}t)</span>\r
        </div>\r
        <ion-button fill="solid" color="primary" class="nav-next-btn animate-pulse" (click)="nextStep()" id="btn-next-step-2">\r
          Run AI Recommendation Engine <ion-icon name="sparkles" slot="end"></ion-icon>\r
        </ion-button>\r
      </div>\r
    </div>\r
\r
    <!-- STEP 3: AI ANALYSES THE INFORMATION (LOADING STATE) -->\r
    <div class="step-container calculation-container" *ngIf="currentStep() === 3" id="step-processing">\r
      <div class="ai-processing-circle-container">\r
        <!-- pulsating orbit graphic -->\r
        <div class="pulse-orbit">\r
          <div class="orbit-center">\r
            <span class="orbit-text font-display">IQIP AI</span>\r
          </div>\r
          <div class="spinning-ray"></div>\r
          <div class="inner-glow-core"></div>\r
        </div>\r
      </div>\r
\r
      <div class="processing-meta-text">\r
        <h2>Evaluating Engineering Mechanics...</h2>\r
        <p class="text-secondary font-mono">Simulating hydraulic pressures and peak strain waves across available hammer configurations</p>\r
      </div>\r
\r
      <!-- PROGRESS TRACKER -->\r
      <div class="progress-bar-section font-mono">\r
        <ion-progress-bar [value]="scanProgress() / 100" color="primary" class="analysis-progress-bar"></ion-progress-bar>\r
        <div class="progress-labels">\r
          <span>DOCKING SIMULATION ENGINES</span>\r
          <span class="text-cyan font-bold">{{ scanProgress() }}%</span>\r
        </div>\r
      </div>\r
\r
      <!-- Futuristic Scroll Terminal Log -->\r
      <div class="futuristic-terminal">\r
        <div class="terminal-header font-mono">\r
          <div class="dot red"></div>\r
          <div class="dot yellow"></div>\r
          <div class="dot green"></div>\r
          <span class="terminal-title">OVERWATCH_AI_SHELL - VERVERSION 4.8.2-TS</span>\r
        </div>\r
        <div class="terminal-body font-mono">\r
          <div *ngFor="let log of scanningLogs()" class="log-line">\r
            <span class="text-green">[SYSTEM-OK]</span>\r
            <span class="log-text">{{ log }}</span>\r
          </div>\r
          <div class="log-line blinking-cursor-line" *ngIf="scanProgress() < 100">\r
            <span class="text-cyan">[SCANNING]</span>\r
            <span class="blinking-cursor">_</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- STEP 4: DISPLAY ENGINEERING REPORT -->\r
    <div class="step-container" *ngIf="currentStep() === 4" id="step-report">\r
      \r
      <!-- REPORT CONTROLS ROW -->\r
      <div class="report-controls-row">\r
        <ion-button fill="outline" color="medium" size="small" (click)="resetWizard()" class="back-btn">\r
          <ion-icon name="refresh" slot="start"></ion-icon> Restart Selection\r
        </ion-button>\r
        <div class="actions">\r
          <ion-button fill="outline" color="primary" size="small" (click)="copyRecommendation()">\r
            <ion-icon name="copy" slot="start"></ion-icon> Copy Spec\r
          </ion-button>\r
          <ion-button fill="outline" color="primary" size="small" (click)="exportPDF()">\r
            <ion-icon name="download" slot="start"></ion-icon> Export PDF\r
          </ion-button>\r
          <ion-button fill="solid" color="secondary" size="small" (click)="applyToOperations()">\r
            <ion-icon name="checkmark-circle" slot="start"></ion-icon> Apply to Overwatch\r
          </ion-button>\r
        </div>\r
      </div>\r
\r
      <!-- ACTIVE SAFETY/PARAMETRIC WARNINGS -->\r
      <div class="warnings-alert-box font-mono" *ngIf="configWarnings().length > 0">\r
        <div class="box-header">\r
          <ion-icon name="warning" class="text-warn"></ion-icon>\r
          <span>DYNAMIC CRITICAL PARAMETRIC ADVISORIES ({{ configWarnings().length }})</span>\r
        </div>\r
        <ul class="warnings-list">\r
          <li *ngFor="let w of configWarnings()">{{ w }}</li>\r
        </ul>\r
      </div>\r
\r
      <!-- MAIN REPORT GRID -->\r
      <ion-grid class="ion-no-padding ion-margin-top">\r
        <ion-row>\r
          <!-- COLUMN 1: RECOMMENDED MODEL HERO CARD & SPECS -->\r
          <ion-col size="12" size-lg="5" class="report-col">\r
            <!-- Hero Hammer Card -->\r
            <div class="report-hero-card">\r
              <div class="glow-layer"></div>\r
              <div class="hero-header">\r
                <span class="sub-lbl font-mono">RECOMMENDED MODEL MATCH</span>\r
                <h1 class="text-cyan">{{ recommendation().modelName }}</h1>\r
                <ion-badge color="primary" class="class-badge font-mono">{{ recommendation().size }}</ion-badge>\r
              </div>\r
\r
              <div class="compatibility-meter-block font-mono">\r
                <div class="meter-labels">\r
                  <span>Carrier Compatibility Index</span>\r
                  <span class="text-green font-bold">100% Matches Carrier Limits</span>\r
                </div>\r
                <div class="meter-bar"><div class="meter-fill" style="width: 100%"></div></div>\r
              </div>\r
\r
              <!-- Quick spec items -->\r
              <div class="quick-specs-grid font-mono">\r
                <div class="spec-cell">\r
                  <span class="lbl">ENERGY</span>\r
                  <span class="val text-green">{{ recommendation().impactEnergy }}</span>\r
                </div>\r
                <div class="spec-cell">\r
                  <span class="lbl">FLOW RATE</span>\r
                  <span class="val text-cyan">{{ recommendation().oilFlow }}</span>\r
                </div>\r
                <div class="spec-cell">\r
                  <span class="lbl">PRESSURE</span>\r
                  <span class="val text-cyan">{{ recommendation().pressure }}</span>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Full Specifications Card -->\r
            <div class="ow-card ion-margin-top">\r
              <div class="ow-card-header">\r
                <h3><ion-icon name="list"></ion-icon> Hammer Technical Specifications</h3>\r
              </div>\r
              <div class="ow-card-body">\r
                <div class="tech-spec-table font-mono">\r
                  <div class="table-row" *ngFor="let spec of recommendation().specifications">\r
                    <span class="label text-secondary">{{ spec.label }}</span>\r
                    <span class="value text-primary font-semibold">{{ spec.value }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </ion-col>\r
\r
          <!-- COLUMN 2: ENGINEERING EVALUATION & ALTERNATIVES -->\r
          <ion-col size="12" size-lg="7" class="report-col">\r
            <!-- Mechanical Evaluation -->\r
            <div class="ow-card">\r
              <div class="ow-card-header">\r
                <h3><ion-icon name="sparkles"></ion-icon> Mechanical Reason & AI Analysis</h3>\r
                <div class="pulse-indicator"></div>\r
              </div>\r
              <div class="ow-card-body">\r
                <p class="evaluation-paragraph text-primary">{{ recommendation().reason }}</p>\r
                <div class="application-badge-box ion-margin-top font-mono">\r
                  <span class="title">PRIMARY APPLICATION WORKPLACE:</span>\r
                  <p class="app-text text-green"><ion-icon name="checkmark-circle"></ion-icon> {{ recommendation().bestApplication }}</p>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Advantages vs Limitations -->\r
            <div class="ow-card ion-margin-top">\r
              <div class="ow-card-header">\r
                <h3><ion-icon name="options"></ion-icon> Operational Pros & Cons</h3>\r
              </div>\r
              <div class="ow-card-body pros-cons-grid font-mono">\r
                <div class="pros-col">\r
                  <h4 class="text-green"><ion-icon name="checkmark-circle"></ion-icon> SYSTEM ADVANTAGES</h4>\r
                  <ul class="report-list">\r
                    <li *ngFor="let adv of recommendation().advantages">{{ adv }}</li>\r
                  </ul>\r
                </div>\r
                <div class="cons-col">\r
                  <h4 class="text-warn"><ion-icon name="alert-circle"></ion-icon> KNOWN CONSTRAINTS</h4>\r
                  <ul class="report-list">\r
                    <li *ngFor="let lim of recommendation().limitations">{{ lim }}</li>\r
                  </ul>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Alternative Hammer Selections -->\r
            <div class="ow-card ion-margin-top">\r
              <div class="ow-card-header">\r
                <h3><ion-icon name="refresh"></ion-icon> Alternative Fleet Options</h3>\r
              </div>\r
              <div class="ow-card-body font-mono">\r
                <div class="alternatives-box">\r
                  <div class="alt-item" *ngFor="let alt of recommendation().alternatives">\r
                    <div class="alt-header">\r
                      <span class="alt-name text-cyan font-bold">{{ alt.model }}</span>\r
                      <span class="alt-weight text-muted">Carrier limits: {{ alt.size }}</span>\r
                    </div>\r
                    <p class="alt-reason text-secondary">{{ alt.reason }}</p>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </ion-col>\r
        </ion-row>\r
      </ion-grid>\r
\r
      <!-- PRE-OPERATION CHECKLISTS (SAFETY & MAINTENANCE) -->\r
      <ion-grid class="ion-no-padding ion-margin-top">\r
        <ion-row>\r
          <!-- Safety Reminders Checklist -->\r
          <ion-col size="12" size-lg="6" class="report-col">\r
            <div class="ow-card height-compliance">\r
              <div class="ow-card-header">\r
                <h3><ion-icon name="shield-checkmark" class="text-green"></ion-icon> Pre-Operation Safety Reminders</h3>\r
              </div>\r
              <div class="ow-card-body compliance-list-body">\r
                <p class="section-desc text-secondary">Acknowledge all high-priority safety indicators before initiating hydraulic hammer loop.</p>\r
                <div class="compliance-interactive-checklist font-mono">\r
                  <div class="compliance-row" *ngFor="let sf of recommendation().safetyReminders; let i = index">\r
                    <label class="checkbox-container">\r
                      <input type="checkbox" [id]="'safety-' + i" class="hidden-checkbox">\r
                      <span class="custom-checkbox"></span>\r
                      <span class="checkbox-text text-primary">{{ sf }}</span>\r
                    </label>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </ion-col>\r
\r
          <!-- Maintenance Checklist -->\r
          <ion-col size="12" size-lg="6" class="report-col">\r
            <div class="ow-card height-compliance">\r
              <div class="ow-card-header">\r
                <h3><ion-icon name="settings" class="text-cyan"></ion-icon> Pre-Operation Maintenance Tasks</h3>\r
              </div>\r
              <div class="ow-card-body compliance-list-body">\r
                <p class="section-desc text-secondary">Rigorous component alignment checklists derived from dynamic operating weight variables.</p>\r
                <div class="compliance-interactive-checklist font-mono">\r
                  <div class="compliance-row" *ngFor="let mt of recommendation().maintenanceReminders; let i = index">\r
                    <label class="checkbox-container">\r
                      <input type="checkbox" [id]="'maint-' + i" class="hidden-checkbox">\r
                      <span class="custom-checkbox"></span>\r
                      <span class="checkbox-text text-primary">{{ mt }}</span>\r
                    </label>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </ion-col>\r
        </ion-row>\r
      </ion-grid>\r
\r
    </div>\r
\r
  </div>\r
</ion-content>\r
`,Se='@charset "UTF-8";.before-operation-content{--background: var(--app-bg)}.before-operation-wrapper{padding:24px;max-width:1400px;margin:0 auto}.page-title-section{display:flex;flex-direction:column;justify-content:space-between;gap:20px;border-bottom:1px solid var(--border-color);padding-bottom:24px;margin-bottom:24px}@media (min-width: 992px){.page-title-section{flex-direction:row;align-items:center}}.page-title-section .title-meta{flex:1}.page-title-section .title-meta .meta-badge{font-family:var(--font-mono);font-size:.65rem;letter-spacing:.08em;padding:5px 8px;border-radius:4px;margin-bottom:10px}.page-title-section .title-meta h1{font-family:var(--font-display);font-size:1.8rem;font-weight:700;color:var(--text-primary);margin:0 0 8px;letter-spacing:-.01em}.page-title-section .title-meta .subtitle{font-size:.88rem;line-height:1.5;margin:0}.step-indicator-wrapper{display:flex;align-items:center;gap:10px;background:#0f172a66;border:1px solid var(--border-color);padding:12px 18px;border-radius:10px}.step-indicator-wrapper .step-item{display:flex;align-items:center;gap:8px}.step-indicator-wrapper .step-item .step-num{width:24px;height:24px;border-radius:50%;border:1.5px solid var(--text-muted);color:var(--text-muted);display:flex;justify-content:center;align-items:center;font-size:.75rem;font-weight:700;font-family:var(--font-mono);transition:all .25s ease}.step-indicator-wrapper .step-item .step-lbl{font-size:.75rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em;white-space:nowrap;transition:all .25s ease}.step-indicator-wrapper .step-item.active .step-num{border-color:var(--ion-color-primary);background:#00f0ff1a;color:var(--ion-color-primary);box-shadow:0 0 10px #00f0ff33}.step-indicator-wrapper .step-item.active .step-lbl{color:var(--text-primary)}.step-indicator-wrapper .step-item.completed .step-num{border-color:var(--ion-color-secondary);background:var(--ion-color-secondary);color:var(--ion-color-secondary-contrast)}.step-indicator-wrapper .step-item.completed .step-lbl{color:var(--ion-color-secondary)}.step-indicator-wrapper .step-line{flex:1;height:1px;background:var(--border-color);min-width:20px;transition:all .25s ease}.step-indicator-wrapper .step-line.active{background:var(--ion-color-primary);opacity:.5}.section-instruction{margin-bottom:24px}.section-instruction h2{font-family:var(--font-display);font-size:1.25rem;font-weight:600;color:var(--text-primary);margin:0 0 6px}.section-instruction p{font-size:.85rem;margin:0}.input-section-title{font-family:var(--font-mono);font-size:.68rem;font-weight:700;letter-spacing:.08em;color:var(--text-muted);display:flex;align-items:center;gap:8px;margin-bottom:12px}.input-section-title ion-icon{font-size:.9rem}.custom-card-grid{display:grid;grid-template-columns:1fr;gap:16px}@media (min-width: 768px){.custom-card-grid{grid-template-columns:repeat(3,1fr)}}.selector-card{background:var(--card-bg);border:1px solid var(--card-border);border-radius:12px;padding:20px;position:relative;overflow:hidden;cursor:pointer;display:flex;flex-direction:column;gap:16px;transition:all .25s cubic-bezier(.4,0,.2,1);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}.selector-card:hover{border-color:rgba(var(--ion-color-primary-rgb),.3);transform:translateY(-2px);box-shadow:0 8px 30px #0003}.selector-card:hover .card-glow{opacity:.04}.selector-card.selected{border-color:var(--ion-color-primary);background:rgba(var(--ion-color-primary-rgb),.03);box-shadow:0 0 20px rgba(var(--ion-color-primary-rgb),.08)}.selector-card.selected .selection-indicator{transform:scaleY(1)}.selector-card .card-glow{position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(circle,var(--ion-color-primary) 0%,transparent 60%);opacity:0;transition:opacity .3s;pointer-events:none}.selector-card .icon-circle{width:44px;height:44px;border-radius:10px;background:#ffffff08;border:1px solid var(--border-color);display:flex;justify-content:center;align-items:center}.selector-card .icon-circle ion-icon{font-size:1.3rem}.selector-card .icon-circle.text-magenta{color:var(--ion-color-danger-tint);border-color:rgba(var(--ion-color-danger-rgb),.2)}.selector-card .icon-circle.text-cyan{color:var(--ion-color-primary-tint);border-color:rgba(var(--ion-color-primary-rgb),.2)}.selector-card .icon-circle.text-green{color:var(--ion-color-secondary-tint);border-color:rgba(var(--ion-color-secondary-rgb),.2)}.selector-card .card-info h4{font-family:var(--font-display);font-size:.95rem;font-weight:600;color:var(--text-primary);margin:0 0 6px}.selector-card .card-info p{font-size:.78rem;color:var(--text-secondary);line-height:1.4;margin:0}.selector-card .selection-indicator{position:absolute;top:0;left:0;width:3px;height:100%;background:var(--ion-color-primary);transform:scaleY(0);transform-origin:top;transition:transform .2s ease}.segmented-grid{display:grid;grid-template-columns:1fr;gap:12px}@media (min-width: 576px){.segmented-grid{grid-template-columns:repeat(2,1fr)}}@media (min-width: 992px){.segmented-grid{grid-template-columns:repeat(4,1fr)}}@media (min-width: 992px){.segmented-grid.gap-4{grid-template-columns:repeat(3,1fr)}}.segment-card{background:var(--card-bg);border:1px solid var(--card-border);border-radius:8px;padding:14px;cursor:pointer;transition:all .2s ease;display:flex;flex-direction:column;justify-content:center}.segment-card span{font-size:.85rem;font-weight:600;color:var(--text-primary);margin-bottom:4px}.segment-card p{font-size:.7rem;color:var(--text-muted);margin:0}.segment-card:hover{border-color:#ffffff26;background:#ffffff03}.segment-card.active{border-color:var(--ion-color-primary);background:rgba(var(--ion-color-primary-rgb),.05)}.segment-card.active span{color:var(--ion-color-primary)}.segment-card.active p{color:var(--text-secondary)}.carrier-scroll-list{display:flex;gap:12px;overflow-x:auto;padding:4px 4px 12px;scrollbar-width:thin;scrollbar-color:var(--border-color) transparent}.carrier-scroll-list::-webkit-scrollbar{height:6px}.carrier-scroll-list::-webkit-scrollbar-thumb{background:var(--border-color);border-radius:3px}.carrier-item-card{flex:0 0 200px;background:var(--card-bg);border:1px solid var(--card-border);border-radius:10px;padding:14px;cursor:pointer;display:flex;flex-direction:column;align-items:center;text-align:center;position:relative;transition:all .2s ease}.carrier-item-card:hover{border-color:#ffffff26;transform:translateY(-2px)}.carrier-item-card.selected{border-color:var(--ion-color-primary);background:rgba(var(--ion-color-primary-rgb),.04);box-shadow:0 4px 15px rgba(var(--ion-color-primary-rgb),.06)}.carrier-item-card.selected .carrier-icon-cell{color:var(--ion-color-primary)}.carrier-item-card .carrier-icon-cell{width:60px;height:44px;color:var(--text-muted);display:flex;justify-content:center;align-items:center;margin-bottom:12px;transition:color .2s ease}.carrier-item-card .carrier-icon-cell .carrier-svg{width:100%;height:100%}.carrier-item-card .carrier-details h4{font-family:var(--font-display);font-size:.9rem;font-weight:600;color:var(--text-primary);margin:0 0 4px}.carrier-item-card .carrier-details .weight-badge{font-size:.72rem;color:var(--text-muted)}.carrier-item-card .class-tag{margin-top:10px}.carrier-item-card .class-tag ion-badge{font-size:.58rem;letter-spacing:.05em;padding:3px 6px}.productivity-cards-grid{display:grid;grid-template-columns:1fr;gap:12px}@media (min-width: 768px){.productivity-cards-grid{grid-template-columns:repeat(3,1fr)}}.prod-card{background:var(--card-bg);border:1px solid var(--card-border);border-radius:10px;padding:16px;cursor:pointer;transition:all .2s ease}.prod-card .card-title-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}.prod-card .card-title-row h4{font-family:var(--font-display);font-size:.9rem;font-weight:600;color:var(--text-primary);margin:0}.prod-card .card-title-row ion-icon{font-size:1.1rem}.prod-card p{font-size:.75rem;color:var(--text-muted);line-height:1.4;margin:0}.prod-card:hover{border-color:#ffffff26}.prod-card.selected{border-color:var(--ion-color-primary);background:rgba(var(--ion-color-primary-rgb),.04)}.application-grid{display:flex;flex-wrap:wrap;gap:10px}.app-chip{background:var(--card-bg);border:1px solid var(--card-border);padding:10px 16px;border-radius:20px;display:flex;align-items:center;gap:8px;cursor:pointer;transition:all .2s ease}.app-chip ion-icon{font-size:.9rem;color:var(--text-muted);transition:color .2s ease}.app-chip span{font-size:.78rem;font-weight:500;color:var(--text-secondary);transition:color .2s ease}.app-chip:hover{border-color:#ffffff26}.app-chip.active{border-color:var(--ion-color-primary);background:rgba(var(--ion-color-primary-rgb),.08)}.app-chip.active ion-icon{color:var(--ion-color-primary)}.app-chip.active span{color:var(--ion-color-primary);font-weight:600}.wizard-nav-bar{display:flex;justify-content:space-between;align-items:center;padding-top:24px;gap:16px}.wizard-nav-bar .left-nav-meta{display:flex;align-items:center;font-size:.68rem;letter-spacing:.05em;color:var(--text-muted)}.wizard-nav-bar .left-nav-meta .bullet-separator{width:4px;height:4px;background:var(--text-muted);border-radius:50%;margin:0 10px;opacity:.5}.wizard-nav-bar .nav-next-btn{--border-radius: 8px;font-weight:600;margin:0}.wizard-nav-bar .nav-back-btn{--border-radius: 8px;margin:0}.calculation-container{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 20px;min-height:450px;text-align:center}.ai-processing-circle-container{width:150px;height:150px;margin-bottom:24px;display:flex;justify-content:center;align-items:center}.pulse-orbit{width:120px;height:120px;border-radius:50%;border:2px dashed rgba(var(--ion-color-primary-rgb),.2);position:relative;display:flex;justify-content:center;align-items:center;animation:spinOrbit 12s linear infinite}.pulse-orbit .orbit-center{width:60px;height:60px;border-radius:50%;background:var(--app-bg);border:2px solid var(--ion-color-primary);box-shadow:0 0 25px rgba(var(--ion-color-primary-rgb),.3);display:flex;justify-content:center;align-items:center;z-index:5;animation:counterSpin 12s linear infinite}.pulse-orbit .orbit-center .orbit-text{font-size:.8rem;font-weight:700;letter-spacing:.05em;color:var(--ion-color-primary)}.pulse-orbit .spinning-ray{position:absolute;width:10px;height:10px;background:var(--ion-color-primary);border-radius:50%;top:-5px;box-shadow:0 0 15px var(--ion-color-primary)}.pulse-orbit .inner-glow-core{position:absolute;width:100%;height:100%;border-radius:50%;background:radial-gradient(circle,rgba(var(--ion-color-primary-rgb),.05) 0%,transparent 70%)}@keyframes spinOrbit{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes counterSpin{0%{transform:rotate(0)}to{transform:rotate(-360deg)}}.processing-meta-text{margin-bottom:24px}.processing-meta-text h2{font-family:var(--font-display);font-size:1.4rem;font-weight:600;color:var(--text-primary);margin:0 0 8px}.processing-meta-text p{font-size:.8rem;letter-spacing:.03em;margin:0}.progress-bar-section{width:100%;max-width:500px;margin-bottom:24px}.progress-bar-section .analysis-progress-bar{border-radius:4px;height:6px;margin-bottom:8px}.progress-bar-section .progress-labels{display:flex;justify-content:space-between;font-size:.65rem;letter-spacing:.05em;color:var(--text-muted)}.futuristic-terminal{width:100%;max-width:650px;background:#040810;border:1px solid var(--border-color);border-radius:10px;box-shadow:0 10px 40px #00000080;overflow:hidden;text-align:left}.terminal-header{background:#0c1220;border-bottom:1px solid var(--border-color);padding:10px 14px;display:flex;align-items:center;gap:6px}.terminal-header .dot{width:8px;height:8px;border-radius:50%}.terminal-header .dot.red{background:#f55}.terminal-header .dot.yellow{background:#ffb86c}.terminal-header .dot.green{background:#50fa7b}.terminal-header .terminal-title{font-size:.58rem;color:var(--text-muted);letter-spacing:.05em;margin-left:8px;text-transform:uppercase}.terminal-body{padding:14px;height:180px;overflow-y:auto;font-size:.72rem;line-height:1.6;display:flex;flex-direction:column;gap:4px}.terminal-body .log-line{display:flex;gap:8px}.terminal-body .log-line .log-text{color:#cbd5e1}.terminal-body .blinking-cursor-line .blinking-cursor{color:var(--ion-color-primary);animation:blinkCursor .8s steps(2,start) infinite}@keyframes blinkCursor{to{visibility:hidden}}.report-controls-row{display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;gap:12px;background:#0f172a66;border:1px solid var(--border-color);padding:12px 16px;border-radius:8px;margin-bottom:20px}@media (min-width: 768px){.report-controls-row{flex-direction:row;align-items:center}}.report-controls-row .back-btn{--border-radius: 6px;margin:0}.report-controls-row .actions{display:flex;flex-wrap:wrap;gap:8px}.report-controls-row .actions ion-button{--border-radius: 6px;margin:0;font-weight:600}.warnings-alert-box{background:rgba(var(--ion-color-tertiary-rgb),.03);border:1px solid rgba(var(--ion-color-tertiary-rgb),.3);border-radius:8px;padding:14px;margin-bottom:20px}.warnings-alert-box .box-header{display:flex;align-items:center;gap:8px;font-size:.65rem;font-weight:700;letter-spacing:.08em;color:var(--ion-color-tertiary);margin-bottom:8px}.warnings-alert-box .box-header ion-icon{font-size:1.1rem}.warnings-alert-box .warnings-list{margin:0;padding-left:20px;font-size:.72rem;color:var(--text-secondary);line-height:1.6}.warnings-alert-box .warnings-list li{margin-bottom:4px}.report-col{padding:8px}.report-hero-card{background:linear-gradient(135deg,#0f172a99,#070b14cc);border:1px solid var(--card-border-hover);border-radius:12px;padding:24px;position:relative;overflow:hidden;box-shadow:0 10px 30px #00000040}.report-hero-card .glow-layer{position:absolute;top:0;right:0;width:150px;height:150px;background:radial-gradient(circle,rgba(var(--ion-color-primary-rgb),.12) 0%,transparent 70%);pointer-events:none}.report-hero-card .hero-header{margin-bottom:24px}.report-hero-card .hero-header .sub-lbl{font-size:.62rem;letter-spacing:.08em;color:var(--text-muted);text-transform:uppercase;display:block;margin-bottom:6px}.report-hero-card .hero-header h1{font-family:var(--font-display);font-size:2.2rem;font-weight:700;margin:0 0 10px;line-height:1;letter-spacing:-.01em}.report-hero-card .hero-header .class-badge{font-size:.65rem;letter-spacing:.03em;padding:4px 8px}.compatibility-meter-block{margin-bottom:24px}.compatibility-meter-block .meter-labels{display:flex;justify-content:space-between;font-size:.65rem;letter-spacing:.03em;color:var(--text-muted);margin-bottom:6px}.compatibility-meter-block .meter-bar{height:5px;background:var(--progress-trail);border-radius:3px;overflow:hidden}.compatibility-meter-block .meter-bar .meter-fill{height:100%;background:var(--ion-color-secondary);border-radius:3px}.quick-specs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;border-top:1px dashed var(--border-color);padding-top:20px}.quick-specs-grid .spec-cell{display:flex;flex-direction:column;gap:4px}.quick-specs-grid .spec-cell .lbl{font-size:.58rem;letter-spacing:.03em;color:var(--text-muted)}.quick-specs-grid .spec-cell .val{font-size:.85rem;font-weight:700}.tech-spec-table{display:flex;flex-direction:column;background:#ffffff03;border:1px solid var(--border-color);border-radius:8px;overflow:hidden}.tech-spec-table .table-row{display:flex;justify-content:space-between;padding:11px 14px;border-bottom:1px solid var(--border-color);font-size:.75rem}.tech-spec-table .table-row:last-child{border-bottom:none}.tech-spec-table .table-row .label{text-transform:uppercase;letter-spacing:.02em}.tech-spec-table .table-row .value{text-align:right}.evaluation-paragraph{font-size:.9rem;line-height:1.6;margin:0}.application-badge-box{background:rgba(var(--ion-color-secondary-rgb),.03);border:1px dashed rgba(var(--ion-color-secondary-rgb),.25);border-radius:8px;padding:12px 16px}.application-badge-box .title{font-size:.58rem;letter-spacing:.05em;color:var(--text-muted);display:block;margin-bottom:4px}.application-badge-box .app-text{font-size:.8rem;font-weight:600;margin:0;display:flex;align-items:center;gap:6px}.application-badge-box .app-text ion-icon{font-size:1rem}.pros-cons-grid{display:grid;grid-template-columns:1fr;gap:20px}@media (min-width: 768px){.pros-cons-grid{grid-template-columns:1fr 1fr;gap:30px}}.pros-cons-grid h4{font-family:var(--font-display);font-size:.72rem;font-weight:700;letter-spacing:.05em;display:flex;align-items:center;gap:6px;margin:0 0 12px}.pros-cons-grid h4 ion-icon{font-size:.9rem}.report-list{margin:0;padding-left:0;list-style:none;display:flex;flex-direction:column;gap:10px}.report-list li{font-size:.72rem;line-height:1.5;color:var(--text-secondary);position:relative;padding-left:14px}.report-list li:before{content:"■";position:absolute;left:0;top:0;font-size:.55rem;color:var(--text-muted);opacity:.5}.pros-col li:before{color:var(--ion-color-secondary-tint)}.cons-col li:before{color:var(--ion-color-danger-tint)}.alternatives-box{display:flex;flex-direction:column;gap:12px}.alt-item{background:#ffffff03;border:1px solid var(--border-color);border-radius:8px;padding:12px 14px}.alt-item .alt-header{display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;margin-bottom:4px}.alt-item .alt-header .alt-name{font-size:.8rem}.alt-item .alt-header .alt-weight{font-size:.65rem}.alt-item p{font-size:.7rem;color:var(--text-secondary);margin:0;line-height:1.4}.height-compliance{height:auto}@media (min-width: 992px){.height-compliance{height:340px}}.compliance-list-body{display:flex;flex-direction:column;height:100%}.compliance-list-body .section-desc{font-size:.75rem;margin:0 0 16px;line-height:1.4}.compliance-interactive-checklist{display:flex;flex-direction:column;gap:12px;overflow-y:auto;max-height:220px;padding-right:4px}.compliance-row{display:flex;background:#ffffff04;border:1px solid var(--border-color);border-radius:8px;padding:11px 14px;transition:all .2s ease}.compliance-row:hover{background:#ffffff06;border-color:#ffffff1f}.checkbox-container{display:flex;align-items:flex-start;gap:12px;cursor:pointer;width:100%}.checkbox-container .hidden-checkbox{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox-container .hidden-checkbox:checked~.custom-checkbox{background-color:var(--ion-color-secondary);border-color:var(--ion-color-secondary)}.checkbox-container .hidden-checkbox:checked~.custom-checkbox:after{display:block}.checkbox-container .hidden-checkbox:checked~.checkbox-text{text-decoration:line-through;color:var(--text-muted);opacity:.65}.checkbox-container .custom-checkbox{position:relative;height:16px;width:16px;background-color:transparent;border:1.5px solid var(--text-muted);border-radius:4px;flex-shrink:0;margin-top:1px;transition:all .2s ease}.checkbox-container .custom-checkbox:after{content:"";position:absolute;display:none;left:4.5px;top:1.5px;width:4px;height:8px;border:solid var(--ion-color-secondary-contrast);border-width:0 2px 2px 0;transform:rotate(45deg)}.checkbox-container .checkbox-text{font-size:.72rem;line-height:1.4;transition:all .2s ease}.ow-card{background:var(--card-bg);border:1px solid var(--card-border);border-radius:12px;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);padding:20px;transition:all .3s cubic-bezier(.4,0,.2,1);overflow:hidden;display:flex;flex-direction:column}.ow-card:hover{border-color:var(--card-border-hover);box-shadow:var(--card-glow-hover)}.ow-card .ow-card-header{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--border-color);padding-bottom:12px;margin-bottom:14px}.ow-card .ow-card-header h3{font-family:var(--font-display);font-size:.85rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--text-primary);margin:0;display:flex;align-items:center;gap:8px}.ow-card .ow-card-header h3 ion-icon{font-size:1.05rem;color:var(--ion-color-primary)}.ow-card .ow-card-body{flex:1}.pulse-indicator{width:6px;height:6px;border-radius:50%;background:var(--ion-color-primary);box-shadow:0 0 8px var(--ion-color-primary);animation:pulseIndicatorAnimation 1.5s infinite}@keyframes pulseIndicatorAnimation{0%{transform:scale(1);opacity:1}50%{transform:scale(1.6);opacity:.4}to{transform:scale(1);opacity:1}}.border-top{border-top:1px solid var(--border-color)}';var Ee=function(c,e,r,n){var t=arguments.length,i=t<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(c,e,r,n);else for(var o=c.length-1;o>=0;o--)(a=c[o])&&(i=(t<3?a(i):t>3?a(e,r,i):a(e,r))||i);return t>3&&i&&Object.defineProperty(e,r,i),i},Ce=function(c,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(c,e)},w;let A=(w=class{constructor(){this.initialState={project:"North Sea Jacket Installation",vessel:"Van Oord – Aeolus (I-Lift 1200)",location:"Block A, Western Pacific (North of Taiwan)",pileId:"P12-J04",hammer:"IHC-150",targetDepth:45,currentDepth:32.4,depthRemaining:12.6,estimatedCompletionHrs:2.6,estimatedBlowsRemaining:680,startTime:"07:45 AM",progressPercentage:72,blowRate:34,energyDelivered:82,hydraulicPressure:210,oilTemperature:58,cushionCondition:72,strokeCount:1245,hammerEfficiency:88,drivingActive:!0,penetrationPerBlow:18.6,compressionStress:62,tensionStress:28,bendingStress:31,pileAlignment:.6,currentSoilLayer:"Medium Dense Sand",predictedNextLayer:"Dense Sand",soilResistance:12.4,rateOfPenetration:17,refusalProbability:12,cptCorrelationIndex:.87,soilConfidence:94,windSpeed:12.6,windDirection:"NE (45°)",waveHeight:1.2,currentSpeed:.8,heave:.35,roll:1.2,pitch:.9,weatherWindowStatus:"GOOD",recommendedEnergy:82,recommendedBlowRate:34,recommendedCushion:"Good",recommendedSoil:"Stable",recommendedMotion:"Low",recommendationConfidence:92,riskOverstress:"Low",riskMisalignment:"Low",riskHammer:"Low",riskWeather:"Medium",systemHealthScore:98,healthHydraulic:96,healthHammer:94,healthPowerPack:92,healthSensor:99,cushionRemainingHrs:18,craneRadius:18.2,liftPlanId:"LP-2025-058",tagLineStatus:"Connected",craneSelection:"Main Crane",loadWeight:28.5,craneCapacityPercentage:47,personnelRedZone:0,personnelYellowZone:0},this.stateSubject=new C(this.initialState),this.state$=this.stateSubject.asObservable(),this.refreshIntervalSubject=new C(5e3),this.refreshInterval$=this.refreshIntervalSubject.asObservable(),this.simulationSub=null,this.autoRefreshActive=new C(!0),this.autoRefreshActive$=this.autoRefreshActive.asObservable(),this.alertsSubject=new C([{id:"1",type:"info",message:"No Critical Alerts. Base systems are operating within nominal specifications.",time:"10:45 AM"},{id:"2",type:"warning",message:"Weather Advisory: Wind gusts increasing slightly north of Taiwan in next 2 hrs.",time:"10:42 AM"},{id:"3",type:"info",message:"Next Soil Layer Change: Expected at ~34.0m depth.",time:"10:35 AM"}]),this.alerts$=this.alertsSubject.asObservable(),this.startSimulation()}get currentState(){return this.stateSubject.value}setRefreshInterval(e){this.refreshIntervalSubject.next(e),this.startSimulation()}toggleAutoRefresh(e){this.autoRefreshActive.next(e),e?this.startSimulation():this.stopSimulation()}stopSimulation(){this.simulationSub&&(this.simulationSub.unsubscribe(),this.simulationSub=null)}startSimulation(){this.stopSimulation(),this.autoRefreshActive.value&&(this.simulationSub=D(0,this.refreshIntervalSubject.value).subscribe(()=>{this.simulateStep()}))}simulateStep(){const e={...this.stateSubject.value};if(e.heave=Number((.3+Math.random()*.1).toFixed(2)),e.roll=Number((1+Math.random()*.4).toFixed(1)),e.pitch=Number((.7+Math.random()*.3).toFixed(1)),e.windSpeed=Number((12+Math.random()*1.2).toFixed(1)),e.waveHeight=Number((1.1+Math.random()*.2).toFixed(1)),e.drivingActive){e.strokeCount+=Math.round(e.blowRate*(this.refreshIntervalSubject.value/6e4));const r=e.penetrationPerBlow,n=e.blowRate*(this.refreshIntervalSubject.value/6e4),t=r*n/1e3;e.currentDepth=Number(Math.min(e.targetDepth,e.currentDepth+t).toFixed(2)),e.depthRemaining=Number(Math.max(0,e.targetDepth-e.currentDepth).toFixed(2)),e.progressPercentage=Math.round(e.currentDepth/e.targetDepth*100),e.estimatedBlowsRemaining=Math.max(0,Math.round(e.depthRemaining*1e3/r)),e.estimatedCompletionHrs=Number((e.estimatedBlowsRemaining/e.blowRate/60).toFixed(1)),e.compressionStress=Math.min(100,Math.max(40,e.compressionStress+Math.round((Math.random()-.5)*6))),e.tensionStress=Math.min(100,Math.max(15,e.tensionStress+Math.round((Math.random()-.5)*4))),e.bendingStress=Math.min(100,Math.max(20,e.bendingStress+Math.round((Math.random()-.5)*5))),e.oilTemperature=Math.min(85,Math.max(50,e.oilTemperature+(Math.random()>.4?1:-1)))}else e.oilTemperature=Math.max(40,e.oilTemperature-1);e.hydraulicPressure=e.drivingActive?Math.round(205+Math.random()*10):Math.round(15+Math.random()*5),this.stateSubject.next(e)}setDrivingActive(e){const r={...this.stateSubject.value};r.drivingActive=e,e?(r.blowRate=34,r.hydraulicPressure=210):(r.blowRate=0,r.hydraulicPressure=15),this.stateSubject.next(r),this.addAlert(e?"success":"warning",e?"Pile driving sequence INITIATED.":"Pile driving sequence PAUSED by operator.")}updateEnergy(e){const r={...this.stateSubject.value};r.energyDelivered=e,r.penetrationPerBlow=Number((15+e/100*5).toFixed(1)),r.compressionStress=Math.min(95,Math.round(45+e/100*20)),this.stateSubject.next(r)}setHammerPower(e){this.updateEnergy(e)}updateAlignment(e){const r={...this.stateSubject.value};r.pileAlignment=e,this.stateSubject.next(r)}updateBlowRate(e){const r={...this.stateSubject.value};r.drivingActive&&(r.blowRate=Math.max(10,Math.min(60,r.blowRate+e)),this.stateSubject.next(r))}applyAIRecommendations(){const e={...this.stateSubject.value};e.energyDelivered=e.recommendedEnergy,e.blowRate=e.recommendedBlowRate,e.hammerEfficiency=92,e.drivingActive=!0,this.stateSubject.next(e),this.addAlert("success","AI Recommendations Applied: Settings optimized for current soil layers.")}calibrateHammer(){return{...this.stateSubject.value},this.addAlert("info","Starting hammer calibration sequence..."),new I(e=>{let r=0;const n=setInterval(()=>{if(r+=20,r>=100){clearInterval(n);const t={...this.stateSubject.value};t.hammerEfficiency=91,t.cushionCondition=Math.min(100,t.cushionCondition+5),this.stateSubject.next(t),this.addAlert("success","Hammer calibration complete. Efficiency increased to 91%."),e.next(100),e.complete()}else e.next(r)},600)})}runDiagnostics(){return this.addAlert("info","Executing platform-wide system diagnostics scan..."),new I(e=>{let r=0;const n=setInterval(()=>{if(r+=10,r>=100){clearInterval(n);const t={...this.stateSubject.value};t.systemHealthScore=99,t.healthHydraulic=98,t.healthHammer=97,t.healthPowerPack=96,t.healthSensor=100,this.stateSubject.next(t),this.addAlert("success","Diagnostics complete. All parameters nominal (99% overall health)."),e.next(100),e.complete()}else e.next(r)},300)})}runRiskAnalysis(){return this.addAlert("info","Re-calculating risk factors with deep-learning soil modeling..."),new I(e=>{setTimeout(()=>{const r={...this.stateSubject.value};r.riskOverstress="Low",r.riskMisalignment="Low",r.riskHammer="Low",r.riskWeather="Medium",this.stateSubject.next(r),this.addAlert("success","Risk scan complete: Misalignment risk reduced to LOW."),e.next(!0),e.complete()},1500)})}addAlert(e,r){const n=[...this.alertsSubject.value],i=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"});n.unshift({id:Math.random().toString(),type:e,message:r,time:i}),n.length>8&&n.pop(),this.alertsSubject.next(n)}dismissAlert(e){const r=this.alertsSubject.value.filter(n=>n.id!==e);this.alertsSubject.next(r)}dismissAllAlerts(){this.alertsSubject.next([])}updateCraneChecklist(e,r){}simulateCraneAction(e){this.addAlert("info",`Crane action triggered: ${e}`)}},w.ctorParameters=()=>[],w);A=Ee([L({providedIn:"root"}),Ce("design:paramtypes",[])],A);var Ae=function(c,e,r,n){var t=arguments.length,i=t<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(c,e,r,n);else for(var o=c.length-1;o>=0;o--)(a=c[o])&&(i=(t<3?a(i):t>3?a(e,r,i):a(e,r))||i);return t>3&&i&&Object.defineProperty(e,r,i),i},Re=function(c,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(c,e)},k;let M=(k=class{constructor(e,r,n){this.operationsService=e,this.toastController=r,this.alertController=n,this.currentStep=l(1),this.selectedMaterial=l("rock"),this.selectedRockHardness=l("medium"),this.selectedConcreteStrength=l("standard"),this.selectedGroundCondition=l("stable"),this.selectedWorkingEnvironment=l("general"),this.selectedExcavatorIndex=l(2),this.selectedProductivity=l("high"),this.selectedApplication=l("quarry"),this.subscriptions=[],this.excavators=[{model:"CAT 313",weight:14,class:"mini"},{model:"Komatsu PC200",weight:21,class:"utility"},{model:"CAT 320",weight:22,class:"utility"},{model:"Volvo EC300",weight:31,class:"heavy"},{model:"Hitachi ZX350",weight:36,class:"heavy"},{model:"Volvo EC380",weight:41,class:"heavy"},{model:"CAT 349",weight:51,class:"ultra"},{model:"Liebherr R950",weight:53,class:"ultra"},{model:"CAT 374",weight:74,class:"ultra"},{model:"Komatsu PC800",weight:83,class:"ultra"}],this.scanningLogs=l([]),this.scanProgress=l(0),this.selectedExcavator=T(()=>this.excavators[this.selectedExcavatorIndex()]),this.configWarnings=T(()=>{const t=[],i=this.selectedMaterial(),a=this.selectedRockHardness(),o=this.selectedExcavator().weight,S=this.selectedWorkingEnvironment(),E=this.selectedGroundCondition(),R=this.selectedApplication();return i==="rock"&&(a==="hard"||a==="extreme")&&o<25&&t.push(`Carrier mismatch: Excavator operating weight (${o}t) is light for ${a.replace("_"," ")} rock breaker applications. Operating components will endure maximum peak loads.`),S==="urban"&&R==="quarry"&&t.push("Environmental warning: Open-pit quarry operations in noise-sensitive urban settings require strict decibel dampening compliance."),S==="underwater"&&E!=="offshore"&&E!=="saturated"&&t.push("Underwater warning: Dry seabed configurations selected for underwater working environment. Ensure specialized hydraulic venting is configured."),t}),this.recommendation=T(()=>{const t=this.selectedMaterial(),i=this.selectedRockHardness();this.selectedConcreteStrength();const a=this.selectedGroundCondition(),o=this.selectedWorkingEnvironment(),S=this.selectedExcavator(),E=this.selectedProductivity(),R=this.selectedApplication(),h=S.weight;let s="HB1900",d="Medium Duty",p="140 - 160 bar",m="110 - 150 l/min",g="4,000 Joules",u="18 - 28 tons",v="Quarrying, secondary breaking, and commercial demolition.",b="An optimized pairing providing robust impact velocity to tackle standard material excavation.",f=["Excellent balance of impact force and tool frequency","High-grade nitrogen accumulator absorbs recoil shock","Durable housing prevents lateral tool play"],x=["Not optimized for continuous monolithic granite or extremely hard rock breaking","Requires standard carrier cooling package in warm operations"],y=[{model:"HB1600",size:"18 - 24 tons",reason:"High fuel efficiency for utility excavation."},{model:"HB2200",size:"24 - 32 tons",reason:"Upgraded power option if additional tool weight is supported."}];R==="foundation"&&(a==="offshore"||o==="underwater")?(s=h>40?"IHC-180 Hydropile":"IHC-150 Hydropile",d="Heavy-Duty Impact Piling Hammer",p="210 - 240 bar",m="180 - 280 l/min",g=h>40?"180,000 Joules":"150,000 Joules",u=h>40?"45 - 90 tons":"30 - 60 tons",v="Offshore jacket piles, dense marine sandy foundations, and harbor pile driving.",b=`Selected specifically for offshore pile-driving foundation application inside marine/underwater environments. The ${s} offers high-energy hydraulic blow capability perfectly synchronized with dynamic overwatch strain sensors.`,f=["Specialized marine subsea venting valves prevent water ingestion","Direct energy sensor arrays feed telemetry live into IQIP Overwatch","Continuous stroke rate self-regulates to protect pile toe stress"],x=["Requires complete deck power-pack unit for continuous marine delivery","Extremely heavy configuration requiring direct crane or high-capacity rig support"],y=[{model:"IHC-120",size:"25 - 45 tons",reason:"Compact offshore piling for lighter pile sleeves."},{model:"HB4800",size:"40 - 70 tons",reason:"Standard hydraulic breaker configuration if pile driving is not required."}]):h<18?(s="HB1200",d="Lightweight Class",p="110 - 130 bar",m="70 - 100 l/min",g="1,800 Joules",u="10 - 18 tons",v="Utility trenching, asphalt tearing, and light residential construction.",b="Engineered for lightweight carriers. Maximizes flow efficiency and prevents hydraulic circuit overheating on utility class excavator units.",f=["Highly compact profile fits easily into narrow utility trenches","Auto-lubrication cartridge ready for uninterrupted grease supply","Very low fuel consumption during high frequency cycling"],x=["Insufficient structural mass to break thick reinforced concrete or natural quarry bedrock","Shorter lifespan under continuous maximum-power operation"],y=[{model:"HB1400",size:"13 - 18 tons",reason:"Slightly higher impact mass for stubborn clay-bound sandstones."}]):h>=18&&h<30?t==="rock"&&(i==="hard"||i==="extreme")?(s="HB2200-S",d="Medium-Heavy Breaker (Silenced)",p="150 - 170 bar",m="130 - 170 l/min",g="5,200 Joules",u="22 - 32 tons",v="Continuous secondary quarry breaking and thick highway slab crushing.",b="Tuned for hard rock breaking on a medium carrier. The HB2200-S features a reinforced box housing and vibration dampers to protect the excavator's boom joints.",f=["Excellent power-to-weight ratio to bust hard basalt/granite","Vibration-dampened polyurethane buffers absorb side-impact shock","Dual tool retainer pin design ensures steady alignment"],x=["May trigger high-temperature warnings on standard hydraulic pumps if worked without cooling packages","Requires skilled operator alignment to avoid dynamic fatigue on tool shank"],y=[{model:"HB1900",size:"18 - 28 tons",reason:"Lighter choice, safer on extended boom reaches."},{model:"HB3200",size:"28 - 40 tons",reason:"Max power choice if excavator lifting limits permit."}]):(s="HB1900",d="Medium Class",p="140 - 160 bar",m="110 - 150 l/min",g="4,000 Joules",u="18 - 28 tons",v="Concrete demolition, medium sandstone trenching, and general site preparation.",b="Perfect structural pairing for utility-class excavators. The HB1900 delivers steady impact rate with outstanding energy efficiency.",f=["Highly reliable field-proven monoblock design with very few moving parts","Auto-control valve maintains constant velocity under fluctuating hydraulic pressures","Excellent resale value and widely available replacement bushings"],x=["Reduced productivity on ultra-reinforced high-hardness foundations","Unsuited for direct subsea usage without external air-compressor auxiliary kits"],y=[{model:"HB1600",size:"18 - 24 tons",reason:"Fuel efficient utility option."},{model:"HB2200",size:"24 - 32 tons",reason:"Heavier blow capacity for structural foundations."}]):h>=30&&h<45?t==="rock"&&(i==="hard"||i==="extreme")?(s="HB3600-S Pro",d="Heavy-Duty Production Breaker",p="160 - 180 bar",m="170 - 240 l/min",g="8,500 Joules",u="32 - 48 tons",v="Primary quarry breaking, deep rock trenching, and heavy marine pier demolition.",b="Engineered for intense quarry operations. The HB3600-S Pro offers immense impact energy designed to propagate shockwaves deep into hard rock formations, fracturing them along natural seams.",f=["Energy recovery system recycles piston rebound energy to boost the next stroke","Fully enclosed silenced box structure protects internal components","Hardox steel front protective armor plate standard"],x=["Heavy weight restricts carrier stability on steep side slopes","High oil flow requirements require dual-pump configuration on certain excavator models"],y=[{model:"HB3200",size:"28 - 40 tons",reason:"Reduced tool mass if high speed slewing is required."},{model:"HB4800",size:"40 - 60 tons",reason:"Maximum impact class for high productivity."}]):(s="HB3200",d="Heavy Duty Utility Breaker",p="150 - 175 bar",m="150 - 210 l/min",g="6,500 Joules",u="28 - 40 tons",v="Heavy building demolition, bridge pier removal, and dense gravel excavations.",b="Standard heavy breaker optimized for 30+ ton carriers. Highly reliable stroke control ensures maximum utility across concrete and soil applications.",f=["Slip-fit tool bushing can be replaced easily in the field","Internal accumulator design cushions carrier main control valves","Piston strokes can be toggled between long/slow and short/fast"],x=["Lower impact velocity than lighter breakers on soft loose clay sandstone","Requires auxiliary hydraulic piping to handle high pressure flow return"],y=[{model:"HB3600-S Pro",size:"32 - 48 tons",reason:"Upgrade for continuous high-strength breaking."}]):(s=t==="rock"&&(i==="hard"||i==="extreme")?"HB6000 Extreme":"HB4800 Pro",d="Ultra-Heavy Production Series",p="165 - 190 bar",m="210 - 310 l/min",g=s==="HB6000 Extreme"?"14,000 Joules":"11,500 Joules",u=s==="HB6000 Extreme"?"55 - 90 tons":"40 - 70 tons",v="Large-scale quarry mining, deep foundation excavation, and massive coastal breakwater reconstruction.",b="Selected for ultra-heavy production scale with a high-capacity carrier. Designed for maximum mechanical shattering force to maximize productivity under standard and hard rock requirements.",f=["Immense structural mass creates unrivaled material fragmentation per blow","Dynamic auto-control valve detects rock hardness and shifts stroke profile instantly","Heavy-duty dual-layer bushing prevents tool alignment drift"],x=["Extremely high structural and hydraulic footprint restricts usage to specialized heavy machinery","High wear on tool point requires continuous dynamic grease supply"],y=[{model:"HB3600-S Pro",size:"32 - 48 tons",reason:"Lighter option, easier on standard utility sites."}]);const O=["Safety Glass Goggles & High-Vis PPE: Mandatory for all personnel within a 20-meter radius.","No Dry/Blank Firing: Never allow the hammer to strike without full pressure on the chisel point.","Check Lock Pins: Ensure tool retainer pins are fully locked before starting the hydraulic cycle."];o==="underwater"&&O.push("Marine Keepout Zone: Activate dynamic vessel watch and verify subsea diver clearances.");const N=["Lubrication Frequency: Grease tool shank/bushing manually every 2 hours of active operation, or verify automatic grease line level.","Nitrogen Accumulator Charge: Verify nitrogen gas charge pressure (recommended 40 bar) weekly.","Bolt Torque Verification: Perform hourly visual inspection on housing bolts and tie rods during first 10 operating hours."];t==="rock"&&i==="extreme"&&N.push("Chisel Profiling: Dress chisel edges frequently to prevent stress concentrations leading to fracturing.");const H=[{label:"Hammer Model Name",value:s},{label:"Equipment Size Class",value:d},{label:"Impact Energy Rating",value:g},{label:"Required Oil Flow Rate",value:m},{label:"Operating Circuit Pressure",value:p},{label:"Recommended Carrier Weight",value:u},{label:"Productivity Tune",value:E.toUpperCase()},{label:"Acoustic Compliance",value:o==="urban"?"Quiet (Silenced Box)":"Standard"}];return{modelName:s,size:d,pressure:p,oilFlow:m,impactEnergy:g,excavatorRange:u,bestApplication:v,reason:b,advantages:f,limitations:x,alternatives:y,safetyReminders:O,maintenanceReminders:N,specifications:H}}),G({constructOutline:j,sparklesOutline:B,checkmarkCircleOutline:F,closeOutline:q,warningOutline:W,timerOutline:U,statsChartOutline:_,arrowForwardOutline:V,downloadOutline:$,optionsOutline:Y,listOutline:J,eyeOutline:K,arrowBackOutline:Q,shieldCheckmarkOutline:Z,alertCircleOutline:X,flashOutline:ee,speedometerOutline:re,buildOutline:te,ribbonOutline:ne,documentTextOutline:ie,settingsOutline:ae,refreshOutline:oe,informationCircleOutline:se,trashOutline:ce,copyOutline:le})}ngOnInit(){this.subscriptions.push(this.operationsService.state$.subscribe(e=>{this.state=e}))}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}selectMaterial(e){this.selectedMaterial.set(e),e==="rock"?this.selectedApplication.set("quarry"):e==="concrete"?this.selectedApplication.set("demolition"):this.selectedApplication.set("foundation")}selectRockHardness(e){this.selectedRockHardness.set(e)}selectConcreteStrength(e){this.selectedConcreteStrength.set(e)}selectGroundCondition(e){this.selectedGroundCondition.set(e)}selectWorkingEnvironment(e){this.selectedWorkingEnvironment.set(e)}selectExcavator(e){this.selectedExcavatorIndex.set(e)}selectProductivity(e){this.selectedProductivity.set(e)}selectApplication(e){this.selectedApplication.set(e)}nextStep(){const e=this.currentStep();e===2?(this.currentStep.set(3),this.runAnalysisSimulation()):e<4&&this.currentStep.set(e+1)}prevStep(){const e=this.currentStep();e>1&&this.currentStep.set(e-1)}resetWizard(){this.currentStep.set(1),this.scanProgress.set(0),this.scanningLogs.set([])}runAnalysisSimulation(){this.scanningLogs.set([]),this.scanProgress.set(0);const e=["INITIALIZING IQIP ANALYSIS MATRIX...",`PARSING CHASSIS: ${this.selectedExcavator().model} (${this.selectedExcavator().weight}t)`,"EVALUATING EXCAVATOR OIL DELIVERY CAPACITY...",`ASSESSING MATERIAL CHARACTERISTICS: ${this.selectedMaterial().toUpperCase()} (${this.selectedMaterial()==="rock"?this.selectedRockHardness():this.selectedConcreteStrength()})`,`GROUND MODELING: ${this.selectedGroundCondition().replace("_"," ").toUpperCase()}`,`ENVIRONMENT FILTERING: ${this.selectedWorkingEnvironment().toUpperCase()} CONSTRAINTS`,"RUNNING MULTI-AGENT CORRELATION ON DYNAMIC IMPEDANCE LIMITS...","VERIFYING MECHANICAL CAVITATION LIMITS AND OVERHEAT MARGINS...","ANALYSIS COMPLETE: GENERATING DYNAMIC SPECIFICATION SHEETS..."];let r=0;const t=setInterval(()=>{r<e.length?(this.scanningLogs.update(i=>[...i,e[r]]),this.scanProgress.set(Math.round((r+1)/e.length*100)),r++):(clearInterval(t),setTimeout(()=>{this.currentStep.set(4)},500))},300)}async copyRecommendation(){const e=this.recommendation(),r=`
IQIP OVERWATCH™ - AI HAMMER RECOMMENDATION REPORT
==================================================
Hammer Model: ${e.modelName}
Size Class: ${e.size}
Impact Energy Category: ${e.impactEnergy}
Required Oil Flow: ${e.oilFlow}
Circuit Pressure: ${e.pressure}
Carrier Recommended Range: ${e.excavatorRange}

Mechanical Reasoning:
${e.reason}

Advantages:
${e.advantages.map(n=>"- "+n).join(`
`)}

Limitations:
${e.limitations.map(n=>"- "+n).join(`
`)}
`;try{await navigator.clipboard.writeText(r),this.showToast("Report Copied","Success! Hammer specification text copied to clipboard.","success")}catch{this.showToast("Copy Failed","Could not copy text automatically.","danger")}}async exportPDF(){this.showToast("Generating PDF","Compiling PDF Specification Sheet...","primary"),setTimeout(()=>{this.showToast("Export Successful",`SpecSheet_${this.recommendation().modelName}.pdf has been downloaded successfully.`,"success")},1500)}async applyToOperations(){const e=this.recommendation();this.operationsService.addAlert("success",`AI Recommendation Applied: Pre-Operation verified with ${e.modelName}.`),await(await this.alertController.create({header:"Recommendation Synchronized",message:`The recommended ${e.modelName} has been successfully registered to the overwatch system. Real-time telemetry indicators are now adjusted to track nominal limits.`,buttons:["CONTINUE"]})).present()}async showToast(e,r,n){await(await this.toastController.create({header:e,message:r,duration:2500,position:"bottom",color:n,cssClass:"ow-toast"})).present()}},k.ctorParameters=()=>[{type:A},{type:P},{type:z}],k);M=Ae([de({selector:"app-before-operation",standalone:!0,imports:[pe,me,ge,ue,he,ve,be,fe,xe,ye],template:ke,changeDetection:we.OnPush,styles:[Se]}),Re("design:paramtypes",[A,P,z])],M);export{M as BeforeOperationPage};
