import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingHistoryDetail } from '../model/bookHistoryDetail';
import { UserService } from '../service/user-service';
import { ManageBookingService } from './manage-bookings.service';

@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.scss']
})
export class ManageBookingsComponent implements OnInit {

  manageBookData: BookingHistoryDetail[]=[];
  constructor(private manageBookService:ManageBookingService,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.manageBookService.getBooking(this.userService.user.email).subscribe((response)=>{
      console.log(response);
      this.manageBookData=response.body;
    })
  }

  viewDetails(viewDetail:BookingHistoryDetail){
    this.manageBookService.setViewDetail(viewDetail);
    this.router.navigate(['/viewDetail']);
  }

  cancelTicket(bookingHistory:BookingHistoryDetail){
    this.manageBookService.cancelTicket(bookingHistory.id.toString()).subscribe((response)=>{
      console.log(response);
      this.manageBookService.getBooking(this.userService.user.email).subscribe((response)=>{
        console.log(response);
        this.manageBookData=response.body;
      })
    });
  }

}
