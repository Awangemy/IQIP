import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular/standalone';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-weather-forecast-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
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
  `,
  styles: [`
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
  `]
})
export class WeatherForecastModalComponent {
  // ✅ DIPERBETULKAN: Buang DataService kerana tidak digunakan
  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
}