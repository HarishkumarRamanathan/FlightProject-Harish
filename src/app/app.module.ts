import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { DatePipe } from '@angular/common';
import { BookingDetailsComponent } from './book-flight/booking-details/booking-details.component';
import { ManageDatePipe } from './pipe/manage-date.pipe';
import { BookingHistoryDatePipe } from './pipe/booking-history-date.pipe';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { OrderBookDetailPipe } from './pipe/order-book-detail.pipe';
import { BookingCancelDatePipe } from './pipe/booking-cancel-date.pipe';
import { ManageScheduleComponent } from './admin/manage-schedule/manage-schedule.component';
import { ManageDiscountComponent } from './admin/manage-discount/manage-discount.component';
import { ManageAirlinesComponent } from './admin/manage-airlines/manage-airlines.component';
import { AddEditCouponComponent } from './admin/manage-discount/add-edit-coupon/add-edit-coupon.component';
import { EditAirlinesComponent } from './admin/edit-airlines/edit-airlines.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    BookFlightComponent,
    ManageBookingsComponent,
    BookingHistoryComponent,
    BookingDetailsComponent,
    ManageDatePipe,
    BookingHistoryDatePipe,
    ViewDetailsComponent,
    OrderBookDetailPipe,
    BookingCancelDatePipe,
    ManageScheduleComponent,
    ManageDiscountComponent,
    ManageAirlinesComponent,
    AddEditCouponComponent,
    EditAirlinesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
