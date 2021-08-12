import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookFlightService } from '../book-flight/book-flight.service';
import { ManageBookingService } from '../manage-bookings/manage-bookings.service';
import { BookingHistoryDetail } from '../model/bookHistoryDetail';
import { Flight } from '../model/flight';
import  jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

    // //download pdf file
    @ViewChild('htmlData') htmlData: any = ElementRef;

  viewDetailData!: BookingHistoryDetail;
  flightDetails!:Flight;
  constructor(private managBookService:ManageBookingService,private bookFlightService:BookFlightService) { }

  ngOnInit(): void {
    console.log(this.managBookService.viewdetailData);
    this.viewDetailData=this.managBookService.viewdetailData;
    this.bookFlightService.getFlightDetails(this.viewDetailData.flightId).subscribe((response)=>{
      console.log(response.body);
      this.flightDetails=response.body;
    })
  }

  public download():void {
    let data: any = document.getElementById('htmlData');
   
   html2canvas(data).then(canvas => {
       
       let fileWidth = 208;
       let fileHeight = canvas.height * fileWidth / canvas.width;
       
       const FILEURI = canvas.toDataURL('image/png')
       let PDF = new jsPDF('p', 'mm', 'a4');
       let position = 0;
       PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
       
       PDF.save('flightbooking.pdf');
   });   
  }

}
