import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingDetail } from '../model/bookingDetails';
import { Flight } from '../model/flight';
import { BookFlightService } from './book-flight.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})
export class BookFlightComponent implements OnInit {
  data: Flight[] = [];
  result: Flight[] = [];
  returnFlights: Flight[] = [];
  oneway: boolean = true;
  departFlightData!: Flight;
  returnFlightData!: Flight;
  departDate: any;
  returnDate: any;
  day: string[] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  minDate: any;
  constructor(private bookService: BookFlightService, private datePipe: DatePipe, private router: Router) {
    let currentDate = Date.now();
    this.minDate = this.datePipe.transform(currentDate, "yyyy-MM-dd");
  }

  ngOnInit(): void {
    this.bookService.getFlights().subscribe((response) => {
      if (response && response.body) {
        this.data = response.body;
      }
    })
  }

  onSubmit(flightForm: any) {
    let fromPlace = flightForm.form.get('fromPlace').value;
    let toPlace = flightForm.form.get('toPlace').value;
    let newDate = new Date(flightForm.form.get('depart').value);

    this.departDate = this.datePipe.transform(newDate, "yyyy-MM-dd");
    let departDay = this.day[newDate.getDay()];
    //alert(Flight);
    this.result = this.data.filter((f: Flight) => (f.fromPlace === fromPlace.toLowerCase()
      && f.toPlace === toPlace.toLowerCase()
      && (f.scheduledDays.includes('daily') 
      || f.scheduledDays.includes(departDay))));
    //alert(this.result.length);
    if (!this.oneway) {
      let returnDate = new Date(flightForm.form.get('return').value);
      if (this.datePipe.transform(returnDate, "yyyy-MM-dd")) {
        this.returnDate = this.datePipe.transform(returnDate, "yyyy-MM-dd");
      }

      let returnDay = this.day[returnDate.getDay()];
      this.returnFlights = this.data.filter((f: Flight) => (f.fromPlace === toPlace.toLowerCase() && f.toPlace === fromPlace.toLowerCase() && (f.scheduledDays.includes('daily') || f.scheduledDays.includes(returnDay))));
    }


  }

  bookDepartFlight(data: any) {
    this.departFlightData = data;
  }

  bookReturnFlight(data: any) {
    this.returnFlightData = data;
  }

  bookFlight() {
    let book: BookingDetail[] = [];
    if (this.departFlightData) {
      let bd = {
        departDate: this.departDate,
        bookFlight: this.departFlightData,
        returnDate: this.returnDate
      }
      book.push(bd);
    }
    if (this.returnFlightData) {
      let bd = {
        departDate: this.departDate.toString(),
        bookFlight: this.returnFlightData,
        returnDate: this.returnDate.toString()
      }
      book.push(bd);
    }
    this.bookService.setBookingData(book);
    this.router.navigate(['/bookingDetails'])

  }

}
