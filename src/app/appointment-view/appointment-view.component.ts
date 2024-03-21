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
    const patientId = 'PA7226'; // Replace '123' with the actual patient ID
    this.apiService.getAppointment(patientId).subscribe(
      (data: any) => { // Use 'any' type to handle object data
        // Convert object data to array
        if (data != null) {
          const appointmentsArray: Appointment[] = Object.values(data.message);

          // Assign the array to 'this.appointments'
          this.appointments = appointmentsArray;

          // Log the appointments array
          console.log(this.appointments);
        }
      },
      (error) => {
        console.error('Error loading appointments:', error);
      }
    );
  }
}