import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: LandingPageComponent },
  { path: 'auth', title: 'Auth', component: AuthComponent },
  { path: 'dashboard', title: 'Dashboard', component: DashboardComponent },
];
