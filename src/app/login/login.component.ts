
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService, Login } from '../api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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
    private router: Router,
    private authService: AuthService
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
      (data : any) => {
        console.log("----------------------",data)
        const { email, patientid } = data;
        this.authService.setEmail(email); // Set email in AuthService
        this.authService.setPatientId(patientid);
        this.router.navigate(['customerpage']); // Redirect to dashboard on successful login
      },
      (error) => {
        this.error = error.message || 'An error occurred. Please try again.'; // Display error message
      }
    );
  }
}
