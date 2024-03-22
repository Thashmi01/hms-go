
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, Customer } from '../api.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customerId: string = '';
  customer!: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.fetchCustomerDetails();
  }

  fetchCustomerDetails(): void {
   const customerId = 'PA7071'
    this.apiService.getById(customerId).subscribe(
      (data: any) => {
        this.customer = data.message; 
        console.log(this.customer)
      },
      (error) => {
        console.error('Error fetching customer details:', error);
      }
    );
  }
}
