import { Component, OnInit } from '@angular/core';
import { ApiService, Appointment, Prediction } from '../api.service';

@Component({
  selector: 'app-appointment-admin',
  templateUrl: './appointment-admin.component.html',
  styleUrls: ['./appointment-admin.component.css']
})
export class AppointmentAdminComponent implements OnInit {
  appointments: Appointment[] = [];
  predictions: Prediction[] = [];
  showPredictionTable: boolean = false; // Flag to control prediction table visibility

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.apiService.getAppointments().subscribe(
      (data: any) => {
        if (data != null) {
          const appointmentsArray: Appointment[] = Object.values(data.message);
          this.appointments = appointmentsArray;
        }
      },
      (error) => {
        console.error('Error loading appointments:', error);
      }
    );
  }

  loadPrediction(): void {
    this.apiService.getPrediction().subscribe(
      (data: any) => {
        if (data != null) {
          const predictionsarray: Prediction[] = Object.values(data.message);
          this.predictions = predictionsarray;
          this.showPredictionTable = true; // Set flag to true when predictions are loaded
        }
      },
      (error) => {
        console.error('Error loading prediction:', error);
      }
    );
  }
}
