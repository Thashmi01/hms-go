// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-appointment-view',
//   templateUrl: './appointment-view.component.html',
//   styleUrl: './appointment-view.component.css'
// })
// export class AppointmentViewComponent {

// }

import { Component, OnInit } from '@angular/core';
import { ApiService, Appointment } from '../api.service';

@Component({
  selector: 'app-appointment-view',
  templateUrl: './appointment-view.component.html',
  styleUrls: ['./appointment-view.component.css']
})
export class AppointmentViewComponent implements OnInit {
  appointments: Appointment[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    // Assuming you have some way to get the patient ID
    const patientId = '123'; // Replace '123' with the actual patient ID
    this.apiService.getAppointment(patientId).subscribe(
      (data: Appointment[]) => {
        this.appointments = data;
      },
      (error) => {
        console.error('Error loading appointments:', error);
      }
    );
  }
}
