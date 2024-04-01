import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService, Appointment } from '../api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrl: './appointment.component.css'
  })
export class AppointmentComponent implements OnInit {
  appointmentForm: FormGroup;
  error: string = '';

  constructor(
    private formBuilder: FormBuilder, 
    private apiService: ApiService,
    private router: Router
  ) {
    this.appointmentForm = this.formBuilder.group({
      name : ['', Validators.required],
      phoneNumber : ['', Validators.required],
      purpose :  ['', Validators.required],
      dep : ['', Validators.required],
      email : ['', Validators.required],
      date : ['', Validators.required],
      time :['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.appointmentForm.invalid) {
      return;
    }
  
    const name = this.appointmentForm.controls['name'].value;
    const phoneNumber = this.appointmentForm.controls['phoneNumber'].value;
    const purpose = this.appointmentForm.controls['purpose'].value;
    const dep = this.appointmentForm.controls['dep'].value;
    const email = this.appointmentForm.controls['email'].value;
    const date = this.appointmentForm.controls['date'].value;
    const time = this.appointmentForm.controls['time'].value;

  
    const appointment: Appointment = {
      name,
      phoneNumber,
      purpose,
      dep,
      email,
      date,
      time
    };
  
    this.apiService.appointment(appointment).subscribe(
      () => {
        this.router.navigate(['/dashboard']); // Redirect to dashboard on successful login
      },
      (error) => {
        this.error = error.message || 'An error occurred. Please try again.'; // Display error message
      }
    );
  }
}
