import { Component, OnInit } from '@angular/core';
import { ApiService, Appointment } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-appointment-view',
  templateUrl: './appointment-view.component.html',
  styleUrls: ['./appointment-view.component.css']
})
export class AppointmentViewComponent implements OnInit {
  appointments: Appointment[] = [];

  constructor(
    private apiService: ApiService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    const patientId  = this.authService.getPatientId()
    this.apiService.getAppointment(patientId).subscribe(
      (data: any) => { // Use 'any' type to handle object data
        // Convert object data to array
        if (data != null) {
          const appointmentsArray: Appointment[] = Object.values(data.message);

          // Assign the array to 'this.appointments'
          this.appointments = appointmentsArray;

          // Log the appointments array
          // console.log(appointmentsArray);
        }
      },
      (error) => {
        console.error('Error loading appointments:', error);
      }
    );
  }
}