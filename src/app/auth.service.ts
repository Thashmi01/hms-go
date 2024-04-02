import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private email: string = '';
  private patientId: string = '';

  constructor() { }

  setEmail(email: string): void {
    this.email = email;
  }

  getEmail(): string {
    return this.email;
  }

  setPatientId(patientId: string): void {
    this.patientId = patientId;
  }

  getPatientId(): string {
    return this.patientId;
  }
}
