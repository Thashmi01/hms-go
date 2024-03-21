// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';
import { FeedbackViewComponent } from './feedback-view/feedback-view.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { DashboardCustomerComponent } from './dashboard-customer/dashboard-customer.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'register', component: RegisterCustomerComponent},
  { path: 'registeradmin', component: RegisterAdminComponent},
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/:id', component: CustomerDetailsComponent },
  { path: 'appointments', component: AppointmentViewComponent },
  { path: 'feedback', component: CreateFeedbackComponent },
  { path: 'feedbacks', component: FeedbackViewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'appointment', component: AppointmentComponent},
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'customerpage', component: DashboardCustomerComponent },
  { path: '**', redirectTo: '' } // Redirect to login for any other route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
