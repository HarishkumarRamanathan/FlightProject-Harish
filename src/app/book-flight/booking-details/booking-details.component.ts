import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/model/flight';
import { UserService } from 'src/app/service/user-service';
import { BookFlightService } from '../book-flight.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {

  row = [
    {
      name : '',
      gender: '',
      age: '',
      meal:'no',
      seatNumber:''
    }
  ]
  bookingData!: Flight;
  totalPrice:number=0;
  returnBookingData:any;
  bookFlag:boolean=false;
  constructor(public bookService:BookFlightService,private userService:UserService) { }

  ngOnInit(): void {
    this.bookingData=this.bookService.bookingData[0].bookFlight;
    if(this.bookService.bookingData.length==2){
      this.returnBookingData=this.bookService.bookingData[1].bookFlight;  
    }
  }
 
  
  addTable() {
    const obj = {
      name: '',
      gender: '',
      age: '',
      meal:'no',
      seatNumber:''
    }
    this.row.push(obj)
  }
  
  deleteRow(x:any){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.row.splice(x, 1 );
    }   
    
  } 

  clearRow(x:any){
    this.row[x].name=''
    this.row[x].gender=''
    this.row[x].age=''
    this.row[x].meal=''
    this.row[x].seatNumber=''
  }

  // calculatePrice(){
  //   let count:number=this.row.length;
  //     if(this.bookService.bookingData.length==2){
  //       this.totalPrice=(this.bookingData.price*count)+(this.returnBookingData.price*count);
  //     }else{
  //       this.totalPrice=(this.bookingData.price*count);
  //     }
      
  // }
  confirmBooking(){ 
    let data;
    if(this.bookService.bookingData.length==2){
      let departFlightCount= this.bookingData;
      departFlightCount.totalNoOfSeats=this.bookingData.totalNoOfSeats-this.row.length;
      this.bookService.updateFlight(departFlightCount).subscribe((response)=>{
        if(response){
          let returnFlight= this.returnBookingData;
          returnFlight.totalNoOfSeats=this.returnBookingData.totalNoOfSeats-this.row.length;
          this.bookService.updateFlight(returnFlight).subscribe((response)=>{
            let departData={
              email:this.userService.user.email,
              flightId:this.bookingData.id,
              flightName:this.bookingData.airlineName,
              dateOfJourney:this.bookService.bookingData[0].departDate,
              price:this.bookingData.price*this.row.length,
              passengerDetails:this.row
            }
            let returnData={
              email:this.userService.user.email,
              flightId:this.returnBookingData.id,
              flightName:this.returnBookingData.airlineName,
              dateOfJourney:this.bookService.bookingData[1].returnDate,
              price:this.returnBookingData.price*this.row.length,
              passengerDetails:this.row
            }
            this.bookService.updateBookingHistory(departData).subscribe((response:any)=>{
              this.bookService.updateBookingHistory(returnData).subscribe((response:any)=>{
                this.afterBooking();
              })
            })
          })
        }
      })
     
  }else{
    let dataFlight= this.bookingData;
    dataFlight.totalNoOfSeats=this.bookingData.totalNoOfSeats-this.row.length;
    this.bookService.updateFlight(dataFlight).subscribe((response)=>{
      data={
        email:this.userService.user.email,
        flightId:this.bookingData.id,
        flightName:this.bookingData.airlineName,
        dateOfJourney:this.bookService.bookingData[0].departDate,
        price:this.bookingData.price*this.row.length,
        passengerDetails:this.row
      }
      this.bookService.updateBookingHistory(data).subscribe((response:any)=>{
       this.afterBooking();
      })
      
    });
     
  }
  }

  afterBooking(){
    this.bookFlag=true;
   this.row = [
      {
        name : '',
        gender: '',
        age: '',
        meal:'no',
        seatNumber:''
      }
    ]
  }

}
