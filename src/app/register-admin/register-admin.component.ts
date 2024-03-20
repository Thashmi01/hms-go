// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register-admin',
//   templateUrl: './register-admin.component.html',
//   styleUrl: './register-admin.component.css'
// })
// export class RegisterAdminComponent {

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService, CreateAdmin } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {
  registerForm: FormGroup;
  error: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) { 
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      adminID: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const name = this.registerForm.get('name')?.value;
    const adminID = this.registerForm.get('adminID')?.value;
    const password = this.registerForm.get('password')?.value;

    const registerData: CreateAdmin = {
      name,
      adminID,
      password
    };

    this.apiService.createAdmin(registerData).subscribe(
      () => {
        this.router.navigate(['']); // Redirect to login or dashboard page
      },
      (error) =>{
        this.error = error.message || 'An error occurred. Please try again.';
      }
    );
  }
}
