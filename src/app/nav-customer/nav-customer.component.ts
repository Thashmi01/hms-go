import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-customer',
  templateUrl: './nav-customer.component.html',
  styleUrl: './nav-customer.component.css'
})
export class NavCustomerComponent implements OnInit {
  email: string = '';
  patientId: string = '';

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    // Get email and patientId from AuthService
    this.email = this.authService.getEmail();
    this.patientId = this.authService.getPatientId();
  }
  toggleLoginDetails(event: MouseEvent) {
    const loginDetails = document.getElementById('loginDetails');
    if (loginDetails) {
      // Get position of the clicked icon
      const iconPosition = (event.target as HTMLElement).getBoundingClientRect();
      // Position the login details near the icon
      loginDetails.style.top = iconPosition.bottom + 'px';
      loginDetails.style.left = iconPosition.left + 'px';
      loginDetails.classList.toggle('active');
    }
  }
}
