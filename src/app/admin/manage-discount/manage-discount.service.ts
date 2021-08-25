import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageDiscountService {

  constructor(private httpClient:HttpClient) { }

  createCoupon(couponData:any){
    let endpoint="http://ec2-3-15-15-120.us-east-2.compute.amazonaws.com:8989/api/discount-service/discount/add";
    //let endpoint="http://localhost:8989/api/discount-service/discount/add";
    
    return this.httpClient.post<any>(endpoint,couponData,
  { observe: 'response' }).pipe(res => {
    return res;
  });
  }

  
  getCouponById(id:any){
    let endpoint="http://ec2-3-15-15-120.us-east-2.compute.amazonaws.com:8989/api/discount-service/discount/getdiscount/"+id;
    //let endpoint="http://localhost:8989/api/discount-service/discount/getdiscount/"+id;
    
    return this.httpClient.get<any>(endpoint,
  { observe: 'response' }).pipe(res => {
    return res;
  });
  }

  updateCoupon(id:any,couponData:any){
    let endpoint="http://ec2-3-15-15-120.us-east-2.compute.amazonaws.com:8989/api/discount-service/discount/update/"+id;
    //let endpoint="http://localhost:8989/api/discount-service/discount/update/"+id;
    
    return this.httpClient.put<any>(endpoint,couponData,
  { observe: 'response' }).pipe(res => {
    return res;
  });
  }

  getCoupon(){
    let endpoint="http://ec2-3-15-15-120.us-east-2.compute.amazonaws.com:8989/api/discount-service/discount/alldiscount";
    //let endpoint="http://localhost:8989/api/discount-service/discount/alldiscount";
    
    return this.httpClient.get<any>(endpoint,
  { observe: 'response' }).pipe(res => {
    return res;
  });
  }

  deleteCoupon(id:any){
    let endpoint="http://ec2-3-15-15-120.us-east-2.compute.amazonaws.com:8989/api/discount-service/discount/deletediscount/"+id;
    //let endpoint="http://localhost:8989/api/discount-service/discount/deletediscount/"+id;
    
    return this.httpClient.delete<any>(endpoint,
  { observe: 'response' }).pipe(res => {
    return res;
  });
  }
}
