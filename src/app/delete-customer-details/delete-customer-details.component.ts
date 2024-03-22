import { Component } from '@angular/core';
import { ApiService, Customer } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-customer-details',
  templateUrl: './delete-customer-details.component.html',
  styleUrls: ['./delete-customer-details.component.css'] // Corrected styleUrl to styleUrls
})

export class DeleteCustomerDetailsComponent {
 
  error: string = ''; // Initialize error property
 

  constructor(
    private apiService: ApiService,
    private router: Router
    ) { } // Inject your service here

  ngOnInit(): void {
    this.deleteAdmin();
  }

  deleteAdmin() {
    const adminId = 'PA6884'
    this.apiService.deleteById(adminId).subscribe(
      () => {
        // Success
        console.log('Admin deleted successfully');
        this.router.navigate(['customerpage']);

      },
      error => {
        // Error handling
        console.error('Error deleting admin:', error);
        this.error = error.error.message || 'An error occurred while deleting admin';
      }
    );
  }
}
