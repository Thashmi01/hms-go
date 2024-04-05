import { Component, OnInit } from '@angular/core';
import { ApiService, Customer } from '../api.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customerId: string = '';
  customer!: any;
  error!: string;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // You can fetch initial customer details here if needed
  }

  onSubmit(): void {
    if (this.customerId.trim() !== '') {
      this.fetchCustomerDetails(this.customerId);
    }
  }

  fetchCustomerDetails(customerId: string): void {
    this.apiService.getById(customerId).subscribe(
      (data: any) => {
        this.customer = data.message; 
        console.log(this.customer);
      },
      (error) => {
        console.error('Error fetching customer details:', error);
        this.error = error;
        
      }
    );
  }
}
