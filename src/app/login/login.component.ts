// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService, Login } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
  
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
  
    const loginData: Login = {
      email,
      password
    };
  
    this.apiService.login(loginData).subscribe(
      () => {
        this.router.navigate(['']); // Redirect to dashboard on successful login
      },
      (error) => {
        this.error = error.message || 'An error occurred. Please try again.'; // Display error message
      }
    );
  }
}
