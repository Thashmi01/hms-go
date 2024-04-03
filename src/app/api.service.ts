import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define interfaces for the models
export interface Customer {
  fName?: string;
  lName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  patientID?: string;
}

export interface Prediction{
  diseasename?: string;
  severity?: number;
}

export interface Appointment {
  name?: string;
  patientid?: string;
  phoneNumber?: string;
  purpose?: string;
  email?: string;
  date?: string;
  time?: string;
}

export interface Login {
  email?: string;
  password?: string;
}

export interface Feedback {
  name?: string;
  email?: string;
  subject?: string;
  phone?: string;
  message?: string;
}

export interface AdminLogin {
  adminID?: string;
  password?: string;
}

export interface CreateAdmin {
  name?: string;
  adminID?: string;
  password?: string;
}

export interface GetById {
  patientID?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080'; // Base URL of your backend server

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}/getalldata`);
  }

  getById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseUrl}/getbyid?id=${id}`);
  }

  createProfile(profile: Customer): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, profile);
  }

  appointment(profile: Appointment): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/appointment`, profile);
  }

  login(profile: Login): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, profile);
  }

  feedback(profile: Feedback): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/feedback`, profile);
  }

  createAdmin(profile: CreateAdmin): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/createadmin`, profile);
  }

  adminLogin(profile: AdminLogin): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/adminlogin`, profile);
  }

  deleteById(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/deletebyid?id=${id}`);
  }

  getAppointment(patientId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/viewappointment?patientid=${patientId}`);
  }

  viewFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.baseUrl}/viewallfeedback`);
  }

  getAppointments(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/viewallappointments`); 
  }

  getPrediction(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/predict`); 
  }

}
