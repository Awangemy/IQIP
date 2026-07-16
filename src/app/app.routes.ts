import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then(m => m.DashboardPage)
  },
  {
    path: 'advanced-analytics',
    loadComponent: () => import('./advanced-analytics/advanced-analytics.page').then(m => m.AdvancedAnalyticsPage)
  },
  {
    path: 'before-operation',
    loadComponent: () => import('./before-operation/before-operation.page').then(m => m.BeforeOperationPage)
  },
  {
    path: 'live-operations',
    loadComponent: () => import('./live-operations/live-operations.page').then(m => m.LiveOperationsPage)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
