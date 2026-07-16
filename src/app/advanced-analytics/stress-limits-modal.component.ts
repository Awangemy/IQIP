import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular/standalone';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-stress-limits-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
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
  `,
  styles: [`
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
  `]
})
export class StressLimitsModalComponent {
  @Input() compression: number = 0;
  @Input() tension: number = 0;
  @Input() bending: number = 0;

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
}
