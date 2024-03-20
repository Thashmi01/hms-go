// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-customer-details',
//   templateUrl: './customer-details.component.html',
//   styleUrl: './customer-details.component.css'
// })
// export class CustomerDetailsComponent {

// }

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
  customer!: Customer;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.customerId = params['id'];
      this.fetchCustomerDetails();
    });
  }

  fetchCustomerDetails(): void {
    this.apiService.getById(this.customerId).subscribe(
      (data: Customer) => {
        this.customer = data;
      },
      (error) => {
        console.error('Error fetching customer details:', error);
      }
    );
  }
}
