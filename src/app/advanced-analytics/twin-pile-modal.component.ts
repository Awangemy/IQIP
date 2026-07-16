import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular/standalone';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-twin-pile-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
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
  `,
  styles: [`
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
  `]
})
export class TwinPileModalComponent {
  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
}