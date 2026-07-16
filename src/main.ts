// 1. Import JIT Compiler (Wajib untuk Vite)
import '@angular/compiler';

// 2. Import Zone.js (Wajib untuk Angular)
import 'zone.js';

// 3. Import CSS Project & Ionic CSS
import './index.css';
import '@ionic/angular/css/core.css';
import '@ionic/angular/css/normalize.css';
import '@ionic/angular/css/structure.css';
import '@ionic/angular/css/typography.css';
import '@ionic/angular/css/display.css';
import '@ionic/angular/css/padding.css';
import '@ionic/angular/css/float-elements.css';
import '@ionic/angular/css/text-alignment.css';
import '@ionic/angular/css/flex-utils.css';

// Angular & Ionic Providers
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouteReuseStrategy, withComponentInputBinding } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideAnimations } from '@angular/platform-browser/animations';

// ⭐ PENTING: Import Lucide Module dan SEMUA IKON YANG DIGUNAKAN DALAM APLIKASI
import { 
  LucideAngularModule, 
  LayoutDashboard, LineChart, Video, Bell, FileText, 
  Download, Settings, CloudRain, Shield, Activity, 
  RefreshCw, Compass, Sun, Moon, Calendar, User, 
  Eye, Plus, Minus, Check, AlertTriangle, Play, 
  Pause, ChevronRight, Menu, Info, HelpCircle,
  Volume2, VolumeX, CheckCircle2, Clock, Waves, Wind, 
  X, Ruler, Cpu, ArrowDownToLine, ArrowUpFromLine, 
  CornerDownRight, Radar, AlertCircle, ShieldCheck, 
  Siren, Cylinder, TrendingUp, HeartPulse, Layers,
  Construction, Wrench, Globe, BarChart, Cloud 
} from 'lucide-angular';

// ⭐ TAMBAHAN BARU: Import addIcons dari ionicons untuk mendaftarkan ikon Ionicon
import { addIcons } from 'ionicons';
import {
  options, construct, build, globe, speedometer, analytics, cloud,
  arrowForward, leaf, flash, ribbon, statsChart, trailSign,
  shieldCheckmark, apps, arrowBack, sparkles, refresh, copy,
  download, checkmarkCircle, warning, list, alertCircle, settings
} from 'ionicons/icons';

// ⭐ DAFTARKAN SEMUA IKON IONIC DI SINI 
// (Termasuk versi '-outline' supaya Ionic tidak mengeluarkan amaran di console)
addIcons({
  'options': options,
  'construct': construct,
  'build': build,
  'globe': globe,
  'globe-outline': globe,          // ✅ Fix untuk globe-outline
  'speedometer': speedometer,
  'analytics': analytics,
  'analytics-outline': analytics,  // ✅ Fix untuk analytics-outline
  'cloud': cloud,
  'cloud-outline': cloud,          // ✅ Fix untuk cloud-outline
  'arrow-forward': arrowForward,
  'leaf': leaf,
  'flash': flash,
  'ribbon': ribbon,
  'stats-chart': statsChart,
  'trail-sign': trailSign,
  'shield-checkmark': shieldCheckmark,
  'apps': apps,
  'arrow-back': arrowBack,
  'sparkles': sparkles,
  'refresh': refresh,
  'copy': copy,
  'download': download,
  'checkmark-circle': checkmarkCircle,
  'warning': warning,
  'list': list,
  'alert-circle': alertCircle,
  'settings': settings
});

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// Bootstrap Application
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ mode: 'md' }),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    
    // ⭐ DAFTARKAN SEMUA ICON LUCIDE DI SINI
    importProvidersFrom(LucideAngularModule.pick({
      LayoutDashboard, LineChart, Video, Bell, FileText, 
      Download, Settings, CloudRain, Shield, Activity, 
      RefreshCw, Compass, Sun, Moon, Calendar, User, 
      Eye, Plus, Minus, Check, AlertTriangle, Play, 
      Pause, ChevronRight, Menu, Info, HelpCircle,
      Volume2, VolumeX, CheckCircle2, Clock, Waves, Wind, 
      X, Ruler, Cpu, ArrowDownToLine, ArrowUpFromLine, 
      CornerDownRight, Radar, AlertCircle, ShieldCheck, 
      Siren, Cylinder, TrendingUp, HeartPulse, Layers,
      Construction, Wrench, Globe, BarChart, Cloud 
    }))
  ]
}).catch(err => console.error(err));