import { Component } from '@angular/core';
import { ApiService, Customer } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-customer-details',
  templateUrl: './delete-customer-details.component.html',
  styleUrls: ['./delete-customer-details.component.css'] // Corrected styleUrl to styleUrls
})

export class DeleteCustomerDetailsComponent {
  customerId: string = '';
  customer!: any;
  error!: string;
 

  constructor(
    private apiService: ApiService,
    private router: Router
    ) { } // Inject your service here

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.customerId.trim() !== '') {
      this.fetchCustomerDetails(this.customerId);
    }
  }

  fetchCustomerDetails(customerId: string): void {
    this.apiService.deleteById(customerId).subscribe(
      () => {
        // Success
        console.log('Admin deleted successfully');
        this.customer = customerId;

      },
      (error) => {
        this.error = error;
        console.error('Error fetching customer details:', error);
      }
    );
  }
}
