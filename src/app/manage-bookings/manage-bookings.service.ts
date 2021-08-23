import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookingHistoryDetail } from '../model/bookHistoryDetail';

@Injectable({
  providedIn: 'root'
})
export class ManageBookingService {

  viewdetailData!: BookingHistoryDetail;
  constructor(private http: HttpClient) { }

  getBooking(email:string) {
    let endpoint="http://localhost:9004/"+email;
    console.log(endpoint);
    return this.http.get<any>(endpoint,
    { observe: 'response' }).pipe(res => {
      return res;
    });
  }

  setViewDetail(value:BookingHistoryDetail){
    this.viewdetailData=value;
  }

  cancelTicket(id:string){
    let endpoint="http://localhost:8989/api/booking-service/cancel/"+id;
    console.log(endpoint);
    return this.http.delete<any>(endpoint,
    { observe: 'response' }).pipe(res => {
      return res;
    });
  }
}
