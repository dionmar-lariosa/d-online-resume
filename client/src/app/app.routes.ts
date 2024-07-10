import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
  { path: '', title: 'home', component: LandingPageComponent },
  { path: 'auth', title: 'auth', component: AuthComponent },
];
