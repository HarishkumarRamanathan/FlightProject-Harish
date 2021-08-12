import { Injectable } from '@angular/core';
import { Flight } from '../model/flight';

@Injectable({
  providedIn: 'root'
})
export class ManageScheduleService {

  flightData:any;
  constructor() { }

  setFlightData(data:Flight){
    this.flightData=data;
  }
}
