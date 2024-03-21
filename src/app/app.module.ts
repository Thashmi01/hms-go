import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';
import { FeedbackViewComponent } from './feedback-view/feedback-view.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { DashboardCustomerComponent } from './dashboard-customer/dashboard-customer.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    AppointmentViewComponent,
    FeedbackViewComponent,
    LoginComponent,
    AdminLoginComponent,
    DashboardComponent,
    RegisterCustomerComponent,
    RegisterAdminComponent,
    DashboardCustomerComponent,
    AppointmentComponent,
    CreateFeedbackComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
