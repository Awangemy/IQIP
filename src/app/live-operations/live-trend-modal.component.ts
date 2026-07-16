import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular/standalone';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-live-trend-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
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
  `,
  styles: [`
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
  `]
})
export class LiveTrendModalComponent {
  @Input() metricName: string = '';
  @Input() values: string = '';

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
}