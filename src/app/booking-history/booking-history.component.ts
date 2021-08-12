import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BookingDetailsComponent } from '../book-flight/booking-details/booking-details.component';
import { ManageBookingService } from '../manage-bookings/manage-bookings.service';
import { BookingHistoryDetail } from '../model/bookHistoryDetail';
import { UserService } from '../service/user-service';



@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {



  manageBookData:BookingHistoryDetail[]=[];
  constructor(private manageBookService:ManageBookingService,private userService:UserService,public router:Router) { }

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

 
 
}
