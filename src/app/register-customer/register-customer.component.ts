// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register-customer',
//   templateUrl: './register-customer.component.html',
//   styleUrl: './register-customer.component.css'
// })
// export class RegisterCustomerComponent {

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService, Customer } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  registerForm: FormGroup;
  error: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
    ) { 
      this.registerForm = this.formBuilder.group({
        fName: ['', Validators.required],
        lName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      });
    }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }
    const fName = this.registerForm.get('fName')?.value; // Corrected form control name
    const lName = this.registerForm.get('lName')?.value; // Corrected form control name
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value; // Corrected form control name
  
    const registerData : Customer = {
      fName,
      lName,
      email,
      password,
      confirmPassword
    };
  
    this.apiService.createProfile(registerData).subscribe(
      () => {
        this.router.navigate(['']);
      },
      (error) =>{
        this.error = error.message || 'An error occurred. Please try again.';
      }
    );
  }
  
}
