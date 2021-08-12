import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { BookingDetail } from '../model/bookingDetails';
import { Flight } from '../model/flight';

@Injectable({
  providedIn: 'root'
})
export class BookFlightService {

  bookingData:BookingDetail[]=[];
  constructor(private http: HttpClient) { }

  getFlights() {
    let endpoint="http://localhost:3000/flights";
    console.log(endpoint);
    return this.http.get<any>(endpoint,
    { observe: 'response' }).pipe(res => {
      return res;
    });
  }

  setBookingData(bookFlight:BookingDetail[]){
    this.bookingData=bookFlight;
  }

  updateFlight(bookFlight:Flight){
      let endpoint="http://localhost:3000/flights/"+bookFlight.id;
      console.log(endpoint);
      console.log(bookFlight);
      return this.http.put<any>(endpoint,bookFlight,
    { observe: 'response' }).pipe(res => {
      return res;
    });
  }
  errorHanler(error:any){
    console.log(error);
    return throwError(error);
  }
  updateBookingHistory(bookingData:any){
    let endpoint="http://localhost:3000/bookingHistory";
    console.log(endpoint);
    console.log(bookingData);
    return this.http.post<any>(endpoint,bookingData,
  { observe: 'response' }).pipe(res => {
    return res;
  });
  }

  getFlightDetails(id:string){
    let endpoint="http://localhost:3000/flights/"+id;
    console.log(endpoint);
    return this.http.get<any>(endpoint,
    { observe: 'response' }).pipe(res => {
      return res;
    });
  }
  deleteFlight(id:string){
    let endpoint="http://localhost:3000/flights/"+id;
    console.log(endpoint);
    return this.http.delete<any>(endpoint,
    { observe: 'response' }).pipe(res => {
      return res;
    });
  }
}

