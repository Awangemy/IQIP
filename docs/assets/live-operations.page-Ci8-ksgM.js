import{M as p,I as g,C as v,a as f,L as h,D as y,A as x,T as w,b as C,F as k,d as S,e as R,f as A,c as L}from"./index-xrJjlaNS.js";const T=`<ion-content class="main-page-content" scrollY="true" forceOverscroll="false">
<div class="dashboard-container">
  <!-- Top Command Header -->
  <div class="flex-between" style="margin-bottom: 12px; border-bottom: 1px solid var(--app-border); padding-bottom: 10px;">
    <h2 class="panel-title" style="font-size: 1.1rem; letter-spacing: 1.5px;">
      <lucide-icon name="video" class="panel-icon"></lucide-icon>
      Live Marine Operations Monitor
    </h2>
    <div class="panel-header-right">
      <span class="status-badge-inline live" style="background: rgba(0, 255, 157, 0.1); border-color: var(--app-accent-green); color: var(--app-accent-green);">STREAM ENCRYPTED: AES-256</span>
    </div>
  </div>

  <!-- Top Page Tabs Segments and Full Screen Button -->
  <div class="flex-between" style="gap: 16px; margin-bottom: 16px;">
    <ion-segment [value]="activeLiveTab" (ionChange)="onLiveTabChange($event)" class="industrial-segment" style="flex: 1; margin-bottom: 0;">
      <ion-segment-button value="feed">
        <ion-label>LIVE CAMERA FEEDS</ion-label>
      </ion-segment-button>
      <ion-segment-button value="handling">
        <ion-label>HANDLING OVERVIEW</ion-label>
      </ion-segment-button>
      <ion-segment-button value="driving">
        <ion-label>PILE DRIVING CONTROL</ion-label>
      </ion-segment-button>
    </ion-segment>

    <ion-button size="small" fill="outline" class="industrial-btn" (click)="toggleFullScreenSim()">
      <lucide-icon name="eye" style="width: 14px; height: 14px; margin-right: 6px;"></lucide-icon>
      {{ isFullScreen ? 'Exit Full Screen' : 'Full Screen Grid' }}
    </ion-button>
  </div>

  <!-- Page Layout: Left Main Area, Right Sidebar Status & Telemetry -->
  <div style="display: grid; grid-template-columns: 2.3fr 1fr; gap: 16px; margin-bottom: 16px;">
    
    <!-- LEFT MAIN AREA (changes based on activeTab) -->
    <div style="display: flex; flex-direction: column; gap: 16px;">

      <!-- SUB-VIEW 1: Live Feeds -->
      <div *ngIf="activeLiveTab === 'feed'" class="grid-2" style="gap: 16px;">
        
        <!-- Camera 1: Handling Operations -->
        <div class="cam-container">
          <!-- Live Indicator & Recording Status -->
          <div class="cam-live-indicator">
            <span class="pulse-dot green"></span>
            <span>CAM 01 - DECK & CRANE</span>
          </div>
          <div *ngIf="isRecordingCam1" class="cam-rec-indicator">
            <span class="pulse-dot red" style="background-color: var(--app-accent-red); box-shadow: 0 0 6px var(--app-accent-red);"></span>
            <span>REC</span>
          </div>

          <!-- Video placeholder (using CSS styled container) -->
          <div class="cam-feed-placeholder" 
               [style.background-image]="'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop)'"
               [class.pulsing-indicator]="isFullScreen">
            <div class="cam-overlay-dark"></div>
            <div class="cam-crosshair"></div>
          </div>

          <!-- CAM Metadata Overlay -->
          <div class="cam-metadata">
            Lifting Object: Monopile Segment P12 <br>
            Current Weight: 28.5t | SWL: 60.0t <br>
            Status: Safe Lift Path
          </div>

          <!-- Camera Controls -->
          <div class="cam-controls">
            <ion-button fill="clear" class="cam-control-btn" (click)="takeScreenshot('CAM 01')" title="Take Screenshot">
              <lucide-icon name="download"></lucide-icon>
            </ion-button>
            <ion-button fill="clear" class="cam-control-btn" (click)="toggleRecordCam1()" [style.--color]="isRecordingCam1 ? 'var(--app-accent-red)' : '#ffffff'" title="Record Video">
              <lucide-icon name="video"></lucide-icon>
            </ion-button>
            <ion-button fill="clear" class="cam-control-btn" (click)="toggleAudio()" title="Toggle Mute">
              <lucide-icon [name]="isMuted ? 'bell' : 'volume-2'"></lucide-icon>
            </ion-button>
          </div>
        </div>

        <!-- Camera 2: Pile Driving Operations -->
        <div class="cam-container">
          <!-- Live Indicator & Recording Status -->
          <div class="cam-live-indicator">
            <span class="pulse-dot green"></span>
            <span>CAM 02 - IHC-150 HAMMER</span>
          </div>
          <div *ngIf="isRecordingCam2" class="cam-rec-indicator">
            <span class="pulse-dot red" style="background-color: var(--app-accent-red); box-shadow: 0 0 6px var(--app-accent-red);"></span>
            <span>REC</span>
          </div>

          <!-- Video placeholder (using CSS styled container) -->
          <div class="cam-feed-placeholder" 
               [style.background-image]="'url(https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop)'">
            <div class="cam-overlay-dark"></div>
            <div class="cam-crosshair"></div>
          </div>

          <!-- CAM Metadata Overlay -->
          <div class="cam-metadata">
            Hammer: IHC-150 Hydraulics <br>
            Energy Setting: {{ state.energyDelivered }}% | Blow Rate: {{ state.blowRate }} bpm <br>
            Status: {{ state.isOperating ? 'Driving active' : 'Halted' }}
          </div>

          <!-- Camera Controls -->
          <div class="cam-controls">
            <ion-button fill="clear" class="cam-control-btn" (click)="takeScreenshot('CAM 02')" title="Take Screenshot">
              <lucide-icon name="download"></lucide-icon>
            </ion-button>
            <ion-button fill="clear" class="cam-control-btn" (click)="toggleRecordCam2()" [style.--color]="isRecordingCam2 ? 'var(--app-accent-red)' : '#ffffff'" title="Record Video">
              <lucide-icon name="video"></lucide-icon>
            </ion-button>
            <ion-button fill="clear" class="cam-control-btn" (click)="toggleAudio()" title="Toggle Mute">
              <lucide-icon [name]="isMuted ? 'bell' : 'volume-2'"></lucide-icon>
            </ion-button>
          </div>
        </div>

      </div>

      <!-- SUB-VIEW 2: Handling Overview -->
      <div *ngIf="activeLiveTab === 'handling'" class="grid-2" style="gap: 16px;">
        
        <!-- Crane Controls and Details -->
        <div class="industrial-card">
          <div class="panel-header-line">
            <h3 class="panel-title"><lucide-icon name="settings" class="panel-icon"></lucide-icon> Crane & Lifting Controls</h3>
            <span class="status-badge-inline live" style="background: rgba(255, 176, 0, 0.1); border-color: var(--app-accent-amber); color: var(--app-accent-amber);">Manual Override Stand-by</span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 14px;">
            <!-- Handling details forms -->
            <div class="grid-2">
              <div class="form-group">
                <span class="form-label">Active Operation</span>
                <select class="form-select" [(ngModel)]="handlingOperation">
                  <option value="lowering">Lowering Pile Section</option>
                  <option value="uprighting">Uprighting Monopile</option>
                  <option value="positioning">Positioning in Seabed Frame</option>
                </select>
              </div>

              <div class="form-group">
                <span class="form-label">Lifting Plan ID</span>
                <select class="form-select" [(ngModel)]="liftPlan">
                  <option value="lp058">LP-2025-058 (Monopile Standard)</option>
                  <option value="lp059">LP-2025-059 (Heavy Sea Contingency)</option>
                </select>
              </div>
            </div>

            <div class="grid-2">
              <div class="form-group">
                <span class="form-label">Tag Line Tension Status</span>
                <span class="form-input" style="font-weight: 700; color: var(--app-accent-green);">CONNECTED (12.4 kN)</span>
              </div>
              <div class="form-group">
                <span class="form-label">Main Crane Active Radius</span>
                <span class="form-input">18.2 m (SWL: 60.0t)</span>
              </div>
            </div>

            <!-- Dynamic weight calculator -->
            <div style="background: rgba(0,0,0,0.15); border: 1px solid var(--app-border); border-radius: 4px; padding: 12px; margin-top: 4px;">
              <div class="form-label" style="margin-bottom: 8px;">DYNAMIC CRANE WEIGHT CALCULATOR</div>
              <div class="grid-3" style="align-items: center; gap: 8px;">
                <div class="form-group" style="margin-bottom: 0;">
                  <span class="form-label" style="font-size: 0.55rem;">Pile Steel (t)</span>
                  <input type="number" [(ngModel)]="calcPileWeight" (input)="recalculateCraneWeight()" class="form-input" style="padding: 4px 6px; font-size: 0.75rem;">
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                  <span class="form-label" style="font-size: 0.55rem;">Rigging & Hooks (t)</span>
                  <input type="number" [(ngModel)]="calcHookWeight" (input)="recalculateCraneWeight()" class="form-input" style="padding: 4px 6px; font-size: 0.75rem;">
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                  <span class="form-label" style="font-size: 0.55rem;">Calculated Load</span>
                  <span class="form-input" style="padding: 4px 6px; font-size: 0.75rem; font-weight: 700; color: var(--app-accent-cyan);">
                    {{ calcTotalWeight }} t ({{ Math.round((calcTotalWeight/60)*100) }}%)
                  </span>
                </div>
              </div>
            </div>

            <!-- Crane control panel simulation buttons -->
            <div class="form-label" style="margin-bottom: -4px; margin-top: 6px;">CO-ORDINATE CRANE COMMAND PULSER</div>
            <div class="grid-3">
              <ion-button fill="outline" class="industrial-btn" (click)="craneCommand('HOIST UP')">Hoist Up</ion-button>
              <ion-button fill="outline" class="industrial-btn" (click)="craneCommand('SLEW LEFT')">Slew Left</ion-button>
              <ion-button fill="outline" class="industrial-btn" (click)="craneCommand('LUFF IN')">Luff In</ion-button>
            </div>
            <div class="grid-3" style="margin-top: -6px;">
              <ion-button fill="outline" class="industrial-btn" (click)="craneCommand('HOIST DOWN')">Hoist Down</ion-button>
              <ion-button fill="outline" class="industrial-btn" (click)="craneCommand('SLEW RIGHT')">Slew Right</ion-button>
              <ion-button fill="outline" class="industrial-btn" (click)="craneCommand('LUFF OUT')">Luff Out</ion-button>
            </div>

            <div class="grid-2" style="margin-top: 6px;">
              <ion-button expand="block" fill="solid" class="industrial-btn-solid" (click)="startCraneSequence()">
                <lucide-icon name="play" style="width: 14px; height: 14px; margin-right: 6px;" [class.pulsing-indicator]="isCraneMoving"></lucide-icon>
                {{ isCraneMoving ? 'LIFTING SEQUENCE...' : 'Start Lift Sequence' }}
              </ion-button>
              <ion-button expand="block" fill="solid" class="industrial-btn-danger" (click)="emergencyStopCrane()">
                CRANE HALT
              </ion-button>
            </div>
          </div>
        </div>

        <!-- AI Safety Checklist -->
        <div class="industrial-card">
          <div class="panel-header-line">
            <h3 class="panel-title"><lucide-icon name="shield" class="panel-icon"></lucide-icon> AI Lifting Safety Check</h3>
            <span class="status-badge-inline live" [style.background]="getSafetyBadgeBg()" [style.color]="getSafetyBadgeColor()">
              {{ getSafetyOverallStatus() }}
            </span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 14px;">
            <div class="ai-reasoning-box">
              AI computer vision and deck laser telemetry continuously evaluate key safety markers. Uncheck items to simulate deck stress anomalies.
            </div>

            <!-- Checklist with working checkboxes -->
            <div style="display: flex; flex-direction: column; gap: 10px; background: rgba(0,0,0,0.1); padding: 12px; border-radius: 4px;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <label style="display: flex; align-items: center; gap: 10px; font-size: 0.8rem; cursor: pointer;">
                  <input type="checkbox" [(ngModel)]="chkPathClear" (change)="checkSafetyStatus()" style="accent-color: var(--app-accent-cyan);">
                  <span>Lift Path Clearance (Acoustic Frame Clear)</span>
                </label>
                <span style="font-size: 0.7rem; font-weight: 700; font-family: 'JetBrains Mono', monospace;" [style.color]="chkPathClear ? 'var(--app-accent-green)' : 'var(--app-accent-red)'">
                  {{ chkPathClear ? 'CLEAR' : 'BLOCKED' }}
                </span>
              </div>

              <div style="display: flex; align-items: center; justify-content: space-between;">
                <label style="display: flex; align-items: center; gap: 10px; font-size: 0.8rem; cursor: pointer;">
                  <input type="checkbox" [(ngModel)]="chkPersonnelClear" (change)="checkSafetyStatus()" style="accent-color: var(--app-accent-cyan);">
                  <span>Personnel Clear of Red Zone</span>
                </label>
                <span style="font-size: 0.7rem; font-weight: 700; font-family: 'JetBrains Mono', monospace;" [style.color]="chkPersonnelClear ? 'var(--app-accent-green)' : 'var(--app-accent-red)'">
                  {{ chkPersonnelClear ? 'SAFE' : 'PERSONNEL DETECTED' }}
                </span>
              </div>

              <div style="display: flex; align-items: center; justify-content: space-between;">
                <label style="display: flex; align-items: center; gap: 10px; font-size: 0.8rem; cursor: pointer;">
                  <input type="checkbox" [(ngModel)]="chkCraneCapacity" (change)="checkSafetyStatus()" style="accent-color: var(--app-accent-cyan);">
                  <span>Crane Rated SWL Capacity Limit</span>
                </label>
                <span style="font-size: 0.7rem; font-weight: 700; font-family: 'JetBrains Mono', monospace;" [style.color]="chkCraneCapacity ? 'var(--app-accent-green)' : 'var(--app-accent-red)'">
                  {{ chkCraneCapacity ? 'OK (47%)' : 'OVER SWL LIMIT' }}
                </span>
              </div>

              <div style="display: flex; align-items: center; justify-content: space-between;">
                <label style="display: flex; align-items: center; gap: 10px; font-size: 0.8rem; cursor: pointer;">
                  <input type="checkbox" [(ngModel)]="chkWeatherLimit" (change)="checkSafetyStatus()" style="accent-color: var(--app-accent-cyan);">
                  <span>Wind & Wave Meteorological Limits</span>
                </label>
                <span style="font-size: 0.7rem; font-weight: 700; font-family: 'JetBrains Mono', monospace;" [style.color]="chkWeatherLimit ? 'var(--app-accent-green)' : 'var(--app-accent-red)'">
                  {{ chkWeatherLimit ? 'OK' : 'LIMITS EXCEEDED' }}
                </span>
              </div>
            </div>

            <!-- Safety diagnostic action -->
            <ion-button expand="block" fill="solid" class="industrial-btn-solid" (click)="runSafetyCheckScan()">
              <lucide-icon name="shield" style="width: 14px; height: 14px; margin-right: 6px;" [class.pulsing-indicator]="isScanningSafety"></lucide-icon>
              {{ isScanningSafety ? 'Recalculating Deck Strain...' : 'Run Safety Scan Override' }}
            </ion-button>
          </div>
        </div>

      </div>

      <!-- SUB-VIEW 3: Pile Driving Overview -->
      <div *ngIf="activeLiveTab === 'driving'" class="grid-2" style="gap: 16px;">
        
        <!-- Hammer Interactive Controls -->
        <div class="industrial-card">
          <div class="panel-header-line">
            <h3 class="panel-title"><lucide-icon name="settings" class="panel-icon"></lucide-icon> IHC-150 Hammer Control</h3>
            <span class="status-badge-inline live" [style.color]="state.isOperating ? 'var(--app-accent-green)' : 'var(--app-accent-red)'">
              {{ state.isOperating ? 'Active Driving' : 'System standby' }}
            </span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 14px;">
            
            <div style="background: rgba(255,255,255,0.01); border: 1px solid var(--app-border); border-radius: 4px; padding: 12px;">
              <!-- Draggable energy slider -->
              <div class="slider-container" style="margin-top: 0;">
                <div class="slider-label-wrapper">
                  <span>Hammer Impact Energy Setting</span>
                  <span style="color: var(--app-accent-cyan); font-weight: 700; font-size: 1rem;">{{ state.energyDelivered }}%</span>
                </div>
                <input type="range" min="0" max="100" [value]="state.energyDelivered" (input)="onEnergySliderChange($event)" class="range-input">
              </div>

              <!-- Blow Rate +/- buttons -->
              <div class="flex-between" style="margin-top: 14px;">
                <span class="form-label">Blow Rate Controller</span>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <ion-button size="small" fill="outline" class="industrial-btn" (click)="adjustBlowRate(-1)" style="width: 32px; --padding-start:0; --padding-end:0;">-</ion-button>
                  <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; font-weight: 700; width: 60px; text-align: center;">{{ state.blowRate }} bpm</span>
                  <ion-button size="small" fill="outline" class="industrial-btn" (click)="adjustBlowRate(1)" style="width: 32px; --padding-start:0; --padding-end:0;">+</ion-button>
                </div>
              </div>
            </div>

            <div class="metric-list">
              <div class="metric-row">
                <span class="metric-row-label">Cushion Configuration</span>
                <span class="metric-row-value">Anvil Good ({{ state.cushionCondition }}%)</span>
              </div>
              <div class="metric-row">
                <span class="metric-row-label">Hydraulic Feed Valve</span>
                <span class="metric-row-value" style="color: var(--app-accent-green);">OPEN</span>
              </div>
            </div>

            <!-- Mutually exclusive driving buttons -->
            <div class="grid-2">
              <ion-button expand="block" [fill]="state.isOperating ? 'outline' : 'solid'" [color]="state.isOperating ? 'medium' : 'success'" class="industrial-btn" (click)="setDrivingState(true)">
                <lucide-icon name="play" style="width: 14px; height: 14px; margin-right: 6px;"></lucide-icon>
                Start Driving
              </ion-button>
              <ion-button expand="block" [fill]="!state.isOperating ? 'outline' : 'solid'" [color]="!state.isOperating ? 'medium' : 'warning'" class="industrial-btn" (click)="setDrivingState(false)">
                <lucide-icon name="pause" style="width: 14px; height: 14px; margin-right: 6px;"></lucide-icon>
                Stop Driving
              </ion-button>
            </div>

            <div class="grid-2">
              <ion-button expand="block" fill="outline" class="industrial-btn" (click)="calibrateHammerFromLive()">
                Calibrate Hammer
              </ion-button>
              <ion-button expand="block" fill="solid" class="industrial-btn-danger" (click)="triggerEmergencyStopFromLive()">
                EMERGENCY STOP
              </ion-button>
            </div>

          </div>
        </div>

        <!-- AI Monitoring Insights -->
        <div class="industrial-card">
          <div class="panel-header-line">
            <h3 class="panel-title"><lucide-icon name="compass" class="panel-icon"></lucide-icon> AI Driving Insights</h3>
            <span class="status-badge-inline live">Running...</span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 14px;">
            <div class="ai-reasoning-box">
              Seabed transponder feeds indicate gradual sand resistance. Current hammer impact configurations are 100% optimal.
            </div>

            <div class="metric-list">
              <div class="metric-row">
                <span class="metric-row-label">Penetration Rate Quality</span>
                <span class="metric-row-value" style="color: var(--app-accent-green);">Optimal (17mm/blow)</span>
              </div>
              <div class="metric-row">
                <span class="metric-row-label">Hammer Energy Efficiency</span>
                <span class="metric-row-value" style="color: var(--app-accent-green);">Within Target (88%)</span>
              </div>
              <div class="metric-row">
                <span class="metric-row-label">Drift Alignment Warning</span>
                <span class="metric-row-value" style="color: var(--app-accent-cyan);">None detected</span>
              </div>
              <div class="metric-row">
                <span class="metric-row-label">Continuous Operation Goal</span>
                <span class="metric-row-value">Target: 45.0m</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

    <!-- RIGHT SIDEBAR: Live Operation Status, KPIs, Safety Zone -->
    <div style="display: flex; flex-direction: column; gap: 16px;">
      
      <!-- Panel A: Live Operation Status -->
      <div class="industrial-card" style="border-color: var(--app-card-border);">
        <div class="panel-header-line">
          <h3 class="panel-title" style="color: var(--app-accent-cyan); font-size: 0.8rem;">
            <lucide-icon name="shield" class="panel-icon" style="color: var(--app-accent-cyan);"></lucide-icon>
            Live Operations Status
          </h3>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px;">
          <!-- Overall Status Badge -->
          <div class="metric-row" style="background: rgba(0, 255, 157, 0.04); border-color: rgba(0, 255, 157, 0.15); padding: 10px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="pulse-dot green"></span>
              <span style="font-family: 'Space Grotesk', sans-serif; font-size: 0.75rem; font-weight: 700; color: var(--app-accent-green);">ALL SYSTEMS NORMAL</span>
            </div>
          </div>

          <!-- Active processes -->
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <div class="flex-between" style="font-size: 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.03); padding-bottom: 4px;">
              <span style="color: var(--app-text-muted);">Handling Operations</span>
              <span style="font-weight: 600; color: var(--app-accent-green);">Active</span>
            </div>
            <div class="flex-between" style="font-size: 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.03); padding-bottom: 4px;">
              <span style="color: var(--app-text-muted);">Pile Driving Operations</span>
              <span style="font-weight: 600;" [style.color]="state.isOperating ? 'var(--app-accent-green)' : 'var(--app-accent-red)'">
                {{ state.isOperating ? 'Active' : 'Standby' }}
              </span>
            </div>
          </div>

          <!-- Interactive Active / Pause / Stop Toggles -->
          <div class="grid-3" style="gap: 4px;">
            <ion-button size="small" [fill]="state.isOperating ? 'solid' : 'outline'" color="success" class="industrial-btn" (click)="setDrivingState(true)" style="font-size: 0.65rem;">
              Active
            </ion-button>
            <ion-button size="small" [fill]="!state.isOperating ? 'solid' : 'outline'" color="warning" class="industrial-btn" (click)="setDrivingState(false)" style="font-size: 0.65rem;">
              Pause
            </ion-button>
            <ion-button size="small" fill="outline" color="danger" class="industrial-btn" (click)="triggerEmergencyStopFromLive()" style="font-size: 0.65rem;">
              Stop
            </ion-button>
          </div>
        </div>
      </div>

      <!-- Panel B: Safety Zone Monitoring Radar -->
      <div class="industrial-card">
        <div class="panel-header-line">
          <h3 class="panel-title" style="font-size: 0.8rem;">
            <lucide-icon name="compass" class="panel-icon"></lucide-icon>
            Safety Zone Radar
          </h3>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
          <!-- Radar circular viewport -->
          <div class="radar-display" style="cursor: pointer;" (click)="clickRadar()">
            <div class="radar-sweep"></div>
            <div class="radar-circle c1"></div>
            <div class="radar-circle c2"></div>
            <div class="radar-circle c3"></div>
            <div class="radar-axis-h"></div>
            <div class="radar-axis-v"></div>
            <!-- Targets -->
            <div class="radar-target vessel-center"></div>
            <div class="radar-target crane-load" title="Crane hook path"></div>
            <div *ngIf="chkPersonnelClear" class="radar-target personnel-1" title="Deck crew cluster"></div>
            <!-- If personnel are in red zone, render a flashing red target -->
            <div *ngIf="!chkPersonnelClear" class="radar-target" style="background: var(--app-accent-red); box-shadow: 0 0 10px var(--app-accent-red); left: 45%; top: 48%; width: 8px; height: 8px; animation: rec-blink 0.5s infinite;" title="CRITICAL: DECK CREW IN FORBIDDEN ZONE"></div>
          </div>

          <div style="width: 100%; display: flex; flex-direction: column; gap: 4px; font-size: 0.7rem; color: var(--app-text-muted);">
            <div class="flex-between">
              <span>Deck Crew in Red Zone</span>
              <span style="font-weight: 700; font-family: 'JetBrains Mono', monospace;" [style.color]="chkPersonnelClear ? 'var(--app-accent-green)' : 'var(--app-accent-red)'">
                {{ chkPersonnelClear ? '0' : '3 (ALERT)' }}
              </span>
            </div>
            <div class="flex-between">
              <span>Crane SWL Margin</span>
              <span style="font-weight: 700; color: var(--app-accent-green);">Safe Limit (47%)</span>
            </div>
          </div>

          <div class="grid-2" style="width: 100%;">
            <ion-button expand="block" fill="outline" class="industrial-btn" (click)="adjustRadarRadius()" style="font-size: 0.65rem;">
              Set Zone Radius
            </ion-button>
            <ion-button expand="block" [color]="chkPersonnelClear ? 'primary' : 'danger'" fill="solid" class="industrial-btn" (click)="alertPersonnel()" style="font-size: 0.65rem; --color: #ffffff;">
              Alert Crew
            </ion-button>
          </div>
        </div>
      </div>

      <!-- Panel C: Real-Time Key Indicators -->
      <div class="industrial-card">
        <div class="panel-header-line">
          <h3 class="panel-title" style="font-size: 0.8rem;">
            <lucide-icon name="activity" class="panel-icon"></lucide-icon>
            Key Indicators
          </h3>
        </div>

        <div class="metric-list">
          <div class="metric-row" (click)="openLiveTrend('penetration')" style="cursor: pointer;" title="Click to view trend">
            <span class="metric-row-label">Penetration Depth</span>
            <span class="metric-row-value" style="color: var(--app-accent-cyan);">{{ state.currentDepth }} m</span>
          </div>
          <div class="metric-row" (click)="openLiveTrend('rate')" style="cursor: pointer;" title="Click to view trend">
            <span class="metric-row-label">Penetration Rate</span>
            <span class="metric-row-value">{{ state.penetrationRate }} mm/blow</span>
          </div>
          <div class="metric-row" (click)="openLiveTrend('blows')" style="cursor: pointer;" title="Click to view trend">
            <span class="metric-row-label">Blow Count</span>
            <span class="metric-row-value">{{ state.blowCount }}</span>
          </div>
          <div class="metric-row" (click)="openLiveTrend('verticality')" style="cursor: pointer;" title="Click to view trend">
            <span class="metric-row-label">Pile Verticality</span>
            <span class="metric-row-value" style="color: var(--app-accent-green);">99.4%</span>
          </div>
          <div class="metric-row" (click)="openLiveTrend('heave')" style="cursor: pointer;" title="Click to view trend">
            <span class="metric-row-label">Vessel Heave</span>
            <span class="metric-row-value">{{ state.heave }} m</span>
          </div>
          <div class="metric-row" (click)="openLiveTrend('wind')" style="cursor: pointer;" title="Click to view trend">
            <span class="metric-row-label">Wind Speed</span>
            <span class="metric-row-value" [style.color]="state.windSpeed > 13 ? 'var(--app-accent-amber)' : 'var(--app-text)'">
              {{ state.windSpeed }} m/s
            </span>
          </div>
        </div>
        <div style="font-size: 0.6rem; color: var(--app-text-muted); text-align: center; margin-top: 6px;">
          Click on any metric row to pull historical trends.
        </div>
      </div>

    </div>

  </div>

  <!-- Bottom Live Alerts & Notifications Bar -->
  <div class="alerts-footer-bar" style="margin-top: 16px; border-radius: 6px;">
    <div class="alerts-list">
      <div *ngFor="let alert of activeAlerts" class="footer-alert-item" [ngClass]="alert.type">
        <lucide-icon [name]="alert.type === 'warn' ? 'alert-triangle' : 'info'" style="width: 14px; height: 14px; margin-right: 4px;"></lucide-icon>
        <span>{{ alert.message }}</span>
        <span class="alert-dismiss-btn" (click)="dismissAlert(alert.id)" style="margin-left: 8px;">✕</span>
      </div>
      <div *ngIf="activeAlerts.length === 0" class="footer-alert-item success">
        <lucide-icon name="check" style="width: 14px; height: 14px; margin-right: 4px;"></lucide-icon>
        <span>No active alarms or notifications on deck. Telemetry pristine.</span>
      </div>
    </div>

    <div class="panel-header-right" style="gap: 16px;">
      <ion-button size="small" fill="clear" class="industrial-btn" (click)="markAllAlertsRead()" style="height: auto; font-size: 0.7rem;">
        Mark All Read
      </ion-button>

      <!-- Video Feed Quality selector -->
      <div style="display: flex; align-items: center; gap: 6px;">
        <span style="font-size: 0.65rem; color: var(--app-text-muted); font-family: 'Space Grotesk', sans-serif;">STREAM QUALITY:</span>
        <select class="form-select" [(ngModel)]="streamQuality" (change)="onQualityChange()" style="padding: 2px 6px; font-size: 0.7rem; height: 26px;">
          <option value="hd">HD (1080p)</option>
          <option value="sd">SD (720p)</option>
          <option value="low">LOW BANDWIDTH</option>
        </select>
      </div>

      <!-- Audio Mute toggle icon -->
      <ion-button fill="clear" (click)="toggleAudio()" class="theme-toggle-btn" title="Audio Toggle" style="height: 26px; width: 26px;">
        <lucide-icon [name]="isMuted ? 'volume-x' : 'volume-2'" style="width: 15px; height: 15px;"></lucide-icon>
      </ion-button>
    </div>
  </div>

</div>
`,E='.cam-container{position:relative;border:1px solid var(--app-border);background:#000;border-radius:6px;overflow:hidden;display:flex;flex-direction:column}.cam-feed-placeholder{width:100%;height:240px;background-size:cover;background-position:center;position:relative;display:flex;align-items:center;justify-content:center}.cam-overlay-dark{position:absolute;top:0;left:0;right:0;bottom:0;background:#00000040;pointer-events:none}.cam-crosshair{position:absolute;top:50%;left:50%;width:30px;height:30px;transform:translate(-50%,-50%);border:1px solid rgba(255,255,255,.15);border-radius:50%;pointer-events:none}.cam-crosshair:before{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:40px;height:1px;background:#ffffff26}.cam-crosshair:after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:1px;height:40px;background:#ffffff26}.cam-live-indicator{position:absolute;top:10px;left:10px;z-index:10;background:#000000b3;padding:4px 8px;border-radius:4px;display:flex;align-items:center;gap:6px;font-family:Space Grotesk,sans-serif;font-size:.7rem;font-weight:700;color:#fff;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.cam-rec-indicator{position:absolute;top:10px;right:10px;z-index:10;background:#000000b3;padding:4px 8px;border-radius:4px;display:flex;align-items:center;gap:6px;font-family:Space Grotesk,sans-serif;font-size:.7rem;font-weight:700;color:var(--app-accent-red);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.cam-metadata{position:absolute;bottom:10px;left:10px;right:10px;background:#000000bf;border:1px solid rgba(255,255,255,.05);padding:8px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.65rem;color:#fff;line-height:1.4;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.cam-controls{display:flex;justify-content:flex-end;align-items:center;gap:4px;background:#0d0d0d;padding:4px 8px;border-top:1px solid var(--app-border)}.cam-control-btn{--padding-start: 4px;--padding-end: 4px;--background: transparent;--color: var(--app-text-muted);height:28px;width:28px;margin:0;border-radius:4px;transition:all .2s ease}.cam-control-btn:hover{--color: #ffffff;--background: rgba(255, 255, 255, .05)}.alerts-footer-bar{display:flex;align-items:center;justify-content:space-between;background:var(--app-header-bg);border-top:1px solid var(--app-border);padding:8px 16px;gap:12px;flex-wrap:wrap}.alerts-list{display:flex;flex-direction:column;gap:4px;flex:1;min-width:0}.footer-alert-item{display:flex;align-items:center;gap:8px;font-family:Space Grotesk,sans-serif;font-size:.75rem;font-weight:600;padding:4px 10px;border-radius:4px;width:fit-content;background:#ffffff05;border:1px solid var(--app-border)}.footer-alert-item.warn{background:#ff336614;border-color:#ff33664d;color:var(--app-accent-red)}.footer-alert-item.info{background:#ffb00014;border-color:#ffb0004d;color:var(--app-accent-amber)}.footer-alert-item.success{background:#00ff9d14;border-color:#00ff9d4d;color:var(--app-accent-green)}.alert-dismiss-btn{cursor:pointer;opacity:.6;display:flex;align-items:center;justify-content:center;padding:4px;border-radius:4px;transition:opacity .2s,background .2s}.alert-dismiss-btn:hover{opacity:1;background:#ffffff1a}',z=`
    .radar-modal-container {
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
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .zone-card {
      background: var(--app-card-bg);
      border: 1px solid var(--app-card-border);
      border-radius: 8px;
      padding: 16px;
      backdrop-filter: blur(8px);
    }

    .zone-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--app-border);
    }

    .zone-icon {
      width: 20px;
      height: 20px;
    }

    .zone-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.95rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .zone-details {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .zone-details p {
      margin: 0;
      font-size: 0.85rem;
      color: var(--app-text-muted);
    }

    .zone-details strong {
      color: var(--app-text);
    }

    .personnel-count {
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      color: var(--app-accent-green);
    }

    .personnel-count.danger {
      color: var(--app-accent-red);
      animation: pulse-danger 1.5s ease-in-out infinite;
    }

    @keyframes pulse-danger {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.6; }
    }

    .red-zone .zone-icon { color: var(--app-accent-red); }
    .red-zone .zone-title { color: var(--app-accent-red); }
    .red-zone { border-color: rgba(255, 51, 102, 0.3); }

    .yellow-zone .zone-icon { color: var(--app-accent-amber); }
    .yellow-zone .zone-title { color: var(--app-accent-amber); }
    .yellow-zone { border-color: rgba(255, 176, 0, 0.3); }

    .green-zone .zone-icon { color: var(--app-accent-green); }
    .green-zone .zone-title { color: var(--app-accent-green); }
    .green-zone { border-color: rgba(0, 255, 157, 0.3); }

    .warning-banner {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      background: rgba(255, 51, 102, 0.1);
      border: 1px solid var(--app-accent-red);
      border-radius: 8px;
      padding: 16px;
      animation: warning-flash 2s ease-in-out infinite;
    }

    @keyframes warning-flash {
      0%, 100% { background: rgba(255, 51, 102, 0.1); }
      50% { background: rgba(255, 51, 102, 0.2); }
    }

    .warning-icon {
      width: 24px;
      height: 24px;
      color: var(--app-accent-red);
      flex-shrink: 0;
    }

    .warning-text {
      font-size: 0.85rem;
      color: var(--app-accent-red);
      line-height: 1.5;
    }

    .warning-text strong {
      font-weight: 700;
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
  `;var O=function(i,e,n,t){var s=arguments.length,a=s<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,n):t,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,n,t);else for(var o=i.length-1;o>=0;o--)(r=i[o])&&(a=(s<3?r(a):s>3?r(e,n,a):r(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a},M=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)},l;let m=(l=class{constructor(e){this.modalController=e,this.personnelClear=!0}dismiss(){this.modalController.dismiss()}},l.ctorParameters=()=>[{type:p}],l.propDecorators={personnelClear:[{type:g}]},l);m=O([v({selector:"app-radar-analysis-modal",standalone:!0,imports:[f,h],template:`
    <div class="radar-modal-container">
      <div class="modal-header">
        <div class="modal-title-wrapper">
          <lucide-icon name="radar" class="modal-icon"></lucide-icon>
          <h2>Deck Safety Zone Analysis</h2>
        </div>
        <button class="close-btn" (click)="dismiss()">
          <lucide-icon name="x"></lucide-icon>
        </button>
      </div>

      <div class="modal-content">
        <div class="zone-card red-zone">
          <div class="zone-header">
            <lucide-icon name="alert-circle" class="zone-icon"></lucide-icon>
            <span class="zone-title">Red Danger Zone</span>
          </div>
          <div class="zone-details">
            <p><strong>Radius:</strong> 15.0m around crane swing path</p>
            <p><strong>Current Personnel:</strong> 
              <span class="personnel-count" [class.danger]="!personnelClear">
                {{ personnelClear ? '0' : '3 (ANOMALY)' }}
              </span>
            </p>
          </div>
        </div>

        <div class="zone-card yellow-zone">
          <div class="zone-header">
            <lucide-icon name="alert-triangle" class="zone-icon"></lucide-icon>
            <span class="zone-title">Yellow Warning Zone</span>
          </div>
          <div class="zone-details">
            <p><strong>Radius:</strong> 30.0m around frame</p>
            <p><strong>Personnel:</strong> 0</p>
          </div>
        </div>

        <div class="zone-card green-zone">
          <div class="zone-header">
            <lucide-icon name="shield-check" class="zone-icon"></lucide-icon>
            <span class="zone-title">Safety Laser Grid</span>
          </div>
          <div class="zone-details">
            <p><strong>Status:</strong> Armed and operating normally</p>
          </div>
        </div>

        <div class="warning-banner" *ngIf="!personnelClear">
          <lucide-icon name="siren" class="warning-icon"></lucide-icon>
          <div class="warning-text">
            <strong>WARNING:</strong> 3 rigging crew detected in Red Zone. 
            Please sound siren immediately!
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button class="close-modal-btn" (click)="dismiss()">
          Close
        </button>
      </div>
    </div>
  `,styles:[z]}),M("design:paramtypes",[p])],m);const I=`
    .trend-modal-container {
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

    .trend-data-box {
      background: var(--app-card-bg);
      border: 1px solid var(--app-card-border);
      border-radius: 8px;
      padding: 16px;
    }

    .trend-values {
      margin: 0;
      font-size: 0.9rem;
      line-height: 1.6;
      color: var(--app-text);
      font-family: 'Inter', sans-serif;
    }

    .system-status {
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
  `;var P=function(i,e,n,t){var s=arguments.length,a=s<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,n):t,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,n,t);else for(var o=i.length-1;o>=0;o--)(r=i[o])&&(a=(s<3?r(a):s>3?r(e,n,a):r(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a},D=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)},c;let u=(c=class{constructor(e){this.modalController=e,this.metricName="",this.values=""}dismiss(){this.modalController.dismiss()}},c.ctorParameters=()=>[{type:p}],c.propDecorators={metricName:[{type:g}],values:[{type:g}]},c);u=P([v({selector:"app-live-trend-modal",standalone:!0,imports:[f,h],template:`
    <div class="trend-modal-container">
      <div class="modal-header">
        <div class="modal-title-wrapper">
          <lucide-icon name="activity" class="modal-icon"></lucide-icon>
          <h2>{{ metricName }}</h2>
        </div>
        <button class="close-btn" (click)="dismiss()">
          <lucide-icon name="x"></lucide-icon>
        </button>
      </div>

      <div class="modal-content">
        <div class="trend-data-box">
          <p class="trend-values">{{ values }}</p>
        </div>

        <div class="system-status">
          <lucide-icon name="check-circle-2" class="status-icon"></lucide-icon>
          <span>Dynamic sensor pooling active. Error index: 0.02%</span>
        </div>
      </div>

      <div class="modal-footer">
        <button class="close-modal-btn" (click)="dismiss()">Close</button>
      </div>
    </div>
  `,styles:[I]}),D("design:paramtypes",[p])],u);var N=function(i,e,n,t){var s=arguments.length,a=s<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,n):t,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,n,t);else for(var o=i.length-1;o>=0;o--)(r=i[o])&&(a=(s<3?r(a):s>3?r(e,n,a):r(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a},H=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)},d;let b=(d=class{constructor(e,n,t,s){this.dataService=e,this.alertController=n,this.toastController=t,this.modalController=s,this.Math=Math,this.activeLiveTab="feed",this.isFullScreen=!1,this.isRecordingCam1=!1,this.isRecordingCam2=!1,this.isMuted=!1,this.handlingOperation="lowering",this.liftPlan="lp058",this.calcPileWeight=28.5,this.calcHookWeight=1.2,this.calcTotalWeight=29.7,this.isCraneMoving=!1,this.chkPathClear=!0,this.chkPersonnelClear=!0,this.chkCraneCapacity=!0,this.chkWeatherLimit=!0,this.isScanningSafety=!1,this.streamQuality="hd",this.activeAlerts=[]}ngOnInit(){this.stateSub=this.dataService.getState().subscribe(e=>{this.state=e,this.state.windSpeed>14&&this.chkWeatherLimit&&(this.chkWeatherLimit=!1,this.checkSafetyStatus())}),this.alertsSub=this.dataService.getAlerts().subscribe(e=>{this.activeAlerts=e})}ngOnDestroy(){this.stateSub&&this.stateSub.unsubscribe(),this.alertsSub&&this.alertsSub.unsubscribe()}onLiveTabChange(e){this.activeLiveTab=e.detail.value}toggleFullScreenSim(){this.isFullScreen=!this.isFullScreen,this.showToast(this.isFullScreen?"Live feeds switched to full-screen grid.":"Full-screen grid minimized.")}takeScreenshot(e){const n=new Date().toISOString().replace("T"," ").substring(0,19);this.showToast(`Capturing frame on ${e}...`),setTimeout(()=>{this.showToast(`Screenshot downloaded: ${e.replace(" ","_")}_${n.replace(/[: ]/g,"")}.png`)},1200)}toggleRecordCam1(){this.isRecordingCam1=!this.isRecordingCam1,this.showToast(this.isRecordingCam1?"CAM 01 recording started.":"CAM 01 recording stopped and saved to deck logs.")}toggleRecordCam2(){this.isRecordingCam2=!this.isRecordingCam2,this.showToast(this.isRecordingCam2?"CAM 02 recording started.":"CAM 02 recording stopped and saved to deck logs.")}toggleAudio(){this.isMuted=!this.isMuted,this.showToast(this.isMuted?"All live audio streams muted.":"Live marine ambient audio enabled.")}recalculateCraneWeight(){this.calcTotalWeight=Math.round((this.calcPileWeight+this.calcHookWeight)*100)/100,this.calcTotalWeight>60?this.chkCraneCapacity=!1:this.chkCraneCapacity=!0,this.checkSafetyStatus()}craneCommand(e){this.showToast(`Pulse: Crane command [${e}] sent to operator console.`)}startCraneSequence(){if(!this.chkPathClear||!this.chkPersonnelClear||!this.chkCraneCapacity||!this.chkWeatherLimit){this.showErrorAlert("LIFT BLOCKER DETECTED","Lifting sequence cannot initiate while safety checklist markers are failed. Resolve checklist issues first.");return}this.isCraneMoving||(this.isCraneMoving=!0,this.showToast("Initiating automated crane hook guide path..."),setTimeout(()=>{this.isCraneMoving=!1,this.showToast("Monopile lift sequence completed safely. Object positioned.")},3e3))}async emergencyStopCrane(){await(await this.alertController.create({header:"CRANE STOP ACTION",message:"Halt all active crane slewing and hoist winches immediately?",buttons:[{text:"Cancel",role:"cancel"},{text:"HALT CRANE",handler:()=>{this.isCraneMoving=!1,this.showToast("🚨 CRANE OPERATIONAL LOOP HALTED. Brakes locked.")}}]})).present()}checkSafetyStatus(){}getSafetyOverallStatus(){return this.chkPathClear&&this.chkPersonnelClear&&this.chkCraneCapacity&&this.chkWeatherLimit?"Safe to Operate":"CRITICAL BLOCKER"}getSafetyBadgeBg(){return this.getSafetyOverallStatus()==="Safe to Operate"?"rgba(0, 255, 157, 0.1)":"rgba(255, 51, 102, 0.1)"}getSafetyBadgeColor(){return this.getSafetyOverallStatus()==="Safe to Operate"?"var(--app-accent-green)":"var(--app-accent-red)"}runSafetyCheckScan(){this.isScanningSafety||(this.isScanningSafety=!0,this.showToast("Scanning deck transponders and wind velocity markers..."),setTimeout(()=>{this.isScanningSafety=!1,this.chkPathClear=!0,this.chkPersonnelClear=!0,this.chkCraneCapacity=!0,this.chkWeatherLimit=!0,this.showToast("All safety override markers successfully validated. overall status: SAFE.")},2e3))}onEnergySliderChange(e){const n=parseInt(e.target.value,10);this.dataService.updateEnergy(n)}adjustBlowRate(e){const n=Math.min(60,Math.max(10,this.state.blowRate+e));this.dataService.updateBlowRate(n)}setDrivingState(e){this.dataService.setOperatingState(e)}calibrateHammerFromLive(){this.dataService.calibrateHammer()}async triggerEmergencyStopFromLive(){await(await this.alertController.create({header:"🚨 EMERGENCY SHUTDOWN 🚨",subHeader:"Confirm Live Shutdown Command",message:"This will lock all hammer exhaust loops and trigger an immediate stand-by. Confirm?",buttons:[{text:"Abort",role:"cancel"},{text:"HALT IHC-150 NOW",handler:()=>{this.dataService.setOperatingState(!1),this.showToast("🚨 IHC-150 HAMMER HALTED! Hydraulic pressure bled.")}}]})).present()}async clickRadar(){await(await this.modalController.create({component:m,componentProps:{personnelClear:this.chkPersonnelClear},cssClass:"radar-analysis-modal",animated:!0,showBackdrop:!0})).present()}adjustRadarRadius(){this.showToast("Opening Safety Laser Grid configuration interface...")}async alertPersonnel(){this.showToast("Sounding deck siren and flashing hazard indicators..."),await(await this.alertController.create({header:"🚨 ALARM SIREN INITIATED 🚨",message:"Emergency siren sounded on deck. Automated warning flashing on crew transceivers.",buttons:[{text:"Silence Alarm",handler:()=>{this.chkPersonnelClear=!0,this.showToast("Siren silenced. Crew confirmed clear of Red Zone.")}}]})).present()}async openLiveTrend(e){let n="",t="";switch(e){case"penetration":n="Penetration Depth (m)",t="Previous 5 mins: 32.1m → 32.2m → 32.3m → 32.4m. Consistent linear penetrability.";break;case"rate":n="Penetration Rate (mm/blow)",t="Previous 5 mins: 18.2 → 17.8 → 17.5 → 17.0 mm/blow. Transitioning into dense sand strata.";break;case"blows":n="Cumulative Blow Count",t="Total blows logged: 1,245. Cushion wear is within optimal limits (72%).";break;case"verticality":n="Monopile Verticality Drift",t="Dual-axis inclinometer reading: 0.6°. Maximum tolerance limit is 1.0°. All normal.";break;case"heave":n="Vessel Heave (Aeolus)",t="Significant vertical surge heave: 0.35m. System safe limit is 0.80m.";break;case"wind":n="Wind Velocity (North Sea)",t=`Avg Speed: ${this.state.windSpeed} m/s. Safe lifting limit is 15.0 m/s.`;break}await(await this.modalController.create({component:u,componentProps:{metricName:n,values:t},cssClass:"standard-centered-modal",animated:!0,showBackdrop:!0})).present()}dismissAlert(e){this.dataService.removeAlert(e)}markAllAlertsRead(){this.dataService.clearAlerts(),this.showToast("All deck alarms cleared.")}onQualityChange(){this.showToast(`Video feed switched to: ${this.streamQuality.toUpperCase()}`)}async showErrorAlert(e,n){await(await this.alertController.create({header:e,message:n,buttons:["Acknowledge"]})).present()}async showToast(e){await(await this.toastController.create({message:e,duration:2e3,position:"bottom",color:"dark"})).present()}},d.ctorParameters=()=>[{type:y},{type:x},{type:w},{type:p}],d);b=N([v({selector:"app-live-operations",standalone:!0,imports:[C,f,k,S,R,A,L,h],template:T,styles:[E]}),H("design:paramtypes",[y,x,w,p])],b);export{b as LiveOperationsPage};
