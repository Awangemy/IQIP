import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular/standalone';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-hammer-details-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
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
  `,
  styles: [`
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
  `]
})
export class HammerDetailsModalComponent {
  @Input() energy: number = 0;
  @Input() blowRate: number = 0;
  @Input() pressure: number = 0;
  @Input() temperature: number = 0;

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
}