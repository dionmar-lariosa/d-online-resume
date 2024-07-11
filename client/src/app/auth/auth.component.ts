import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  constructor(private fb: FormBuilder) {}
  isPasswordHide = true;

  loginForm!: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;
  registerForm!: FormGroup<{
    name: FormControl<string | null>;
    email: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onLoginSubmit() {
    console.log(this.loginForm.value, 'onLoginSubmit');
  }

  onRegisterSubmit() {
    console.log(this.registerForm.value, 'onRegisterSubmit');
  }
}
