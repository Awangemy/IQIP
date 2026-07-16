import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular/standalone';
import { LucideAngularModule } from 'lucide-angular';

interface ForecastHour {
  time: string;
  status: 'Good' | 'Caution' | 'Poor';
  wave: number;
  wind: number;
}

@Component({
  selector: 'app-forecast-hour-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
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
  `,
  styles: [`
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
  `]
})
export class ForecastHourModalComponent {
  @Input() hour!: ForecastHour;
  Math = Math;

  constructor(private modalController: ModalController) {}

  get heaveAmplitude(): number {
    return Math.round((this.hour.wave * 0.3) * 100) / 100;
  }

  getStatusClass(): string {
    return this.hour.status.toLowerCase();
  }

  getStatusIcon(): string {
    switch (this.hour.status) {
      case 'Good': return 'check-circle-2';
      case 'Caution': return 'alert-triangle';
      case 'Poor': return 'alert-circle';
      default: return 'info';
    }
  }

  getAssessmentText(): string {
    if (this.hour.status === 'Good') {
      return 'Conditions are optimal for piling operations. All parameters within safe limits.';
    } else if (this.hour.status === 'Caution') {
      return 'Monitor conditions closely. Operations can continue but be prepared to halt if conditions worsen.';
    } else {
      return 'Conditions are unfavorable. Recommend halting piling operations until conditions improve.';
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }
}