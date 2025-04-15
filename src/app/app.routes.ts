import { Routes } from '@angular/router';

export const routes: Routes = [

  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'login',
    loadComponent: () => import('./core/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./core/auth/register/register.component').then(m => m.RegisterComponent)
  },
];
