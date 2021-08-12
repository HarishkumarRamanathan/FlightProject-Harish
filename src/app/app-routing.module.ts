import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { BookingDetailsComponent } from './book-flight/booking-details/booking-details.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { UserValidGuard } from './gaurd/user-valid.guard';
import { LoginComponent } from './login/login.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { RegisterComponent } from './register/register.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'bookFlight', component: BookFlightComponent ,canActivate:[UserValidGuard]},
  { path: 'manageBooking', component: ManageBookingsComponent ,canActivate:[UserValidGuard]},
  { path: 'bookingHistory', component: BookingHistoryComponent ,canActivate:[UserValidGuard]},
  {path:'bookingDetails',component:BookingDetailsComponent,canActivate:[UserValidGuard]},
  {path:'viewDetail',component:ViewDetailsComponent,canActivate:[UserValidGuard]},
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin/admin.module').then(m => m.AdminModule)
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
