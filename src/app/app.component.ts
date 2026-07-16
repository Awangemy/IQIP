import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  IonApp, IonMenu, IonHeader, IonToolbar, IonContent,
  IonList, IonMenuToggle, IonItem, IonLabel, IonBadge,
  IonButton, IonButtons, IonMenuButton, IonRouterOutlet
} from '@ionic/angular/standalone';
import {
  LucideAngularModule,
  LayoutDashboard, LineChart, Video, Bell, FileText,
  Download, Settings, CloudRain, Shield, Activity,
  RefreshCw, Compass, Sun, Moon, Calendar, User,
  Eye, Plus, Minus, Check, AlertTriangle, Play,
  Pause, ChevronRight, Menu, Info, HelpCircle
} from 'lucide-angular';
import { DataService, PilingState } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonApp, IonMenu, IonHeader, IonToolbar, IonContent,
    IonList, IonMenuToggle, IonItem, IonLabel, IonBadge,
    IonButton, IonButtons, IonMenuButton, IonRouterOutlet,
    LucideAngularModule
  ],
  template: `
    <ion-app [class.dark-theme]="isDarkTheme" [class.light-theme]="!isDarkTheme">
      <ion-menu contentId="main-content" type="overlay">
        <ion-header>
          <ion-toolbar>
            <div class="sidebar-logo-container">
              <svg class="sidebar-logo" viewBox="0 0 100 100" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="#00f0ff" stroke-width="8" />
                <path d="M50 20V80" stroke="#00f0ff" stroke-width="8" stroke-linecap="round" />
                <path d="M20 50H80" stroke="#00f0ff" stroke-width="8" stroke-linecap="round" />
                <circle cx="50" cy="50" r="15" fill="#00ff9d" />
              </svg>
              <div class="sidebar-title-wrapper">
                <span class="sidebar-title">IQIP</span>
                <span class="sidebar-subtitle">OVERWATCH™</span>
              </div>
            </div>
          </ion-toolbar>
        </ion-header>
        <ion-content class="sidebar-content">
          <div class="sidebar-brand-sub">AI Operations Intelligence</div>
          <ion-list lines="none" class="menu-list">
            <ng-container *ngFor="let item of menuItems">
              <ion-menu-toggle auto-hide="true">
                <!-- ✅ DIPERBETULKAN: Buang 'routerDirection="root"' untuk elak ralat 'already activated outlet' -->
                <ion-item 
                  [routerLink]="item.url" 
                  routerLinkActive="active-item"
                  [routerLinkActiveOptions]="{ exact: item.exact ?? false }"
                  class="menu-item"
                  button>
                  <lucide-icon [name]="item.icon" class="menu-icon"></lucide-icon>
                  <ion-label class="menu-label">{{ item.title }}</ion-label>
                  <ion-badge *ngIf="item.badge" [color]="item.badgeColor" slot="end">{{ item.badge }}</ion-badge>
                </ion-item>
              </ion-menu-toggle>
            </ng-container>
          </ion-list>
          <div class="sidebar-footer">
            <div class="status-indicator">
              <span class="pulse-dot green"></span>
              <div class="status-text-container">
                <span class="status-label">SYSTEM STATUS</span>
                <span class="status-value green-text">Operational</span>
              </div>
            </div>
            <div class="footer-note">All Systems Normal</div>
          </div>
        </ion-content>
      </ion-menu>
      
      <div class="ion-page" id="main-content">
        <ion-header class="app-header">
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-menu-button style="--color: var(--app-text);"></ion-menu-button>
            </ion-buttons>
            <div class="header-grid">
              <div class="header-branding">
                <span class="project-info">Project: <strong class="highlight-cyan">{{ state.project }}</strong></span>
                <span class="vessel-info">Vessel: <strong class="highlight-cyan">{{ state.vessel }}</strong></span>
                <span class="location-info">Location: <strong class="highlight-cyan">Block A</strong></span>
              </div>
              <div class="header-center-title">
                <span class="platform-title">IQIP OVERWATCH™</span>
                <span class="platform-tagline">AI OPERATIONS PLATFORM</span>
              </div>
              <div class="header-status">
                <div class="live-tag">
                  <span class="pulse-dot green"></span>
                  <span class="live-text" style="margin-left: 4px;">Live</span>
                </div>
                <div class="datetime-display">
                  <lucide-icon name="calendar" class="header-icon" style="margin-right: 4px;"></lucide-icon>
                  <span>{{ currentDateTime | date:'dd MMM yyyy, HH:mm:ss' }}</span>
                </div>
                <div class="operator-tag">
                  <lucide-icon name="user" class="header-icon" style="margin-right: 4px;"></lucide-icon>
                  <span>Operator</span>
                </div>
                <ion-button fill="clear" (click)="toggleTheme()" class="theme-toggle-btn" title="Toggle Light/Dark Theme">
                  <lucide-icon [name]="isDarkTheme ? 'sun' : 'moon'"></lucide-icon>
                </ion-button>
              </div>
            </div>
          </ion-toolbar>
        </ion-header>
        <ion-content class="main-page-content">
          <ion-router-outlet></ion-router-outlet>
        </ion-content>
      </div>
    </ion-app>
  `,
      styles: [`
        .sidebar-logo-container { 
          display: flex; 
          align-items: center; 
          gap: 10px; 
          padding: 10px 16px; 
          flex-shrink: 0; /* ✅ Tambah ini */
        }
        .sidebar-logo { 
          width: 28px; 
          height: 28px; 
          flex-shrink: 0; /* ✅ Tambah ini */
          min-width: 28px; /* ✅ Tambah ini */
        }
        .sidebar-title-wrapper { display: flex; flex-direction: column; }
        .sidebar-title { font-size: 1.15rem; font-weight: 800; color: var(--app-text); letter-spacing: 1.5px; }
        .sidebar-subtitle { font-size: 0.6rem; font-weight: 700; color: var(--app-accent-cyan); letter-spacing: 2px; margin-top: -3px; }
        .menu-label { font-family: 'Space Grotesk', sans-serif; }
      `]
})
export class AppComponent implements OnInit, OnDestroy {
  isDarkTheme = true;
  currentDateTime: Date = new Date();
  state!: PilingState;
  
  menuItems = [
    { title: 'Dashboard', url: '/dashboard', icon: 'layout-dashboard', exact: true },
    { title: 'Advanced Analytics', url: '/advanced-analytics', icon: 'line-chart', exact: false },
    { title: 'Live Operations', url: '/live-operations', icon: 'video', exact: false, badge: 'CAM', badgeColor: 'danger' },
    
    // ✅ TUKAR DI SINI: 'construct-outline' -> 'construction'
    { title: 'Before Operation', url: '/before-operation', icon: 'construction' }, 
  ];
  
  private timeInterval: any;
  private stateSub: any;
  
  constructor(private dataService: DataService) {
    // ✅ DIPERBETULKAN: Buang LucideAngularModule.pick() dari constructor. 
    // Ia sudah didaftarkan secara global dan betul di dalam main.ts
  }
  
  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkTheme = savedTheme ? savedTheme === 'dark' : true;
    this.applyThemeClass();
    
    this.timeInterval = setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
    
    this.stateSub = this.dataService.getState().subscribe(st => {
      this.state = st;
    });
  }
  
  ngOnDestroy() {
    if (this.timeInterval) clearInterval(this.timeInterval);
    if (this.stateSub) this.stateSub.unsubscribe();
  }
  
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    this.applyThemeClass();
  }
  
  private applyThemeClass() {
    if (this.isDarkTheme) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
  }
}