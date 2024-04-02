import { Component,ElementRef} from '@angular/core';

@Component({
  selector: 'app-dashboard-customer',
  templateUrl: './dashboard-customer.component.html',
  styleUrl: './dashboard-customer.component.css'
})
export class DashboardCustomerComponent {
  username: string = 'JohnDoe';
  email: string = 'johndoe@example.com';

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
