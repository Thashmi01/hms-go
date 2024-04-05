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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { DashboardCustomerComponent } from './dashboard-customer/dashboard-customer.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
  import { AppointmentAdminComponent } from './appointment-admin/appointment-admin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { RouterModule } from '@angular/router';
import { DeleteCustomerDetailsComponent } from './delete-customer-details/delete-customer-details.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminContentAdministrationComponent } from './admin-content-administration/admin-content-administration.component';
import { NavCustomerComponent } from './nav-customer/nav-customer.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';


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
    CreateFeedbackComponent,
    AppointmentAdminComponent,
    DashboardAdminComponent,
    DeleteCustomerDetailsComponent,
    HomeComponent,
    ContentComponent,
    AdminContentComponent,
    AdminContentAdministrationComponent,
    NavCustomerComponent,
    NavAdminComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
