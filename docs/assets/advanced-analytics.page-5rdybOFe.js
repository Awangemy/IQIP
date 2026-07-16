import{M as l,I as v,C as g,a as u,L as b,D as w,A as k,T as S,b as C,c as T,F as A,d as R,e as I,f as P}from"./index-QKuR8YBD.js";const L=`<ion-content class="main-page-content" scrollY="true" forceOverscroll="false">
<div class="dashboard-container">
  <div class="flex-between" style="margin-bottom: 16px; border-bottom: 1px solid var(--app-border); padding-bottom: 10px;">
    <h2 class="panel-title" style="font-size: 1.1rem; letter-spacing: 1.5px;">
      <lucide-icon name="line-chart" class="panel-icon"></lucide-icon>
      Advanced Analytics & Decision Support
    </h2>
    <div class="panel-header-right">
      <span class="status-badge-inline live" style="background: rgba(0, 240, 255, 0.1); border-color: var(--app-accent-cyan); color: var(--app-accent-cyan);">AI Engine: Active</span>
      <ion-button size="small" fill="outline" class="industrial-btn" (click)="exportAllAnalytics()">
        <lucide-icon name="download" style="width: 14px; height: 14px; margin-right: 6px;"></lucide-icon>
        Export Analytics Report
      </ion-button>
    </div>
  </div>

  <!-- Industrial Tab Segment to navigate between 7 sections -->
  <ion-segment [value]="activeTab" (ionChange)="onTabChange($event)" class="industrial-segment">
    <ion-segment-button value="soil">
      <ion-label>1. Soil Behaviour</ion-label>
    </ion-segment-button>
    <ion-segment-button value="stress">
      <ion-label>2. Pile Stress</ion-label>
    </ion-segment-button>
    <ion-segment-button value="forecast">
      <ion-label>3. AI Forecast</ion-label>
    </ion-segment-button>
    <ion-segment-button value="weather">
      <ion-label>4. Weather Window</ion-label>
    </ion-segment-button>
    <ion-segment-button value="health">
      <ion-label>5. Equipment Health</ion-label>
    </ion-segment-button>
    <ion-segment-button value="recs">
      <ion-label>6. AI Rec Centre</ion-label>
    </ion-segment-button>
    <ion-segment-button value="twin">
      <ion-label>7. Digital Twin</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- CONTENT PANELS BASED ON ACTIVE TAB -->

  <!-- TAB 1: Soil Behaviour Intelligence -->
  <div *ngIf="activeTab === 'soil'" class="industrial-card" style="padding: 20px;">
    <div class="panel-header-line">
      <h3 class="panel-title"><lucide-icon name="compass" class="panel-icon"></lucide-icon> Soil Behaviour Intelligence</h3>
      <span class="status-badge-inline live">Continuous CPT Core Integration</span>
    </div>

    <div class="grid-2" style="grid-template-columns: 1fr 1.2fr; gap: 20px; align-items: start;">
      <div>
        <div class="ai-reasoning-box">
          Continuous Cone Penetration Testing (CPT) telemetry is correlated in real time with hammer blow metrics to map soil density variations ahead of the pile tip.
        </div>
        <div class="metric-list" style="margin-bottom: 16px;">
          <div class="metric-row">
            <span class="metric-row-label">Current Soil Layer</span>
            <span class="metric-row-value" style="color: var(--app-accent-cyan); font-weight: 700;">Medium Dense Sand</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Predicted Next Layer</span>
            <span class="metric-row-value" style="color: var(--app-accent-amber);">Dense Sand (at ~34.0m)</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Rate of Penetration</span>
            <span class="metric-row-value">{{ state.penetrationRate }} mm/blow</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Refusal Probability</span>
            <span class="metric-row-value" style="color: var(--app-accent-green);">12% (Low)</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">CPT Correlation Index</span>
            <span class="metric-row-value">0.87</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">AI Confidence Score</span>
            <span class="metric-row-value" style="color: var(--app-accent-green);">94%</span>
          </div>
        </div>

        <ion-button expand="block" fill="solid" class="industrial-btn-solid" (click)="predictNextLayer()">
          <lucide-icon name="refresh-cw" style="width: 14px; height: 14px; margin-right: 6px;" [class.pulsing-indicator]="isPredictingSoil"></lucide-icon>
          {{ isPredictingSoil ? 'Mapping Soil Strata...' : 'Predict Next Soil Layer' }}
        </ion-button>
      </div>

      <!-- Soil resistance trend line chart -->
      <div>
        <div class="form-label" style="margin-bottom: 8px;">SOIL RESISTANCE TREND (Depth vs. kPa Resistance)</div>
        <div style="background: rgba(0,0,0,0.2); border: 1px solid var(--app-border); border-radius: 6px; padding: 12px;">
          <!-- SVG Line Chart representing depth penetration resistance -->
          <svg viewBox="0 0 400 200" style="width: 100%; height: auto; overflow: visible;">
            <!-- Grid lines -->
            <line x1="40" y1="20" x2="380" y2="20" stroke="var(--app-grid-line)" stroke-dasharray="4"></line>
            <line x1="40" y1="70" x2="380" y2="70" stroke="var(--app-grid-line)" stroke-dasharray="4"></line>
            <line x1="40" y1="120" x2="380" y2="120" stroke="var(--app-grid-line)" stroke-dasharray="4"></line>
            <line x1="40" y1="170" x2="380" y2="170" stroke="var(--app-grid-line)"></line>
            
            <line x1="40" y1="20" x2="40" y2="170" stroke="var(--app-grid-line)"></line>
            <line x1="125" y1="20" x2="125" y2="170" stroke="var(--app-grid-line)" stroke-dasharray="4"></line>
            <line x1="210" y1="20" x2="210" y2="170" stroke="var(--app-grid-line)" stroke-dasharray="4"></line>
            <line x1="295" y1="20" x2="295" y2="170" stroke="var(--app-grid-line)" stroke-dasharray="4"></line>
            <line x1="380" y1="20" x2="380" y2="170" stroke="var(--app-grid-line)"></line>

            <!-- Text labels -->
            <text x="35" y="173" fill="var(--app-text-muted)" font-size="9" text-anchor="end">Low</text>
            <text x="35" y="95" fill="var(--app-text-muted)" font-size="9" text-anchor="end">Med</text>
            <text x="35" y="25" fill="var(--app-text-muted)" font-size="9" text-anchor="end">High</text>
            <text x="12" y="95" fill="var(--app-text-muted)" font-size="9" text-anchor="middle" transform="rotate(-90 12 95)">Resistance (kPa)</text>

            <text x="40" y="185" fill="var(--app-text-muted)" font-size="9" text-anchor="middle">0m</text>
            <text x="125" y="185" fill="var(--app-text-muted)" font-size="9" text-anchor="middle">12-28m</text>
            <text x="210" y="185" fill="var(--app-text-muted)" font-size="9" text-anchor="middle">28-42m</text>
            <text x="295" y="185" fill="var(--app-text-muted)" font-size="9" text-anchor="middle">&gt;42m</text>
            <text x="210" y="198" fill="var(--app-text-muted)" font-size="9" text-anchor="middle" font-weight="600">Offshore Penetration Depth</text>

            <!-- Shaded areas for layers -->
            <rect x="40" y="20" width="85" height="150" fill="rgba(141, 110, 99, 0.05)"></rect>
            <rect x="125" y="20" width="85" height="150" fill="rgba(255, 235, 156, 0.04)"></rect>
            <rect x="210" y="20" width="85" height="150" fill="rgba(251, 192, 45, 0.06)"></rect>
            <rect x="295" y="20" width="85" height="150" fill="rgba(120, 144, 156, 0.08)"></rect>

            <!-- Line chart plot -->
            <path d="M 40,165 C 80,150 100,135 125,115 C 150,110 180,95 210,82 C 240,78 270,60 295,45 C 320,40 350,30 380,22" 
                  fill="none" 
                  stroke="var(--app-accent-cyan)" 
                  stroke-width="3"
                  filter="drop-shadow(0 0 4px var(--app-accent-cyan))"></path>

            <!-- Animated Dot at Current Position (~65% along path: Depth 32.4m) -->
            <circle cx="265" cy="62" r="6" fill="var(--app-accent-cyan)"></circle>
            <circle cx="265" cy="62" r="10" fill="none" stroke="var(--app-accent-cyan)" stroke-width="1.5" class="pulsing-indicator"></circle>
          </svg>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.7rem; color: var(--app-text-muted); margin-top: 6px;">
          <span>✓ Interactive Zoom Enabled</span>
          <span>CPT Correlation confidence: 99.1%</span>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB 2: Dynamic Pile Stress Monitoring -->
  <div *ngIf="activeTab === 'stress'" class="industrial-card" style="padding: 20px;">
    <div class="panel-header-line">
      <h3 class="panel-title"><lucide-icon name="shield" class="panel-icon"></lucide-icon> Dynamic Pile Stress Monitoring</h3>
      <span class="status-badge-inline live">Fiber-optic Strain Sensors Active</span>
    </div>

    <div class="grid-2" style="grid-template-columns: 1.2fr 1fr; gap: 20px; align-items: start;">
      <!-- Bar Chart for stress types -->
      <div>
        <div class="form-label" style="margin-bottom: 12px;">ALLOWABLE MARGIN CHART (% OF MATERIAL YIELD LIMIT)</div>
        <div style="background: rgba(0,0,0,0.2); border: 1px solid var(--app-border); border-radius: 6px; padding: 16px; display: flex; flex-direction: column; gap: 16px;">
          <!-- Compression Bar -->
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <div class="flex-between" style="font-size: 0.75rem;">
              <span>Compression Stress</span>
              <span style="font-weight: 700; color: var(--app-accent-amber);">62% (Allowable)</span>
            </div>
            <div style="height: 12px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden;">
              <div style="height: 100%; background: linear-gradient(90deg, var(--app-accent-cyan) 0%, var(--app-accent-amber) 100%); width: 62%;"></div>
            </div>
          </div>

          <!-- Tension Bar -->
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <div class="flex-between" style="font-size: 0.75rem;">
              <span>Tension Stress</span>
              <span style="font-weight: 700; color: var(--app-accent-green);">28% (Allowable)</span>
            </div>
            <div style="height: 12px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden;">
              <div style="height: 100%; background: var(--app-accent-green); width: 28%;"></div>
            </div>
          </div>

          <!-- Bending Bar -->
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <div class="flex-between" style="font-size: 0.75rem;">
              <span>Bending Stress (Current Wave Tilt)</span>
              <span style="font-weight: 700; color: var(--app-accent-green);">31% (Allowable)</span>
            </div>
            <div style="height: 12px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden;">
              <div style="height: 100%; background: var(--app-accent-green); width: 31%;"></div>
            </div>
          </div>
        </div>

        <div class="metric-row" style="margin-top: 16px; background: rgba(0, 240, 255, 0.02); border-color: var(--app-card-border);">
          <span style="font-size: 0.75rem; color: var(--app-text-muted);">
            Fatigue Accumulation Index: <strong style="color: var(--app-accent-green);">LOW</strong> | Remaining Allowable Margin: <strong style="color: var(--app-accent-cyan);">38%</strong>
          </span>
        </div>
      </div>

      <!-- Threshold warning settings and sliders -->
      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--app-border); border-radius: 6px; padding: 16px;">
        <div class="form-label" style="margin-bottom: 12px; border-bottom: 1px solid var(--app-border); padding-bottom: 6px;">ADJUST THRESHOLD ALERT LIMITS</div>
        
        <div class="slider-container">
          <div class="slider-label-wrapper">
            <span>Compression Limit</span>
            <span style="color: var(--app-accent-cyan); font-weight: 600;">{{ compressionLimit }}%</span>
          </div>
          <input type="range" min="50" max="95" [(ngModel)]="compressionLimit" class="range-input">
        </div>

        <div class="slider-container">
          <div class="slider-label-wrapper">
            <span>Tension Limit</span>
            <span style="color: var(--app-accent-cyan); font-weight: 600;">{{ tensionLimit }}%</span>
          </div>
          <input type="range" min="30" max="80" [(ngModel)]="tensionLimit" class="range-input">
        </div>

        <div class="slider-container" style="margin-bottom: 20px;">
          <div class="slider-label-wrapper">
            <span>Bending Limit</span>
            <span style="color: var(--app-accent-cyan); font-weight: 600;">{{ bendingLimit }}%</span>
          </div>
          <input type="range" min="30" max="80" [(ngModel)]="bendingLimit" class="range-input">
        </div>

        <div class="grid-2">
          <ion-button expand="block" fill="outline" class="industrial-btn" (click)="resetLimits()">
            Reset
          </ion-button>
          <ion-button expand="block" fill="solid" class="industrial-btn-solid" (click)="saveLimits()">
            Set Alerts
          </ion-button>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB 3: AI Predictive Installation Forecast -->
  <div *ngIf="activeTab === 'forecast'" class="industrial-card" style="padding: 20px;">
    <div class="panel-header-line">
      <h3 class="panel-title"><lucide-icon name="activity" class="panel-icon"></lucide-icon> AI Predictive Installation Forecast</h3>
      <span class="status-badge-inline live">Forecast confidence: High</span>
    </div>

    <div class="grid-2" style="grid-template-columns: 1fr 1.2fr; gap: 20px; align-items: start;">
      <div>
        <div class="ai-reasoning-box">
          The machine learning predictor combines previous North Sea driving runs in Block A with real-time penetration rate telemetry to forecast the remaining cycle duration.
        </div>
        
        <div class="metric-list" style="margin-bottom: 16px;">
          <div class="metric-row">
            <span class="metric-row-label">Target Completion Depth</span>
            <span class="metric-row-value">45.0 m</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Expected Completion Time</span>
            <span class="metric-row-value" style="color: var(--app-accent-cyan); font-weight: 700;">11:20 AM UTC</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Remaining Blows Predicted</span>
            <span class="metric-row-value">680 blows</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Expected Average Penetration</span>
            <span class="metric-row-value">17 mm/blow</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Confidence Level</span>
            <span class="metric-row-value" style="color: var(--app-accent-green);">92%</span>
          </div>
        </div>

        <ion-button expand="block" fill="solid" class="industrial-btn-solid" (click)="recalculateForecast()">
          <lucide-icon name="refresh-cw" style="width: 14px; height: 14px; margin-right: 6px;" [class.pulsing-indicator]="isRecalculatingForecast"></lucide-icon>
          {{ isRecalculatingForecast ? 'Running Predictions...' : 'Recalculate Forecast' }}
        </ion-button>
      </div>

      <!-- Historical model accuracy gauge + chart -->
      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--app-border); border-radius: 6px; padding: 16px; display: flex; flex-direction: column; gap: 14px;">
        <div class="flex-between">
          <div class="form-label">FORECAST ACCURACY (PREVIOUS 10 RUNS)</div>
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--app-accent-green); font-weight: 700;">94% ACCURACY</span>
        </div>

        <div style="height: 90px; background: rgba(0,0,0,0.15); border-radius: 4px; display: flex; align-items: flex-end; justify-content: space-between; padding: 10px 16px 4px 16px; border: 1px solid rgba(255,255,255,0.02);">
          <div *ngFor="let accurate of [89, 91, 93, 90, 94, 95, 92, 94, 96, 94]" style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
            <div style="width: 12px; background: linear-gradient(180deg, var(--app-accent-cyan) 0%, rgba(0,240,255,0.1) 100%); border-radius: 2px 2px 0 0;" [style.height.px]="accurate - 20"></div>
            <span style="font-size: 0.55rem; color: var(--app-text-muted);">{{ accurate }}%</span>
          </div>
        </div>
        <div style="text-align: center; font-size: 0.65rem; color: var(--app-text-muted);">
          Forecast algorithm is auto-updating via reinforcement learning.
        </div>
      </div>
    </div>
  </div>

  <!-- TAB 4: Weather Window Intelligence -->
  <div *ngIf="activeTab === 'weather'" class="industrial-card" style="padding: 20px;">
    <div class="panel-header-line">
      <h3 class="panel-title"><lucide-icon name="cloud-rain" class="panel-icon"></lucide-icon> Weather Window Intelligence</h3>
      <span class="status-badge-inline caution">Meteorological Monitor active</span>
    </div>

    <div class="grid-2" style="grid-template-columns: 1.2fr 1fr; gap: 20px; align-items: start;">
      <div>
        <div class="form-label" style="margin-bottom: 12px;">HOURLY WINDOW WEATHER STATUS</div>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 16px;">
          <div *ngFor="let hour of forecastHours" class="industrial-card" style="padding: 10px; text-align: center; cursor: pointer; background: rgba(0,0,0,0.2);" (click)="selectForecastHour(hour)">
            <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.8rem; font-weight: 700; margin-bottom: 4px;">{{ hour.time }}</div>
            <div class="risk-badge" [ngClass]="hour.status.toLowerCase()" style="font-size: 0.55rem; padding: 1px 4px;">{{ hour.status }}</div>
            <div style="font-size: 0.65rem; color: var(--app-text-muted); margin-top: 6px;">{{ hour.wave }}m Wave</div>
          </div>
        </div>

        <div class="ai-reasoning-box" style="margin-bottom: 0;">
          <strong>Optimal Piling Window:</strong> NOW until 16:00 UTC. Recommended Operating Mode: <strong>Normal</strong>. Wave height stays within limits. Winds stable. Vessel heave impact low.
        </div>
      </div>

      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--app-border); border-radius: 6px; padding: 16px;">
        <div class="form-label" style="margin-bottom: 12px; border-bottom: 1px solid var(--app-border); padding-bottom: 6px;">OPTIMAL WINDOW SCHEDULER</div>
        
        <div style="text-align: center; padding: 12px 0;">
          <div style="font-size: 0.7rem; color: var(--app-text-muted); text-transform: uppercase;">Time Remaining in Favorable Window</div>
          <div style="font-family: 'Space Grotesk', sans-serif; font-size: 2rem; font-weight: 700; color: var(--app-accent-green); text-shadow: 0 0 10px rgba(0,255,157,0.2);">
            03h 48m 12s
          </div>
        </div>

        <p style="font-size: 0.75rem; color: var(--app-text-muted); line-height: 1.4; margin-bottom: 16px;">
          Schedule future lifts or pile handling actions using AI prediction of weather windows over the next 48 hours.
        </p>

        <ion-button expand="block" fill="solid" class="industrial-btn-solid" (click)="openSchedulingModal()">
          <lucide-icon name="calendar" style="width: 14px; height: 14px; margin-right: 6px;"></lucide-icon>
          Schedule Lifting Window
        </ion-button>
      </div>
    </div>
  </div>

  <!-- TAB 5: Equipment Health Prediction -->
  <div *ngIf="activeTab === 'health'" class="industrial-card" style="padding: 20px;">
    <div class="panel-header-line">
      <h3 class="panel-title"><lucide-icon name="shield" class="panel-icon"></lucide-icon> Equipment Health & Diagnostics</h3>
      <span class="status-badge-inline live">Sensor Integrity: 99.8%</span>
    </div>

    <div class="grid-2" style="grid-template-columns: 1fr 1.2fr; gap: 20px; align-items: start;">
      <div>
        <div class="gauge-container" style="padding: 0; margin-bottom: 16px;">
          <div class="circular-gauge" style="width: 120px; height: 120px;">
            <svg viewBox="0 0 150 150">
              <circle class="bg-circle" cx="75" cy="75" r="65"></circle>
              <!-- 94% of 408 is 383, offset is 25 -->
              <circle class="fg-circle green" cx="75" cy="75" r="65" stroke-dashoffset="25"></circle>
            </svg>
            <div class="gauge-text-wrapper">
              <span class="gauge-number" style="font-size: 1.5rem;">94%</span>
              <span class="gauge-unit">Excellent</span>
            </div>
          </div>
        </div>
        
        <p style="font-size: 0.75rem; color: var(--app-text-muted); text-align: center; margin-bottom: 16px;">
          Hydraulic Power Pack temperatures are stabilized. Accumulator pressure is optimal.
        </p>

        <ion-button expand="block" fill="solid" class="industrial-btn-solid" (click)="runDiagnostics()">
          <lucide-icon name="refresh-cw" style="width: 14px; height: 14px; margin-right: 6px;" [class.pulsing-indicator]="isRunningDiag"></lucide-icon>
          {{ isRunningDiag ? 'Analysing Sensor Nodes...' : 'Run Diagnostics' }}
        </ion-button>
      </div>

      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--app-border); border-radius: 6px; padding: 16px;">
        <div class="form-label" style="margin-bottom: 12px; border-bottom: 1px solid var(--app-border); padding-bottom: 6px;">COMPONENT DIAGNOSTIC CORES</div>
        
        <div class="metric-list" style="margin-bottom: 16px;">
          <div class="metric-row">
            <span class="metric-row-label">Hydraulic Control Valve Core</span>
            <span class="metric-row-value" style="color: var(--app-accent-green);">96% (Good)</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Hammer Anvil Cushion Stress</span>
            <span class="metric-row-value" style="color: var(--app-accent-green);">94% (Good)</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Power Pack Generator load</span>
            <span class="metric-row-value" style="color: var(--app-accent-green);">92% (Good)</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Sensor Transceiver Integrity</span>
            <span class="metric-row-value" style="color: var(--app-accent-cyan);">99% (Excellent)</span>
          </div>
        </div>

        <div class="form-label" style="margin-bottom: 8px;">REMAINING USEFUL LIFE PREDICTIONS</div>
        <div style="font-size: 0.7rem; color: var(--app-text-muted); line-height: 1.5;">
          • Anvil Cushion: <strong>18 hours</strong> operational left (scheduled swap) <br>
          • Hammer Seal Ring: <strong>Good</strong> (no pressure drops observed) <br>
          • Hydraulic Accumulator charge: <strong>Good</strong>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB 6: AI Recommendation Centre -->
  <div *ngIf="activeTab === 'recs'" class="industrial-card" style="padding: 20px;">
    <div class="panel-header-line">
      <h3 class="panel-title"><lucide-icon name="compass" class="panel-icon"></lucide-icon> AI Recommendation Centre</h3>
      <span class="status-badge-inline live">Optimum Energy Solver Active</span>
    </div>

    <div class="grid-2" style="grid-template-columns: 1.2fr 1fr; gap: 20px; align-items: start;">
      <div>
        <div class="ai-reasoning-box" style="margin-bottom: 16px;">
          The recommendation engine runs an optimization algorithm utilizing marine wave frequency feeds and structural strain levels to maintain peak penetration rates without stressing the pile steel.
        </div>

        <div style="background: rgba(0,0,0,0.2); border: 1px solid var(--app-border); border-radius: 6px; padding: 16px; margin-bottom: 16px;">
          <div class="form-label" style="margin-bottom: 8px;">CURRENT DYNAMIC DECISION PATH</div>
          <p style="font-size: 0.75rem; line-height: 1.4; color: var(--app-text-muted); margin: 0;">
            1. Weather is stable (wave height {{ state.waveHeight }}m within 1.5m tolerance). <br>
            2. Soil resistance is rising gradually. Medium Dense Sand is shifting. <br>
            3. Recommended Energy setting calculated: <strong>85%</strong> (Previous setting: 82%). <br>
            4. Recommended Blow Rate calculated: <strong>35 bpm</strong> (Previous: 34 bpm).
          </p>
        </div>

        <div class="grid-2">
          <ion-button expand="block" fill="outline" class="industrial-btn" (click)="exportRecommendations()">
            Export Report
          </ion-button>
          <ion-button expand="block" fill="solid" class="industrial-btn-solid" (click)="applyAllRecommendations()">
            Apply All Settings
          </ion-button>
        </div>
      </div>

      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--app-border); border-radius: 6px; padding: 16px;">
        <div class="form-label" style="margin-bottom: 12px; border-bottom: 1px solid var(--app-border); padding-bottom: 6px;">RECOMMENDED SETTINGS LIST</div>
        
        <div class="metric-list">
          <div class="metric-row">
            <span class="metric-row-label">Recommended Energy</span>
            <span class="metric-row-value" style="color: var(--app-accent-cyan);">85%</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Recommended Blow Rate</span>
            <span class="metric-row-value" style="color: var(--app-accent-cyan);">35 bpm</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Cushion Configuration</span>
            <span class="metric-row-value">Anvil Standard (No Change)</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Operating Style Goal</span>
            <span class="metric-row-value" style="color: var(--app-accent-green);">Optimized Penetration</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB 7: Digital Twin - Installation Overview -->
  <div *ngIf="activeTab === 'twin'" class="industrial-card" style="padding: 20px;">
    <div class="panel-header-line">
      <h3 class="panel-title"><lucide-icon name="activity" class="panel-icon"></lucide-icon> Digital Twin Offshore Overview</h3>
      <span class="status-badge-inline live">Simulating 3D telemetry</span>
    </div>

    <div class="grid-2" style="grid-template-columns: 1.2fr 1fr; gap: 20px; align-items: start;">
      <!-- Interactive 2D SVG Digital Twin -->
      <div>
        <div class="form-label" style="margin-bottom: 8px;">LIVE MONOPILE TELEMETRY CANVAS</div>
        <div class="digital-twin-container">
          <!-- Wave Water Layer (Upper part) -->
          <div class="water-layer"></div>
          
          <!-- Van Oord Aeolus Vessel -->
          <div class="vessel-twin">
            AEOLUS
          </div>
          <div class="crane-arm-twin"></div>

          <!-- Soil Layers (Lower part) -->
          <div class="sea-floor">
            <div class="soil-twin-layer" style="background: rgba(141, 110, 99, 0.08);">Soft Clay (0 - 12m)</div>
            <div class="soil-twin-layer" style="background: rgba(255, 235, 156, 0.05);">Silt / Sand (12 - 28m)</div>
            <div class="soil-twin-layer" style="background: rgba(251, 192, 45, 0.08);">Dense Sand (28 - 42m)</div>
            <div class="soil-twin-layer" style="background: rgba(120, 144, 156, 0.1);">Rock Bed (&gt;42m)</div>
          </div>

          <!-- Monopile drawing, height based on actual penetration -->
          <!-- Piling starts at water level (top: 30px) and penetrates. Height is 150px.
               If depth is 32.4m, seabed is at 110px. Pile tip has penetrated.
               Let's render a gorgeous vertical pile section. -->
          <div class="twin-pile" 
               [style.top.px]="30" 
               [style.height.px]="130" 
               [style.left.%]="twinZoom ? 47 : 50"
               [style.width.px]="twinZoom ? 22 : 14"
               style="cursor: pointer;"
               (click)="clickTwinPile()"
               title="Click to view detailed pile analytics">
          </div>

          <!-- Water depth line indicator -->
          <div style="position: absolute; top: 70px; right: 10px; font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; color: var(--app-accent-cyan);">
            Water Depth: 42.0m
          </div>
          
          <div style="position: absolute; bottom: 40px; right: 10px; font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; color: var(--app-accent-green);">
            Penetration: {{ state.currentDepth }}m
          </div>

          <!-- Legends -->
          <div class="twin-soil-legend">
            <div class="legend-dot-wrapper">
              <span class="legend-dot" style="background: rgba(141, 110, 99, 0.2);"></span>
              <span>Clay</span>
            </div>
            <div class="legend-dot-wrapper">
              <span class="legend-dot" style="background: rgba(251, 192, 45, 0.2);"></span>
              <span>Sand</span>
            </div>
            <div class="legend-dot-wrapper">
              <span class="legend-dot" style="background: rgba(120, 144, 156, 0.2);"></span>
              <span>Rock</span>
            </div>
          </div>
        </div>

        <!-- Controls for Digital Twin -->
        <div class="flex-between" style="margin-top: 10px;">
          <div style="display: flex; gap: 4px;">
            <ion-button size="small" fill="outline" class="industrial-btn" (click)="toggleTwinZoom()">
              <lucide-icon [name]="twinZoom ? 'minus' : 'plus'" style="width: 14px; height: 14px; margin-right: 4px;"></lucide-icon>
              {{ twinZoom ? 'Zoom Out' : 'Zoom In' }}
            </ion-button>
          </div>
          <span style="font-size: 0.65rem; color: var(--app-text-muted);">Click monopile to view material details</span>
        </div>
      </div>

      <!-- KPI sidebar -->
      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--app-border); border-radius: 6px; padding: 16px;">
        <div class="form-label" style="margin-bottom: 12px; border-bottom: 1px solid var(--app-border); padding-bottom: 6px;">DIGITAL TWIN PARAMETERS</div>
        
        <div class="metric-list" style="margin-bottom: 16px;">
          <div class="metric-row">
            <span class="metric-row-label">Current Penetration Depth</span>
            <span class="metric-row-value" style="color: var(--app-accent-cyan);">{{ state.currentDepth }} m</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Pile Verticality</span>
            <span class="metric-row-value" style="color: var(--app-accent-green);">99.4%</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Impact Efficiency</span>
            <span class="metric-row-value">88%</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Installation Quality</span>
            <span class="metric-row-value" style="color: var(--app-accent-green);">HIGH</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Vessel Heave Impact</span>
            <span class="metric-row-value">LOW</span>
          </div>
        </div>

        <p style="font-size: 0.75rem; color: var(--app-text-muted); line-height: 1.4;">
          The Digital Twin utilizes dual-axis fiber optic sensors along the pile cylinder to model structural flexure in real-time.
        </p>
      </div>
    </div>
  </div>

</div>
</ion-content>`,E=".range-input{cursor:pointer}",D=`
    .limits-modal-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--app-bg);
      color: var(--app-text);
    }

    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      border-bottom: 1px solid var(--app-border);
    }

    .modal-title-wrapper {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .modal-icon {
      width: 24px;
      height: 24px;
      color: var(--app-accent-green);
    }

    .modal-header h2 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.1rem;
      font-weight: 700;
      margin: 0;
      color: var(--app-text);
    }

    .close-btn {
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      transition: background 0.2s;
    }

    .close-btn:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .close-btn lucide-icon {
      width: 20px;
      height: 20px;
      color: var(--app-text-muted);
    }

    .modal-content {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .modal-description {
      margin: 0;
      font-size: 0.85rem;
      color: var(--app-text-muted);
      line-height: 1.5;
    }

    .limits-grid {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .limit-card {
      background: var(--app-card-bg);
      border: 1px solid var(--app-card-border);
      border-radius: 8px;
      padding: 16px;
      backdrop-filter: blur(8px);
    }

    .limit-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }

    .limit-icon {
      width: 16px;
      height: 16px;
    }

    .limit-label {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--app-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .limit-value {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .limit-bar-bg {
      width: 100%;
      height: 6px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 3px;
      overflow: hidden;
    }

    .limit-bar-fill {
      height: 100%;
      border-radius: 3px;
      transition: width 0.5s ease;
    }

    /* Specific Colors */
    .limit-card.compression .limit-icon { color: var(--app-accent-cyan); }
    .limit-card.compression .limit-value { color: var(--app-accent-cyan); }
    .limit-card.compression .limit-bar-fill { background: var(--app-accent-cyan); box-shadow: 0 0 6px var(--app-accent-cyan); }

    .limit-card.tension .limit-icon { color: var(--app-accent-amber); }
    .limit-card.tension .limit-value { color: var(--app-accent-amber); }
    .limit-card.tension .limit-bar-fill { background: var(--app-accent-amber); box-shadow: 0 0 6px var(--app-accent-amber); }

    .limit-card.bending .limit-icon { color: var(--app-accent-red); }
    .limit-card.bending .limit-value { color: var(--app-accent-red); }
    .limit-card.bending .limit-bar-fill { background: var(--app-accent-red); box-shadow: 0 0 6px var(--app-accent-red); }

    .modal-footer {
      padding: 20px;
      border-top: 1px solid var(--app-border);
      display: flex;
      justify-content: flex-end;
    }

    .confirm-btn {
      background: var(--app-accent-cyan);
      color: #0b1120;
      border: none;
      padding: 10px 24px;
      border-radius: 6px;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
    }

    .confirm-btn:hover {
      filter: brightness(1.1) drop-shadow(0 0 6px var(--app-accent-cyan));
      transform: translateY(-1px);
    }
  `;var z=function(t,e,a,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,a):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,a,i);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s<3?r(n):s>3?r(e,a,n):r(e,a))||n);return s>3&&n&&Object.defineProperty(e,a,n),n},O=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)},c;let x=(c=class{constructor(e){this.modalController=e,this.compression=0,this.tension=0,this.bending=0}dismiss(){this.modalController.dismiss()}},c.ctorParameters=()=>[{type:l}],c.propDecorators={compression:[{type:v}],tension:[{type:v}],bending:[{type:v}]},c);x=z([g({selector:"app-stress-limits-modal",standalone:!0,imports:[u,b],template:`
    <div class="limits-modal-container">
      <div class="modal-header">
        <div class="modal-title-wrapper">
          <lucide-icon name="shield-check" class="modal-icon"></lucide-icon>
          <h2>Stress Alerts Configured</h2>
        </div>
        <button class="close-btn" (click)="dismiss()">
          <lucide-icon name="x"></lucide-icon>
        </button>
      </div>

      <div class="modal-content">
        <p class="modal-description">
          Warning notifications will trigger when stress levels exceed the configured thresholds:
        </p>

        <div class="limits-grid">
          <div class="limit-card compression">
            <div class="limit-header">
              <lucide-icon name="arrow-down-to-line" class="limit-icon"></lucide-icon>
              <span class="limit-label">Compression</span>
            </div>
            <div class="limit-value">{{ compression }}%</div>
            <div class="limit-bar-bg">
              <div class="limit-bar-fill" [style.width.%]="compression"></div>
            </div>
          </div>

          <div class="limit-card tension">
            <div class="limit-header">
              <lucide-icon name="arrow-up-from-line" class="limit-icon"></lucide-icon>
              <span class="limit-label">Tension</span>
            </div>
            <div class="limit-value">{{ tension }}%</div>
            <div class="limit-bar-bg">
              <div class="limit-bar-fill" [style.width.%]="tension"></div>
            </div>
          </div>

          <div class="limit-card bending">
            <div class="limit-header">
              <lucide-icon name="corner-down-right" class="limit-icon"></lucide-icon>
              <span class="limit-label">Bending</span>
            </div>
            <div class="limit-value">{{ bending }}%</div>
            <div class="limit-bar-bg">
              <div class="limit-bar-fill" [style.width.%]="bending"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button class="confirm-btn" (click)="dismiss()">Confirm</button>
      </div>
    </div>
  `,styles:[D]}),O("design:paramtypes",[l])],x);const _=`
    .forecast-modal-container {
      display: flex;
      flex-direction: column;
      max-height: 85vh;
      background: var(--app-bg);
      color: var(--app-text);
      border-radius: 12px;
      overflow: hidden;
    }

    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 20px;
      border-bottom: 1px solid var(--app-border);
      flex-shrink: 0;
    }

    .modal-title-wrapper {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .modal-icon {
      width: 24px;
      height: 24px;
      color: var(--app-accent-cyan);
    }

    .modal-header h2 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.1rem;
      font-weight: 700;
      margin: 0;
      color: var(--app-text);
    }

    .close-btn {
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      transition: background 0.2s;
    }

    .close-btn:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .close-btn lucide-icon {
      width: 20px;
      height: 20px;
      color: var(--app-text-muted);
    }

    .modal-content {
      flex: 1;
      overflow-y: auto;
      padding: 16px 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .status-banner {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-radius: 8px;
      border: 1px solid;
    }

    .status-banner.good {
      background: rgba(0, 255, 157, 0.08);
      border-color: var(--app-accent-green);
    }

    .status-banner.caution {
      background: rgba(255, 176, 0, 0.08);
      border-color: var(--app-accent-amber);
    }

    .status-banner.poor {
      background: rgba(255, 51, 102, 0.08);
      border-color: var(--app-accent-red);
    }

    .status-icon {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }

    .status-banner.good .status-icon { color: var(--app-accent-green); }
    .status-banner.caution .status-icon { color: var(--app-accent-amber); }
    .status-banner.poor .status-icon { color: var(--app-accent-red); }

    .status-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .status-label {
      font-size: 0.7rem;
      color: var(--app-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .status-value {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.1rem;
      font-weight: 700;
    }

    .status-banner.good .status-value { color: var(--app-accent-green); }
    .status-banner.caution .status-value { color: var(--app-accent-amber); }
    .status-banner.poor .status-value { color: var(--app-accent-red); }

    .metrics-grid {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .metric-card {
      background: var(--app-card-bg);
      border: 1px solid var(--app-card-border);
      border-radius: 8px;
      padding: 12px 16px;
      backdrop-filter: blur(8px);
    }

    .metric-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 6px;
    }

    .metric-icon {
      width: 16px;
      height: 16px;
      color: var(--app-accent-cyan);
    }

    .metric-label {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.7rem;
      font-weight: 600;
      color: var(--app-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .metric-value {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--app-text);
      margin-bottom: 4px;
    }

    .metric-threshold {
      font-size: 0.7rem;
      color: var(--app-text-muted);
      margin-bottom: 8px;
    }

    .metric-bar-bg {
      width: 100%;
      height: 6px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 3px;
      overflow: hidden;
    }

    .metric-bar-fill {
      height: 100%;
      border-radius: 3px;
      transition: width 0.5s ease;
    }

    .metric-bar-fill.wave-bar {
      background: var(--app-accent-cyan);
      box-shadow: 0 0 6px var(--app-accent-cyan);
    }

    .metric-bar-fill.wind-bar {
      background: var(--app-accent-amber);
      box-shadow: 0 0 6px var(--app-accent-amber);
    }

    .metric-bar-fill.heave-bar {
      background: var(--app-accent-green);
      box-shadow: 0 0 6px var(--app-accent-green);
    }

    .assessment-box {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 12px 16px;
      border-radius: 8px;
      border-left: 3px solid;
    }

    .assessment-box.good {
      background: rgba(0, 255, 157, 0.05);
      border-color: var(--app-accent-green);
    }

    .assessment-box.caution {
      background: rgba(255, 176, 0, 0.05);
      border-color: var(--app-accent-amber);
    }

    .assessment-box.poor {
      background: rgba(255, 51, 102, 0.05);
      border-color: var(--app-accent-red);
    }

    .assessment-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .assessment-box.good .assessment-icon { color: var(--app-accent-green); }
    .assessment-box.caution .assessment-icon { color: var(--app-accent-amber); }
    .assessment-box.poor .assessment-icon { color: var(--app-accent-red); }

    .assessment-text {
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: 0.8rem;
      line-height: 1.5;
    }

    .assessment-text strong {
      color: var(--app-text);
      font-family: 'Space Grotesk', sans-serif;
    }

    .assessment-text span {
      color: var(--app-text-muted);
    }

    .modal-footer {
      padding: 12px 20px;
      border-top: 1px solid var(--app-border);
      display: flex;
      justify-content: flex-end;
      flex-shrink: 0;
      background: var(--app-bg);
    }

    .acknowledge-btn {
      background: var(--app-accent-cyan);
      color: #0b1120;
      border: none;
      padding: 10px 24px;
      border-radius: 6px;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
    }

    .acknowledge-btn:hover {
      filter: brightness(1.1) drop-shadow(0 0 6px var(--app-accent-cyan));
      transform: translateY(-1px);
    }
  `;var M=function(t,e,a,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,a):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,a,i);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s<3?r(n):s>3?r(e,a,n):r(e,a))||n);return s>3&&n&&Object.defineProperty(e,a,n),n},N=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)},d;let h=(d=class{constructor(e){this.modalController=e,this.Math=Math}get heaveAmplitude(){return Math.round(this.hour.wave*.3*100)/100}getStatusClass(){return this.hour.status.toLowerCase()}getStatusIcon(){switch(this.hour.status){case"Good":return"check-circle-2";case"Caution":return"alert-triangle";case"Poor":return"alert-circle";default:return"info"}}getAssessmentText(){return this.hour.status==="Good"?"Conditions are optimal for piling operations. All parameters within safe limits.":this.hour.status==="Caution"?"Monitor conditions closely. Operations can continue but be prepared to halt if conditions worsen.":"Conditions are unfavorable. Recommend halting piling operations until conditions improve."}dismiss(){this.modalController.dismiss()}},d.ctorParameters=()=>[{type:l}],d.propDecorators={hour:[{type:v}]},d);h=M([g({selector:"app-forecast-hour-modal",standalone:!0,imports:[u,b],template:`
    <div class="forecast-modal-container">
      <div class="modal-header">
        <div class="modal-title-wrapper">
          <lucide-icon name="clock" class="modal-icon"></lucide-icon>
          <h2>Weather Window - {{ hour.time }}</h2>
        </div>
        <button class="close-btn" (click)="dismiss()">
          <lucide-icon name="x"></lucide-icon>
        </button>
      </div>

      <div class="modal-content">
        <div class="status-banner" [class]="getStatusClass()">
          <lucide-icon [name]="getStatusIcon()" class="status-icon"></lucide-icon>
          <div class="status-info">
            <span class="status-label">Window Quality</span>
            <span class="status-value">{{ hour.status }}</span>
          </div>
        </div>

        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-header">
              <lucide-icon name="waves" class="metric-icon"></lucide-icon>
              <span class="metric-label">Significant Wave Height</span>
            </div>
            <div class="metric-value">{{ hour.wave }}m</div>
            <div class="metric-threshold">Safe threshold: 2.0m</div>
            <div class="metric-bar-bg">
              <div class="metric-bar-fill wave-bar" [style.width.%]="Math.min(100, (hour.wave / 2.0) * 100)"></div>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <lucide-icon name="wind" class="metric-icon"></lucide-icon>
              <span class="metric-label">Avg Wind Velocity</span>
            </div>
            <div class="metric-value">{{ hour.wind }} m/s</div>
            <div class="metric-threshold">Safe threshold: 15.0 m/s</div>
            <div class="metric-bar-bg">
              <div class="metric-bar-fill wind-bar" [style.width.%]="Math.min(100, (hour.wind / 15.0) * 100)"></div>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <lucide-icon name="activity" class="metric-icon"></lucide-icon>
              <span class="metric-label">Heave Amplitude</span>
            </div>
            <div class="metric-value">{{ heaveAmplitude }}m</div>
            <div class="metric-threshold">Safe</div>
            <div class="metric-bar-bg">
              <div class="metric-bar-fill heave-bar" [style.width.%]="Math.min(100, (heaveAmplitude / 0.8) * 100)"></div>
            </div>
          </div>
        </div>

        <div class="assessment-box" [class]="getStatusClass()">
          <lucide-icon name="info" class="assessment-icon"></lucide-icon>
          <div class="assessment-text">
            <strong>AI Assessment:</strong>
            <span>{{ getAssessmentText() }}</span>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button class="acknowledge-btn" (click)="dismiss()">Acknowledge</button>
      </div>
    </div>
  `,styles:[_]}),N("design:paramtypes",[l])],h);const B=`
    .pile-modal-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--app-bg);
      color: var(--app-text);
    }

    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      border-bottom: 1px solid var(--app-border);
    }

    .modal-title-wrapper {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .modal-icon {
      width: 24px;
      height: 24px;
      color: var(--app-accent-cyan);
    }

    .modal-header h2 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.1rem;
      font-weight: 700;
      margin: 0;
      color: var(--app-text);
    }

    .close-btn {
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      transition: background 0.2s;
    }

    .close-btn:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .close-btn lucide-icon {
      width: 20px;
      height: 20px;
      color: var(--app-text-muted);
    }

    .modal-content {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .specs-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    @media (max-width: 600px) {
      .specs-grid {
        grid-template-columns: 1fr;
      }
    }

    .spec-card {
      background: var(--app-card-bg);
      border: 1px solid var(--app-card-border);
      border-radius: 8px;
      padding: 16px;
      backdrop-filter: blur(8px);
    }

    .spec-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }

    .spec-icon {
      width: 16px;
      height: 16px;
      color: var(--app-accent-cyan);
    }

    .spec-label {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.7rem;
      font-weight: 600;
      color: var(--app-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .spec-value {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--app-text);
      margin-bottom: 4px;
    }

    .spec-sub {
      font-size: 0.75rem;
      color: var(--app-text-muted);
    }

    .status-banner {
      display: flex;
      align-items: center;
      gap: 12px;
      background: rgba(0, 255, 157, 0.08);
      border: 1px solid var(--app-accent-green);
      border-radius: 8px;
      padding: 16px;
    }

    .status-icon {
      width: 24px;
      height: 24px;
      color: var(--app-accent-green);
      flex-shrink: 0;
    }

    .status-text {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .status-text strong {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.85rem;
      color: var(--app-accent-green);
    }

    .status-text span {
      font-size: 0.8rem;
      color: var(--app-text-muted);
    }

    .modal-footer {
      padding: 20px;
      border-top: 1px solid var(--app-border);
      display: flex;
      justify-content: flex-end;
    }

    .close-modal-btn {
      background: var(--app-accent-cyan);
      color: #0b1120;
      border: none;
      padding: 10px 24px;
      border-radius: 6px;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
    }

    .close-modal-btn:hover {
      filter: brightness(1.1) drop-shadow(0 0 6px var(--app-accent-cyan));
      transform: translateY(-1px);
    }
  `;var G=function(t,e,a,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,a):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,a,i);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s<3?r(n):s>3?r(e,a,n):r(e,a))||n);return s>3&&n&&Object.defineProperty(e,a,n),n},W=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)},p;let f=(p=class{constructor(e){this.modalController=e}dismiss(){this.modalController.dismiss()}},p.ctorParameters=()=>[{type:l}],p);f=G([g({selector:"app-twin-pile-modal",standalone:!0,imports:[u,b],template:`
    <div class="pile-modal-container">
      <div class="modal-header">
        <div class="modal-title-wrapper">
          <lucide-icon name="cylinder" class="modal-icon"></lucide-icon>
          <h2>Monopile Cylinder - P12-J04</h2>
        </div>
        <button class="close-btn" (click)="dismiss()">
          <lucide-icon name="x"></lucide-icon>
        </button>
      </div>

      <div class="modal-content">
        <div class="specs-grid">
          <div class="spec-card">
            <div class="spec-header">
              <lucide-icon name="ruler" class="spec-icon"></lucide-icon>
              <span class="spec-label">Design Length</span>
            </div>
            <div class="spec-value">89.0m</div>
            <div class="spec-sub">Top 9.7m, Bottom 11.0m diameter</div>
          </div>

          <div class="spec-card">
            <div class="spec-header">
              <lucide-icon name="shield" class="spec-icon"></lucide-icon>
              <span class="spec-label">Material Yield Limit</span>
            </div>
            <div class="spec-value">420 MPa</div>
            <div class="spec-sub">High-strength offshore steel</div>
          </div>

          <div class="spec-card">
            <div class="spec-header">
              <lucide-icon name="cpu" class="spec-icon"></lucide-icon>
              <span class="spec-label">Transducer Placement</span>
            </div>
            <div class="spec-value">8 Segments</div>
            <div class="spec-sub">Along vertical shafts</div>
          </div>

          <div class="spec-card">
            <div class="spec-header">
              <lucide-icon name="compass" class="spec-icon"></lucide-icon>
              <span class="spec-label">Current Verticality</span>
            </div>
            <div class="spec-value">99.4%</div>
            <div class="spec-sub">Tolerance: +/- 1.0°</div>
          </div>
        </div>

        <div class="status-banner">
          <lucide-icon name="check-circle-2" class="status-icon"></lucide-icon>
          <div class="status-text">
            <strong>Structural Status</strong>
            <span>Integrity is excellent. No plastic deformation detected.</span>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button class="close-modal-btn" (click)="dismiss()">Close</button>
      </div>
    </div>
  `,styles:[B]}),W("design:paramtypes",[l])],f);var H=function(t,e,a,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,a):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,a,i);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s<3?r(n):s>3?r(e,a,n):r(e,a))||n);return s>3&&n&&Object.defineProperty(e,a,n),n},F=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)},m;let y=(m=class{constructor(e,a,i,s){this.dataService=e,this.alertController=a,this.toastController=i,this.modalController=s,this.activeTab="soil",this.compressionLimit=75,this.tensionLimit=40,this.bendingLimit=45,this.isPredictingSoil=!1,this.isRecalculatingForecast=!1,this.isRunningDiag=!1,this.twinZoom=!1,this.forecastHours=[{time:"10:00",status:"Good",wave:1.1,wind:12},{time:"12:00",status:"Good",wave:1.2,wind:12.6},{time:"14:00",status:"Good",wave:1.3,wind:13.2},{time:"16:00",status:"Caution",wave:1.5,wind:14.5},{time:"18:00",status:"Poor",wave:2.2,wind:17.8}]}ngOnInit(){this.stateSub=this.dataService.getState().subscribe(e=>{this.state=e})}ngOnDestroy(){this.stateSub&&this.stateSub.unsubscribe()}onTabChange(e){this.activeTab=e.detail.value}exportAllAnalytics(){this.showToast("Compiling comprehensive engineering analytics packet (ZIP)..."),setTimeout(()=>{this.showToast('ZIP packet "IQIP_ANALYTICS_OVERWATCH.zip" generated successfully.')},1500)}predictNextLayer(){this.isPredictingSoil||(this.isPredictingSoil=!0,this.showToast("Initializing advanced seismic wave mapping algorithm..."),setTimeout(()=>{this.isPredictingSoil=!1,this.showToast("Seismic layer correlation scan complete: Next boundary verified at 34.2m.")},2e3))}resetLimits(){this.compressionLimit=75,this.tensionLimit=40,this.bendingLimit=45,this.showToast("Stress warning limits reset to defaults.")}async saveLimits(){await(await this.modalController.create({component:x,componentProps:{compression:this.compressionLimit,tension:this.tensionLimit,bending:this.bendingLimit},cssClass:"standard-centered-modal",animated:!0,showBackdrop:!0})).present()}recalculateForecast(){this.isRecalculatingForecast||(this.isRecalculatingForecast=!0,this.showToast("Regressing real-time penetration rate against previous run coefficients..."),setTimeout(()=>{this.isRecalculatingForecast=!1,this.showToast("Predictive ETA recalculated. ETA stable at 11:20 AM UTC (94% accuracy).")},2e3))}async selectForecastHour(e){await(await this.modalController.create({component:h,componentProps:{hour:e},cssClass:"standard-centered-modal",animated:!0,showBackdrop:!0})).present()}async openSchedulingModal(){await(await this.alertController.create({header:"Lifting Window Scheduler",message:"Select the optimal starting date and time based on predicted weather window profiles over the next 48 hours.",inputs:[{name:"pilingDate",type:"date",value:"2026-07-14"},{name:"pilingTime",type:"time",value:"08:00"}],buttons:[{text:"Cancel",role:"cancel"},{text:"Schedule",handler:a=>{this.showToast(`Lifting operation scheduled for ${a.pilingDate} at ${a.pilingTime} UTC.`)}}]})).present()}runDiagnostics(){var e;this.isRunningDiag||(this.isRunningDiag=!0,(e=document.activeElement)==null||e.blur(),this.showToast("Querying hydraulic valve sensors & power pack transceivers..."),setTimeout(()=>{this.isRunningDiag=!1,this.showToast("All diagnostics green. Overall equipment condition: Excellent (94%)."),setTimeout(()=>{var a;(a=document.activeElement)==null||a.blur()},100)},2e3))}exportRecommendations(){this.showToast("Exporting dynamic AI recommendations package (PDF)..."),setTimeout(()=>{this.showToast("AI Recommendations downloaded successfully.")},1200)}applyAllRecommendations(){this.dataService.applyAiRecommendation()}toggleTwinZoom(){this.twinZoom=!this.twinZoom,this.showToast(this.twinZoom?"Digital twin canvas zoomed in (x2.5).":"Digital twin canvas zoom reset.")}async clickTwinPile(){await(await this.modalController.create({component:f,cssClass:"standard-centered-modal",animated:!0,showBackdrop:!0})).present()}async showToast(e){await(await this.toastController.create({message:e,duration:2e3,position:"bottom",color:"dark"})).present()}},m.ctorParameters=()=>[{type:w},{type:k},{type:S},{type:l}],m);y=H([g({selector:"app-advanced-analytics",standalone:!0,imports:[C,T,u,A,R,I,P,b],template:L,styles:[E]}),F("design:paramtypes",[w,k,S,l])],y);export{y as AdvancedAnalyticsPage};
