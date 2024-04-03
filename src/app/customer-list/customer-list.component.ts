import { Component, OnInit } from '@angular/core';
import { ApiService, Customer } from '../api.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers(): void {
    this.apiService.getAllCustomers().subscribe(
      (data: any) => {
        console.log(data.message)
        this.customers = data.message;
      },
      (error) => {
        console.error('Error fetching customers:', error);
      }
    );
  }
}
