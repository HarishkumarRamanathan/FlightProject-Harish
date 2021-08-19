import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageDiscountService {

  constructor(private httpClient:HttpClient) { }

  createCoupon(couponData:any){
    let endpoint="http://localhost:9003/discount/add";
    return this.httpClient.post<any>(endpoint,couponData,
  { observe: 'response' }).pipe(res => {
    return res;
  });
  }

  
  getCouponById(id:any){
    let endpoint="http://localhost:9003/discount/getdiscount/"+id;
    return this.httpClient.get<any>(endpoint,
  { observe: 'response' }).pipe(res => {
    return res;
  });
  }

  updateCoupon(id:any,couponData:any){
    let endpoint="http://localhost:9003/discount/update/"+id;
    return this.httpClient.put<any>(endpoint,couponData,
  { observe: 'response' }).pipe(res => {
    return res;
  });
  }

  getCoupon(){
    let endpoint="http://localhost:9003/discount/alldiscount";
    return this.httpClient.get<any>(endpoint,
  { observe: 'response' }).pipe(res => {
    return res;
  });
  }

  deleteCoupon(id:any){
    let endpoint="http://localhost:9003/discount/deletediscount/"+id;
    return this.httpClient.delete<any>(endpoint,
  { observe: 'response' }).pipe(res => {
    return res;
  });
  }
}
