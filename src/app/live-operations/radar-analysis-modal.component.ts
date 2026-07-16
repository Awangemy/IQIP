import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular/standalone';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-radar-analysis-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
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
  `,
  styles: [`
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
  `]
})
export class RadarAnalysisModalComponent {
  @Input() personnelClear: boolean = true;

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
}