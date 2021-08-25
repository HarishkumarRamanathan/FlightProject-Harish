import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageAirlineService {

  constructor(private http:HttpClient) { }

  addFlight(airlineData:any) {
    console.log("airlineData",airlineData);
    return this.http.post<any>('http://ec2-3-15-15-120.us-east-2.compute.amazonaws.com:8989/api/manageflight-service/flights/addflight',airlineData,
   //return this.http.post<any>('http://localhost:8989/api/manageflight-service/flights/addflight',airlineData,
    
   { observe: 'response' }).pipe(res => {
      return res;
    });
  }
  updateFlight(airlineData:any) {
    console.log("airlineData",airlineData);
    let endpoint="http://ec2-3-15-15-120.us-east-2.compute.amazonaws.com:8989/api/manageflight-service/flights/update/"+airlineData.id;
    //let endpoint="http://localhost:8989/api/manageflight-service/flights/update/"+airlineData.id;
    
    return this.http.put<any>(endpoint,airlineData,
    { observe: 'response' }).pipe(res => {
      return res;
    });
  }

}
