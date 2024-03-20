// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admin-login',
//   templateUrl: './admin-login.component.html',
//   styleUrl: './admin-login.component.css'
// })
// export class AdminLoginComponent {

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService, AdminLogin } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      adminID: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
  
    const adminID = this.loginForm.controls['adminID'].value;
    const password = this.loginForm.controls['password'].value;
  
    const adminLogin: AdminLogin = {
      adminID,
      password
    };
  
    this.apiService.adminLogin(adminLogin).subscribe(
      () => {
        this.router.navigate(['/dashboard']); // Redirect to dashboard on successful login
      },
      (error) => {
        this.error = error.message || 'An error occurred. Please try again.'; // Display error message
      }
    );
  }
}
