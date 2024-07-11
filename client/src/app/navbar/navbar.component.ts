import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
} from '@angular/router';
import { AuthStore } from '../auth/auth.store';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    NgIf,
    MatMenuModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  authStore = inject(AuthStore);
  isOpen = true;
  pageTitle = '';

  ngOnInit() {
    this.setPageTitle();
  }

  setPageTitle() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((r) => {
          while (r.firstChild) {
            r = r.firstChild;
          }
          return r;
        }),
        filter((r) => r.outlet === 'primary')
      )
      .subscribe(
        (r) =>
          (this.pageTitle = (r.snapshot.routeConfig?.title as string) || '')
      );
  }

  onLogout() {
    localStorage.removeItem('user');
    this.authStore.logout();
    this.router.navigate(['auth']);
  }
}
