import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageDiscountService {

  constructor(private httpClient:HttpClient) { }

  createCoupon(couponData:any){
    let endpoint="http://localhost:3000/discount";
    return this.httpClient.post<any>(endpoint,couponData,
  { observe: 'response' }).pipe(res => {
    return res;
  });
  }

  
  getCouponById(id:any){
    let endpoint="http://localhost:3000/discount/"+id;
    return this.httpClient.get<any>(endpoint,
  { observe: 'response' }).pipe(res => {
    return res;
  });
  }

  updateCoupon(id:any,couponData:any){
    let endpoint="http://localhost:3000/discount/"+id;
    return this.httpClient.put<any>(endpoint,couponData,
  { observe: 'response' }).pipe(res => {
    return res;
  });
  }

  getCoupon(){
    let endpoint="http://localhost:3000/discount/";
    return this.httpClient.get<any>(endpoint,
  { observe: 'response' }).pipe(res => {
    return res;
  });
  }
}
