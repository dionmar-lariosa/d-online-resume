import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthComponent } from './auth/auth.component';
import { authGuard } from './auth/auth.guard';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: LandingPageComponent },
  { path: 'auth', title: 'Auth', component: AuthComponent },
  {
    canActivate: [authGuard],
    path: 'resume',
    title: 'Resume',
    component: ResumeComponent,
  },
];
