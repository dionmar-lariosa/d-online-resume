import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', title: 'Home', component: LandingPageComponent },
  { path: 'auth', title: 'Auth', component: AuthComponent },
  {
    canActivate: [authGuard],
    path: 'dashboard',
    title: 'Dashboard',
    component: DashboardComponent,
  },
];
