import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthStore } from './auth/auth.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  authStore = inject(AuthStore);
  constructor() {
    const user = localStorage.getItem('user');
    if (user) {
      this.authStore.init(JSON.parse(user));
    } else {
      this.authStore.logout();
    }
  }
}
