import{C as v,a as g,L as h,M as o,I as c,D as w,A as k,T as R,b as C,F as S,c as P}from"./index-xrJjlaNS.js";const T=`<ion-content class="main-page-content" scrollY="true" forceOverscroll="false">
<div class="dashboard-container">
  <!-- Top Quick Configuration Toolbar -->
  <div class="flex-between" style="margin-bottom: 12px; border-bottom: 1px solid var(--app-border); padding-bottom: 10px;">
    <h2 class="panel-title" style="font-size: 1.1rem; letter-spacing: 1.5px;">
      <lucide-icon name="activity" class="panel-icon" style="color: var(--app-accent-cyan);"></lucide-icon>
      Operations Command Centre
    </h2>
    <div class="panel-header-right">
      <!-- Auto-refresh Toggle -->
      <div style="display: flex; align-items: center; gap: 8px; margin-right: 16px;">
        <span style="font-size: 0.75rem; color: var(--app-text-muted); font-family: 'Space Grotesk', sans-serif; font-weight: 600;">TELEMETRY STREAM:</span>
        <ion-button size="small" [fill]="autoRefresh ? 'solid' : 'outline'" (click)="toggleAutoRefresh()" class="industrial-btn">
          {{ autoRefresh ? 'ACTIVE (1s)' : 'PAUSED' }}
        </ion-button>
      </div>

      <!-- Historical Time Filter -->
      <div style="display: flex; gap: 4px;">
        <ion-button *ngFor="let tf of timeFilters" 
                    size="small" 
                    [fill]="activeTimeFilter === tf ? 'solid' : 'outline'" 
                    (click)="setTimeFilter(tf)" 
                    class="industrial-btn"
                    [class.active]="activeTimeFilter === tf">
          {{ tf }}
        </ion-button>
      </div>
    </div>
  </div>

  <!-- Top KPI Grid -->
  <div class="kpi-grid">
    <!-- KPI 1: Installation Efficiency -->
    <div class="industrial-card kpi-card" (click)="openKpiDetail('efficiency')">
      <div class="kpi-left">
        <span class="kpi-label">Lifting Cycle Efficiency</span>
        <span class="kpi-value cyan-glow">+18%</span>
        <span class="kpi-subtext">
          <span class="trend-up">▲ 2.4%</span> vs planned driving rate
        </span>
      </div>
      <lucide-icon name="activity" class="kpi-right-icon"></lucide-icon>
    </div>

    <!-- KPI 2: System Health -->
    <div class="industrial-card kpi-card" (click)="openKpiDetail('health')">
      <div class="kpi-left">
        <span class="kpi-label">System Health Index</span>
        <span class="kpi-value green-glow">{{ state.systemHealth }}%</span>
        <span class="kpi-subtext">All hydraulic loops normal</span>
      </div>
      <lucide-icon name="shield" class="kpi-right-icon" style="color: var(--app-accent-green);"></lucide-icon>
    </div>

    <!-- KPI 3: Safety Index -->
    <div class="industrial-card kpi-card" (click)="openKpiDetail('safety')">
      <div class="kpi-left">
        <span class="kpi-label">Operational Safety Index</span>
        <span class="kpi-value" style="color: var(--app-accent-green); text-shadow: 0 0 10px rgba(0, 255, 157, 0.2);">{{ state.safetyIndex }}%</span>
        <span class="kpi-subtext">Wind gust limits safe</span>
      </div>
      <lucide-icon name="compass" class="kpi-right-icon"></lucide-icon>
    </div>

    <!-- KPI 4: Data Confidence -->
    <div class="industrial-card kpi-card" (click)="openKpiDetail('confidence')">
      <div class="kpi-left">
        <span class="kpi-label">Data Confidence</span>
        <span class="kpi-value cyan-glow">{{ state.dataConfidence }}</span>
        <span class="kpi-subtext">Dual-sensor consensus validated</span>
      </div>
      <lucide-icon name="check" class="kpi-right-icon"></lucide-icon>
    </div>

    <!-- KPI 5: Installation Phase -->
    <div class="industrial-card kpi-card" (click)="openKpiDetail('phase')">
      <div class="kpi-left">
        <span class="kpi-label">Installation Phase</span>
        <span class="kpi-value" style="color: var(--app-accent-amber); text-shadow: 0 0 10px rgba(255, 176, 0, 0.2); font-size: 1.4rem;">Driving</span>
        <span class="kpi-subtext">{{ state.installationPhase }}</span>
      </div>
      <lucide-icon name="settings" class="kpi-right-icon"></lucide-icon>
    </div>
  </div>

  <!-- Dashboard Bento Grid (3-columns) -->
  <div class="dashboard-grid">
    
    <!-- Panel 1: Hammer Performance -->
    <div class="industrial-card">
      <div class="panel-header-line">
        <h3 class="panel-title">
          <lucide-icon name="settings" class="panel-icon"></lucide-icon>
          Hammer Performance
        </h3>
        <span class="status-badge-inline live">Live telemetry</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 14px;">
        <!-- Circular Efficiency Gauge -->
        <div class="gauge-container">
          <div class="circular-gauge">
            <svg viewBox="0 0 150 150">
              <circle class="bg-circle" cx="75" cy="75" r="65"></circle>
              <!-- 408 is complete circle stroke-dasharray. 88% is 408 * (1 - 0.88) = 48.96 -->
              <circle class="fg-circle green" cx="75" cy="75" r="65" stroke-dashoffset="49"></circle>
            </svg>
            <div class="gauge-text-wrapper">
              <span class="gauge-number">88%</span>
              <span class="gauge-unit">Efficiency</span>
            </div>
          </div>
        </div>

        <!-- Metric list -->
        <div class="metric-list">
          <div class="metric-row">
            <span class="metric-row-label">Hammer Blow Rate</span>
            <span class="metric-row-value">{{ state.blowRate }} bpm</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Energy Delivered</span>
            <span class="metric-row-value">{{ state.energyDelivered }}%</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Hydraulic Pressure</span>
            <span class="metric-row-value">{{ state.hydraulicPressure }} bar</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Oil Temperature</span>
            <span class="metric-row-value">{{ state.oilTemperature }} °C</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Anvil Cushion Condition</span>
            <span class="metric-row-value" [style.color]="state.cushionCondition < 50 ? 'var(--app-accent-amber)' : 'var(--app-accent-green)'">
              {{ state.cushionCondition }}%
            </span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Stroke Count</span>
            <span class="metric-row-value">{{ state.blowCount }}</span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="grid-2">
          <ion-button expand="block" fill="outline" class="industrial-btn" (click)="openHammerDetailsModal()">
            View Details
          </ion-button>
          <ion-button expand="block" fill="solid" class="industrial-btn-solid" (click)="calibrateHammer()">
            <lucide-icon name="refresh-cw" style="width: 14px; height: 14px; margin-right: 6px;" [class.pulsing-indicator]="isCalibrating"></lucide-icon>
            {{ isCalibrating ? 'Calibrating...' : 'Calibrate' }}
          </ion-button>
        </div>
      </div>
    </div>

    <!-- Panel 2: Pile Analytics -->
    <div class="industrial-card">
      <div class="panel-header-line">
        <h3 class="panel-title">
          <lucide-icon name="activity" class="panel-icon"></lucide-icon>
          Pile Analytics
        </h3>
        <span class="status-badge-inline live">Dual-sensor feed</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 14px;">
        <!-- Visual Pile Penetration Column -->
        <div class="pile-container">
          <div class="depth-markers">
            <span>0m</span>
            <span>10m</span>
            <span>20m</span>
            <span>30m</span>
            <span>40m</span>
            <span>50m</span>
          </div>
          
          <div class="pile-well-wrapper">
            <!-- Soil Layers Backdrop -->
            <div class="soil-layers-bg">
              <div class="soil-layer clay">Soft Clay</div>
              <div class="soil-layer silt">Silt / Sand</div>
              <div class="soil-layer sand">Sand Layer</div>
              <div class="soil-layer dense-sand">Dense Sand</div>
              <div class="soil-layer rock">Rock Bed</div>
            </div>
            
            <!-- Pile Column, height based on current penetration percentage (32.4m / 50.0m = 64.8%) -->
            <div class="physical-pile" [style.height.%]="(state.currentDepth / 50) * 100"></div>
            <!-- Pulse ripple at pile tip -->
            <div class="pile-tip-pulse" [style.top.%]="(state.currentDepth / 50) * 100"></div>
          </div>

          <!-- Quick Stats Overlay Inside Well -->
          <div class="current-penetration-badge" [style.top.%]="Math.min(55, ((state.currentDepth / 50) * 100) - 10)">
            <span class="badge-lbl">PENETRATION</span>
            <span class="badge-val">{{ state.currentDepth }} m</span>
            <span class="badge-lbl" style="margin-top: 4px;">TARGET</span>
            <span class="badge-val" style="color: #ffffff; font-size: 0.75rem;">{{ state.targetDepth }} m</span>
          </div>
        </div>

        <!-- Analytics Metrics -->
        <div class="metric-list">
          <div class="metric-row">
            <span class="metric-row-label">Penetration per Blow</span>
            <span class="metric-row-value">{{ state.penetrationRate }} mm/blow</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Allowable Compression Stress</span>
            <span class="metric-row-value">62% (Good)</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Allowable Tension Stress</span>
            <span class="metric-row-value">28% (Safe)</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Allowable Bending Stress</span>
            <span class="metric-row-value">31% (Safe)</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Pile Verticality Alignment</span>
            <span class="metric-row-value" style="color: var(--app-accent-green);">0.6° (Good)</span>
          </div>
        </div>

        <!-- Action Button -->
        <ion-button expand="block" fill="outline" class="industrial-btn" (click)="exportReport()">
          <lucide-icon name="download" style="width: 14px; height: 14px; margin-right: 6px;"></lucide-icon>
          Export Penetration Report (PDF)
        </ion-button>
      </div>
    </div>

    <!-- Panel 3: Weather & Vessel Motion -->
    <div class="industrial-card">
      <div class="panel-header-line">
        <h3 class="panel-title">
          <lucide-icon name="cloud-rain" class="panel-icon"></lucide-icon>
          Weather & Vessel Motion
        </h3>
        <span class="status-badge-inline live">Aeolus telemetry</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 14px;">
        <!-- Weather Info Box -->
        <div class="grid-2">
          <div class="metric-row" style="flex-direction: column; align-items: flex-start; padding: 10px;">
            <span class="kpi-label">Wind Speed</span>
            <span class="kpi-value" style="font-size: 1.25rem;">{{ state.windSpeed }} m/s</span>
            <span class="kpi-subtext">Dir: {{ state.windDirection }}</span>
          </div>

          <div class="metric-row" style="flex-direction: column; align-items: flex-start; padding: 10px;">
            <span class="kpi-label">Significant Wave</span>
            <span class="kpi-value" style="font-size: 1.25rem;">{{ state.waveHeight }} m</span>
            <span class="kpi-subtext">Current: {{ state.currentSpeed }} m/s</span>
          </div>
        </div>

        <!-- Vessel Motion Coordinates -->
        <div class="metric-list">
          <div class="metric-row">
            <span class="metric-row-label">Vessel Heave (Vertical)</span>
            <span class="metric-row-value">{{ state.heave }} m</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Vessel Roll (Port/Stbd)</span>
            <span class="metric-row-value">{{ state.roll }} °</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Vessel Pitch (Bow/Stern)</span>
            <span class="metric-row-value">{{ state.pitch }} °</span>
          </div>
        </div>

        <!-- Weather Window Indicator -->
        <div class="metric-row" style="background: rgba(0, 255, 157, 0.04); border-color: rgba(0, 255, 157, 0.15); padding: 12px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="pulse-dot green"></span>
            <span style="font-size: 0.75rem; font-weight: 700; color: var(--app-accent-green); font-family: 'Space Grotesk', sans-serif;">PILING WINDOW OK</span>
          </div>
          <span style="font-size: 0.75rem; color: var(--app-text-muted);">Stable for next 6 hours</span>
        </div>

        <!-- Action Buttons -->
        <div class="grid-2">
          <ion-button expand="block" fill="outline" class="industrial-btn" (click)="refreshWeather()">
            <lucide-icon name="refresh-cw" style="width: 14px; height: 14px; margin-right: 6px;"></lucide-icon>
            Fetch Live
          </ion-button>
          <ion-button expand="block" fill="solid" class="industrial-btn-solid" (click)="openWeatherForecastModal()">
            <lucide-icon name="calendar" style="width: 14px; height: 14px; margin-right: 6px;"></lucide-icon>
            6h Forecast
          </ion-button>
        </div>
      </div>
    </div>

  </div>

  <!-- Bottom Bento Row (3-columns) -->
  <div class="dashboard-grid">

    <!-- Panel 4: AI Recommendations -->
    <div class="industrial-card" style="border-color: var(--app-card-border);">
      <div class="panel-header-line">
        <h3 class="panel-title" style="color: var(--app-accent-cyan);">
          <lucide-icon name="compass" class="panel-icon" style="color: var(--app-accent-cyan);"></lucide-icon>
          AI Decision Support
        </h3>
        <span class="status-badge-inline live" style="background: rgba(0, 240, 255, 0.1); border-color: var(--app-accent-cyan); color: var(--app-accent-cyan);">Core active</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 14px;">
        <!-- AI recommendation spark header -->
        <div class="ai-spark-header">
          <lucide-icon name="compass" class="ai-spark-logo"></lucide-icon>
          <span class="ai-spark-title">Dynamic Recommendation Engine</span>
        </div>

        <div class="ai-reasoning-box">
          Based on <strong>Medium Dense Sand</strong> and wave heave of <strong>{{ state.heave }}m</strong>, the AI recommends reducing stroke energy slightly to avoid tension overstress.
        </div>

        <!-- Recommendation metrics -->
        <div class="metric-list">
          <div class="metric-row">
            <span class="metric-row-label">Recommended Energy Setting</span>
            <span class="metric-row-value" style="color: var(--app-accent-cyan);">{{ state.recommendedEnergy }}%</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Recommended Blow Rate</span>
            <span class="metric-row-value" style="color: var(--app-accent-cyan);">{{ state.recommendedBlowRate }} bpm</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Expected Soil Behaviour</span>
            <span class="metric-row-value">{{ state.soilBehaviour }}</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Recommendation Confidence</span>
            <span class="metric-row-value" style="color: var(--app-accent-green);">{{ state.aiConfidence }}%</span>
          </div>
        </div>

        <!-- Actions -->
        <div class="grid-2" *ngIf="showRecommendation">
          <ion-button expand="block" fill="outline" class="industrial-btn" (click)="dismissRecommendation()">
            Dismiss
          </ion-button>
          <ion-button expand="block" fill="solid" class="industrial-btn-solid" (click)="applyRecommendation()">
            Apply AI Settings
          </ion-button>
        </div>
        <div *ngIf="!showRecommendation" style="text-align: center; font-size: 0.75rem; color: var(--app-text-muted); padding: 8px;">
          Recommendation implemented or dismissed.
          <ion-button size="small" fill="clear" (click)="resetRecommendation()" class="industrial-btn" style="height: auto; margin-left: 8px;">Restore</ion-button>
        </div>
      </div>
    </div>

    <!-- Panel 5: Risk Assessment Matrix -->
    <div class="industrial-card">
      <div class="panel-header-line">
        <h3 class="panel-title">
          <lucide-icon name="shield" class="panel-icon"></lucide-icon>
          Risk Matrix
        </h3>
        <span class="status-badge-inline live">Scanning...</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 14px;">
        <!-- Risk grid list -->
        <div class="risk-grid">
          <div *ngFor="let risk of risks" class="risk-row" (click)="viewRiskMitigation(risk)">
            <span class="risk-name">{{ risk.name }}</span>
            <span class="risk-badge" [ngClass]="risk.level.toLowerCase()">{{ risk.level }}</span>
          </div>
        </div>

        <div class="metric-row" style="padding: 10px; background: rgba(255, 255, 255, 0.01);">
          <span style="font-size: 0.7rem; color: var(--app-text-muted);">
            All risk categories are within tolerable thresholds. Continuously logging.
          </span>
        </div>

        <!-- Actions -->
        <ion-button expand="block" fill="solid" class="industrial-btn-solid" (click)="runRiskAnalysis()">
          <lucide-icon name="activity" style="width: 14px; height: 14px; margin-right: 6px;" [class.pulsing-indicator]="isScanningRisks"></lucide-icon>
          {{ isScanningRisks ? 'Scanning Matrix...' : 'Run Risk Analysis Scan' }}
        </ion-button>
      </div>
    </div>

    <!-- Panel 6: Installation Progress -->
    <div class="industrial-card">
      <div class="panel-header-line">
        <h3 class="panel-title">
          <lucide-icon name="activity" class="panel-icon"></lucide-icon>
          Driving Progress
        </h3>
        <span class="status-badge-inline live">Calculating ETA</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 14px;">
        <!-- Large Circular Progress Indicator -->
        <div class="gauge-container">
          <!-- Math: Target 45.0m, Current 32.4m -> 72% progress.
               72% of 408 stroke-dasharray = 293.76, offset is 408 - 293.76 = 114.24 -->
          <div class="circular-gauge">
            <svg viewBox="0 0 150 150">
              <circle class="bg-circle" cx="75" cy="75" r="65"></circle>
              <!-- Dash offset depends on dynamic depth progress: (1 - (depth/target)) * 408 -->
              <circle class="fg-circle cyan" cx="75" cy="75" r="65" [attr.stroke-dashoffset]="(1 - (state.currentDepth / state.targetDepth)) * 408"></circle>
            </svg>
            <div class="gauge-text-wrapper">
              <span class="gauge-number" style="color: var(--app-accent-cyan);">
                {{ Math.round((state.currentDepth / state.targetDepth) * 100) }}%
              </span>
              <span class="gauge-unit">Progress</span>
            </div>
          </div>
        </div>

        <!-- Remaining Metrics -->
        <div class="metric-list">
          <div class="metric-row">
            <span class="metric-row-label">Depth Remaining</span>
            <span class="metric-row-value">{{ Math.round((state.targetDepth - state.currentDepth) * 10) / 10 }} m</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Est. Completion Time</span>
            <span class="metric-row-value">2.6 hrs</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Est. Blows Remaining</span>
            <span class="metric-row-value">~680</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Start Time</span>
            <span class="metric-row-value">07:45 UTC</span>
          </div>
          <div class="metric-row">
            <span class="metric-row-label">Monopile ID</span>
            <span class="metric-row-value">{{ state.pileId }}</span>
          </div>
        </div>

        <!-- Master Operations Toggles -->
        <div class="grid-2">
          <ion-button expand="block" [color]="state.isOperating ? 'warning' : 'success'" fill="solid" class="industrial-btn" (click)="toggleOperation()" style="height: 32px; --color: #ffffff;">
            <lucide-icon [name]="state.isOperating ? 'pause' : 'play'" style="width: 14px; height: 14px; margin-right: 6px;"></lucide-icon>
            {{ state.isOperating ? 'Pause Driving' : 'Resume Piling' }}
          </ion-button>
          <ion-button expand="block" color="danger" fill="solid" class="industrial-btn-danger" (click)="triggerEmergencyStop()">
            <lucide-icon name="alert-triangle" style="width: 14px; height: 14px; margin-right: 6px;"></lucide-icon>
            EMERGENCY STOP
          </ion-button>
        </div>
      </div>
    </div>

  </div>

  <!-- Quick Insights Scrolling Footer -->
  <div class="quick-insights-footer">
    <div class="quick-insights-lbl">Quick Insights</div>
    <div class="insights-carousel">
      <div class="insights-list">
        <div class="insight-item">
          <span class="insight-dot"></span>
          <span>Optimal penetration rate achieved in current silt layers.</span>
        </div>
        <div class="insight-item">
          <span class="insight-dot"></span>
          <span>Hammer lubrication and pressure levels are perfect.</span>
        </div>
        <div class="insight-item">
          <span class="insight-dot"></span>
          <span>Weather conditions are favorable. Forecast remains safe for lifting.</span>
        </div>
        <div class="insight-item">
          <span class="insight-dot"></span>
          <span>Continuous dual-transponder monitoring active with 99.8% uptime.</span>
        </div>
        <!-- Duplicate for loop seamless transition -->
        <div class="insight-item">
          <span class="insight-dot"></span>
          <span>Optimal penetration rate achieved in current silt layers.</span>
        </div>
        <div class="insight-item">
          <span class="insight-dot"></span>
          <span>Hammer lubrication and pressure levels are perfect.</span>
        </div>
      </div>
    </div>
  </div>
</div>
</ion-content>`,D=".dashboard-container{max-width:1600px;margin:0 auto}",I=`
    .weather-modal-container {
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
      width: 28px;
      height: 28px;
      color: var(--app-accent-cyan);
    }

    .modal-header h2 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.25rem;
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
    }

    .forecast-section {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 24px;
    }

    .forecast-card {
      background: var(--app-card-bg);
      border: 1px solid var(--app-card-border);
      border-radius: 8px;
      padding: 16px;
      backdrop-filter: blur(8px);
    }

    .forecast-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--app-border);
    }

    .forecast-time {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--app-text);
    }

    .forecast-status {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 4px;
      text-transform: uppercase;
    }

    .forecast-status.good {
      background: rgba(0, 255, 157, 0.1);
      color: var(--app-accent-green);
      border: 1px solid var(--app-accent-green);
    }

    .forecast-status.caution {
      background: rgba(255, 176, 0, 0.1);
      color: var(--app-accent-amber);
      border: 1px solid var(--app-accent-amber);
    }

    .forecast-details {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .detail-row {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.85rem;
      color: var(--app-text-muted);
    }

    .detail-icon {
      width: 16px;
      height: 16px;
      color: var(--app-accent-cyan);
    }

    .ai-assessment {
      background: rgba(0, 240, 255, 0.05);
      border-left: 3px solid var(--app-accent-cyan);
      padding: 16px;
      border-radius: 0 8px 8px 0;
    }

    .ai-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }

    .ai-icon {
      width: 18px;
      height: 18px;
      color: var(--app-accent-cyan);
      animation: ai-glow 2s ease-in-out infinite alternate;
    }

    @keyframes ai-glow {
      0% { filter: drop-shadow(0 0 2px var(--app-accent-cyan)); }
      100% { filter: drop-shadow(0 0 8px var(--app-accent-cyan)); }
    }

    .ai-header strong {
      color: var(--app-text);
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.9rem;
    }

    .ai-text {
      font-size: 0.85rem;
      line-height: 1.6;
      color: var(--app-text-muted);
      margin: 0;
    }

    .modal-footer {
      padding: 20px;
      border-top: 1px solid var(--app-border);
      display: flex;
      justify-content: flex-end;
    }

    .acknowledge-btn {
      background: var(--app-accent-cyan);
      color: #0b1120;
      border: none;
      padding: 12px 24px;
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
  `;var A=function(i,e,n,s){var t=arguments.length,a=t<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,n,s);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(a=(t<3?r(a):t>3?r(e,n,a):r(e,n))||a);return t>3&&a&&Object.defineProperty(e,n,a),a},E=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)},m;let f=(m=class{constructor(e){this.modalController=e}dismiss(){this.modalController.dismiss()}},m.ctorParameters=()=>[{type:o}],m);f=A([v({selector:"app-weather-forecast-modal",standalone:!0,imports:[g,h],template:`
    <div class="weather-modal-container">
      <div class="modal-header">
        <div class="modal-title-wrapper">
          <lucide-icon name="cloud-rain" class="modal-icon"></lucide-icon>
          <h2>6-Hour Weather Window Forecast</h2>
        </div>
        <button class="close-btn" (click)="dismiss()">
          <lucide-icon name="x"></lucide-icon>
        </button>
      </div>

      <div class="modal-content">
        <div class="forecast-section">
          <div class="forecast-card">
            <div class="forecast-header">
              <span class="forecast-time">2-Hour Forecast</span>
              <span class="forecast-status good">GOOD</span>
            </div>
            <div class="forecast-details">
              <div class="detail-row">
                <lucide-icon name="wind" class="detail-icon"></lucide-icon>
                <span>Wind: 12 m/s</span>
              </div>
              <div class="detail-row">
                <lucide-icon name="waves" class="detail-icon"></lucide-icon>
                <span>Waves: 1.3 m</span>
              </div>
            </div>
          </div>

          <div class="forecast-card">
            <div class="forecast-header">
              <span class="forecast-time">4-Hour Forecast</span>
              <span class="forecast-status good">GOOD</span>
            </div>
            <div class="forecast-details">
              <div class="detail-row">
                <lucide-icon name="wind" class="detail-icon"></lucide-icon>
                <span>Wind: 13 m/s</span>
              </div>
              <div class="detail-row">
                <lucide-icon name="waves" class="detail-icon"></lucide-icon>
                <span>Waves: 1.4 m</span>
              </div>
            </div>
          </div>

          <div class="forecast-card">
            <div class="forecast-header">
              <span class="forecast-time">6-Hour Forecast</span>
              <span class="forecast-status caution">GOOD - CAUTION</span>
            </div>
            <div class="forecast-details">
              <div class="detail-row">
                <lucide-icon name="wind" class="detail-icon"></lucide-icon>
                <span>Wind: 14 m/s</span>
              </div>
              <div class="detail-row">
                <lucide-icon name="waves" class="detail-icon"></lucide-icon>
                <span>Waves: 1.6 m</span>
              </div>
            </div>
          </div>
        </div>

        <div class="ai-assessment">
          <div class="ai-header">
            <lucide-icon name="brain" class="ai-icon"></lucide-icon>
            <strong>AI Assessment</strong>
          </div>
          <p class="ai-text">
            Piling operations can continue safely within the next 4 hours. 
            Gusts may rise after 18:00.
          </p>
        </div>
      </div>

      <div class="modal-footer">
        <button class="acknowledge-btn" (click)="dismiss()">
          Acknowledge
        </button>
      </div>
    </div>
  `,styles:[I]}),E("design:paramtypes",[o])],f);const O=`
    .hammer-modal-container {
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
      width: 28px;
      height: 28px;
      color: var(--app-accent-cyan);
    }

    .modal-header h2 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.25rem;
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
    }

    .hammer-specs-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-bottom: 20px;
    }

    @media (max-width: 600px) {
      .hammer-specs-grid {
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
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--app-text);
    }

    .spec-value.energy-value {
      color: var(--app-accent-green);
    }

    .spec-unit {
      font-size: 0.85rem;
      color: var(--app-text-muted);
      font-weight: 500;
    }

    .spec-bar {
      width: 100%;
      height: 4px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 2px;
      margin-top: 8px;
      overflow: hidden;
    }

    .spec-bar-fill {
      height: 100%;
      border-radius: 2px;
      transition: width 0.5s ease;
    }

    .spec-bar-fill.energy-bar {
      background: var(--app-accent-green);
      box-shadow: 0 0 6px var(--app-accent-green);
    }

    .spec-bar-fill.pressure-bar {
      background: var(--app-accent-cyan);
      box-shadow: 0 0 6px var(--app-accent-cyan);
    }

    .spec-bar-fill.temp-bar {
      background: var(--app-accent-amber);
      box-shadow: 0 0 6px var(--app-accent-amber);
    }

    .status-banner {
      display: flex;
      align-items: center;
      gap: 12px;
      background: rgba(0, 255, 157, 0.08);
      border: 1px solid var(--app-accent-green);
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 20px;
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

    .technical-notes {
      background: var(--app-card-bg);
      border: 1px solid var(--app-card-border);
      border-radius: 8px;
      padding: 16px;
    }

    .technical-notes h3 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--app-text);
      margin: 0 0 12px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .technical-notes ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .technical-notes li {
      font-size: 0.8rem;
      color: var(--app-text-muted);
      padding: 6px 0;
      padding-left: 20px;
      position: relative;
      border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    }

    .technical-notes li:last-child {
      border-bottom: none;
    }

    .technical-notes li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--app-accent-cyan);
      font-weight: bold;
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
      padding: 12px 24px;
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
  `;var _=function(i,e,n,s){var t=arguments.length,a=t<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,n,s);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(a=(t<3?r(a):t>3?r(e,n,a):r(e,n))||a);return t>3&&a&&Object.defineProperty(e,n,a),a},M=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)},d;let b=(d=class{constructor(e){this.modalController=e,this.energy=0,this.blowRate=0,this.pressure=0,this.temperature=0}dismiss(){this.modalController.dismiss()}},d.ctorParameters=()=>[{type:o}],d.propDecorators={energy:[{type:c}],blowRate:[{type:c}],pressure:[{type:c}],temperature:[{type:c}]},d);b=_([v({selector:"app-hammer-details-modal",standalone:!0,imports:[g,h],template:`
    <div class="hammer-modal-container">
      <div class="modal-header">
        <div class="modal-title-wrapper">
          <lucide-icon name="cog" class="modal-icon"></lucide-icon>
          <h2>Hammer Performance Details</h2>
        </div>
        <button class="close-btn" (click)="dismiss()">
          <lucide-icon name="x"></lucide-icon>
        </button>
      </div>

      <div class="modal-content">
        <div class="hammer-specs-grid">
          <div class="spec-card">
            <div class="spec-header">
              <lucide-icon name="hammer" class="spec-icon"></lucide-icon>
              <span class="spec-label">Model</span>
            </div>
            <div class="spec-value">IHC-150</div>
          </div>

          <div class="spec-card">
            <div class="spec-header">
              <lucide-icon name="zap" class="spec-icon"></lucide-icon>
              <span class="spec-label">Current Energy</span>
            </div>
            <div class="spec-value energy-value">{{ energy }}%</div>
            <div class="spec-bar">
              <div class="spec-bar-fill energy-bar" [style.width.%]="energy"></div>
            </div>
          </div>

          <div class="spec-card">
            <div class="spec-header">
              <lucide-icon name="activity" class="spec-icon"></lucide-icon>
              <span class="spec-label">Blow Rate</span>
            </div>
            <div class="spec-value">{{ blowRate }} <span class="spec-unit">bpm</span></div>
          </div>

          <div class="spec-card">
            <div class="spec-header">
              <lucide-icon name="gauge" class="spec-icon"></lucide-icon>
              <span class="spec-label">Hydraulic Pressure</span>
            </div>
            <div class="spec-value">{{ pressure }} <span class="spec-unit">bar</span></div>
            <div class="spec-bar">
              <div class="spec-bar-fill pressure-bar" [style.width.%]="(pressure / 250) * 100"></div>
            </div>
          </div>

          <div class="spec-card">
            <div class="spec-header">
              <lucide-icon name="thermometer" class="spec-icon"></lucide-icon>
              <span class="spec-label">Oil Temperature</span>
            </div>
            <div class="spec-value">{{ temperature }} <span class="spec-unit">°C</span></div>
            <div class="spec-bar">
              <div class="spec-bar-fill temp-bar" [style.width.%]="(temperature / 80) * 100"></div>
            </div>
          </div>
        </div>

        <div class="status-banner">
          <lucide-icon name="check-circle-2" class="status-icon"></lucide-icon>
          <div class="status-text">
            <strong>System Status</strong>
            <span>Operating within optimal parameters</span>
          </div>
        </div>

        <div class="technical-notes">
          <h3>Technical Notes</h3>
          <ul>
            <li>Hydraulic cooling loops operating at 100% capacity</li>
            <li>Anvil cushion condition: 72% (within acceptable limits)</li>
            <li>Stroke count: 1,245 blows logged</li>
            <li>Next scheduled maintenance: 18 hours operational remaining</li>
          </ul>
        </div>
      </div>

      <div class="modal-footer">
        <button class="close-modal-btn" (click)="dismiss()">
          Close
        </button>
      </div>
    </div>
  `,styles:[O]}),M("design:paramtypes",[o])],b);const H=`
    .kpi-modal-container {
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

    .kpi-detail-box {
      background: var(--app-card-bg);
      border: 1px solid var(--app-card-border);
      border-radius: 8px;
      padding: 20px;
      backdrop-filter: blur(8px);
    }

    .kpi-message {
      margin: 0;
      font-size: 0.9rem;
      line-height: 1.7;
      color: var(--app-text);
      font-family: 'Inter', sans-serif;
    }

    .kpi-status-footer {
      display: flex;
      align-items: center;
      gap: 10px;
      background: rgba(0, 240, 255, 0.05);
      border: 1px solid rgba(0, 240, 255, 0.2);
      border-radius: 6px;
      padding: 12px;
      font-size: 0.8rem;
      color: var(--app-accent-cyan);
      font-family: 'JetBrains Mono', monospace;
    }

    .status-icon {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
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
  `;var G=function(i,e,n,s){var t=arguments.length,a=t<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,n,s);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(a=(t<3?r(a):t>3?r(e,n,a):r(e,n))||a);return t>3&&a&&Object.defineProperty(e,n,a),a},z=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)},p;let x=(p=class{constructor(e){this.modalController=e,this.title="",this.message="",this.type=""}getIcon(){return{efficiency:"trending-up",health:"heart-pulse",safety:"shield-check",confidence:"check-circle-2",phase:"layers"}[this.type]||"activity"}dismiss(){this.modalController.dismiss()}},p.ctorParameters=()=>[{type:o}],p.propDecorators={title:[{type:c}],message:[{type:c}],type:[{type:c}]},p);x=G([v({selector:"app-kpi-detail-modal",standalone:!0,imports:[g,h],template:`
    <div class="kpi-modal-container">
      <div class="modal-header">
        <div class="modal-title-wrapper">
          <lucide-icon [name]="getIcon()" class="modal-icon"></lucide-icon>
          <h2>{{ title }}</h2>
        </div>
        <button class="close-btn" (click)="dismiss()">
          <lucide-icon name="x"></lucide-icon>
        </button>
      </div>

      <div class="modal-content">
        <div class="kpi-detail-box">
          <p class="kpi-message">{{ message }}</p>
        </div>

        <div class="kpi-status-footer">
          <lucide-icon name="check-circle-2" class="status-icon"></lucide-icon>
          <span>Real-time telemetry verified. All parameters within operational thresholds.</span>
        </div>
      </div>

      <div class="modal-footer">
        <button class="close-modal-btn" (click)="dismiss()">Close</button>
      </div>
    </div>
  `,styles:[H]}),z("design:paramtypes",[o])],x);var W=function(i,e,n,s){var t=arguments.length,a=t<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,n,s);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(a=(t<3?r(a):t>3?r(e,n,a):r(e,n))||a);return t>3&&a&&Object.defineProperty(e,n,a),a},F=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)},u;let y=(u=class{constructor(e,n,s,t){this.dataService=e,this.alertController=n,this.toastController=s,this.modalController=t,this.Math=Math,this.autoRefresh=!0,this.activeTimeFilter="1h",this.timeFilters=["1h","6h","24h"],this.showRecommendation=!0,this.isCalibrating=!1,this.isScanningRisks=!1,this.risks=[{name:"Pile Overstress Risk",level:"Low",mitigation:"Maintain current energy level under 85%. Blow rate remains safe."},{name:"Misalignment Risk",level:"Low",mitigation:"Dual-axis inclinometers are calibrated. Drift is under 0.6 degrees."},{name:"Hammer Temp Risk",level:"Low",mitigation:"Hydraulic cooling loops are operating at 100% capacity."},{name:"Weather Wind Risk",level:"Medium",mitigation:"Monitor gusts. If sustained wind exceeds 15 m/s, stand-by protocols will trigger."}]}ngOnInit(){this.stateSub=this.dataService.getState().subscribe(e=>{this.state=e})}ngOnDestroy(){this.stateSub&&this.stateSub.unsubscribe()}toggleAutoRefresh(){this.autoRefresh=!this.autoRefresh,this.dataService.setAutoRefresh(this.autoRefresh),this.showToast(this.autoRefresh?"Telemetry stream resumed.":"Telemetry stream paused.")}setTimeFilter(e){this.activeTimeFilter=e,this.showToast(`Historical filter updated to: ${e}`)}async openKpiDetail(e){let n="",s="";switch(e){case"efficiency":n="Lifting & Driving Efficiency",s="The pile driving cycle is running 18% faster than the initial project plan. Soil dense sand transition went smoother than expected with the IHC-150 hammer configured at 82% energy.";break;case"health":n="System Health Scan",s=`All hydraulics, sensor, and mechanical loops are reporting excellent values. Current overall score is ${this.state.systemHealth}%. Anvil cushion is well within acceptable limits.`;break;case"safety":n="Safety Parameter Scan",s=`Offshore safety index is at ${this.state.safetyIndex}%. Safe operating limit for wind is 15.0 m/s (Current: ${this.state.windSpeed} m/s). Significant wave limit is 2.0 m (Current: ${this.state.waveHeight} m).`;break;case"confidence":n="Dual-Sensor Consensus Scan",s="The consensus quality index is High. Telemetry is verified via GPS verticality check and secondary acoustic sensor checks on the seabed frame.";break;case"phase":n="Monopile Driving Phase",s=`Current Phase: ${this.state.installationPhase}. The monopile has penetrated the seabed silt and sand layer, heading into dense sand. Stroke count: ${this.state.blowCount}.`;break}await(await this.modalController.create({component:x,componentProps:{title:n,message:s,type:e},cssClass:"standard-centered-modal",animated:!0,showBackdrop:!0})).present()}async openHammerDetailsModal(){await(await this.modalController.create({component:b,componentProps:{energy:this.state.energyDelivered,blowRate:this.state.blowRate,pressure:this.state.hydraulicPressure,temperature:this.state.oilTemperature},cssClass:"hammer-details-modal"})).present()}calibrateHammer(){this.isCalibrating||(this.isCalibrating=!0,this.showToast("Initiating IHC-150 hammer auto-calibration..."),setTimeout(()=>{this.isCalibrating=!1,this.dataService.calibrateHammer(),this.showToast("Calibration cycle completed. System parameters adjusted.")},2e3))}exportReport(){this.showToast("Generating penetration & soil resistance report (PDF)..."),setTimeout(()=>{this.showToast('PDF Report "IQIP_OVERWATCH_P12-J04.pdf" downloaded successfully!')},1500)}refreshWeather(){this.dataService.triggerWeatherRefresh(),this.showToast("Fetching latest Aeolus telemetry data...")}async openWeatherForecastModal(){await(await this.modalController.create({component:f,cssClass:"weather-forecast-modal",handle:!1})).present()}applyRecommendation(){this.dataService.applyAiRecommendation(),this.showRecommendation=!1,this.showToast("AI recommendations applied to hammer controller.")}dismissRecommendation(){this.showRecommendation=!1,this.showToast("AI recommendation dismissed.")}resetRecommendation(){this.showRecommendation=!0,this.showToast("AI recommendations restored.")}async viewRiskMitigation(e){await(await this.alertController.create({header:e.name,subHeader:`Current Risk Level: ${e.level}`,message:`<strong>Mitigation Protocol:</strong><br><br>${e.mitigation}`,buttons:["Close"]})).present()}runRiskAnalysis(){this.isScanningRisks||(this.isScanningRisks=!0,this.showToast("Scanning soil resistance, wind gust velocity, and structural stress loads..."),setTimeout(()=>{this.isScanningRisks=!1,this.showToast("Comprehensive risk scan completed. No anomalies detected.")},2e3))}toggleOperation(){this.dataService.toggleOperation();const e=this.state.isOperating?"paused":"resumed";this.showToast(`Piling operations ${e}.`)}async triggerEmergencyStop(){await(await this.alertController.create({header:"🚨 CRITICAL WARNING 🚨",subHeader:"EMERGENCY SHUTDOWN PROMPTED",message:"Are you absolutely sure you want to stop the IHC-150 hammer and freeze all hydraulic lifters immediately? This action logs directly to maritime telemetry.",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary"},{text:"CONFIRM EMERGENCY STOP",cssClass:"danger-text",handler:()=>{this.confirmEmergencyStop()}}]})).present()}async confirmEmergencyStop(){await(await this.alertController.create({header:"️ FINAL DOUBLE CONFIRMATION ⚠️",message:"Entering emergency safety mode. Crane locks and cushion valves will lock. Confirm final command execution.",buttons:[{text:"Abort Stop",role:"cancel"},{text:"EXECUTE HALT NOW",cssClass:"danger-text",handler:()=>{this.dataService.setOperatingState(!1),this.showToast("🚨 EMERGENCY HALT EXECUTED! All operations halted.")}}]})).present()}async showToast(e){await(await this.toastController.create({message:e,duration:2500,position:"bottom",color:"dark"})).present()}},u.ctorParameters=()=>[{type:w},{type:k},{type:R},{type:o}],u);y=W([v({selector:"app-dashboard",standalone:!0,imports:[C,g,S,P,h],template:T,styles:[D]}),F("design:paramtypes",[w,k,R,o])],y);export{y as DashboardPage};
