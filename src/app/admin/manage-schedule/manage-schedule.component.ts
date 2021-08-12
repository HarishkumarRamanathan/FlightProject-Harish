import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookFlightService } from 'src/app/book-flight/book-flight.service';
import { Flight } from 'src/app/model/flight';

@Component({
  selector: 'app-manage-schedule',
  templateUrl: './manage-schedule.component.html',
  styleUrls: ['./manage-schedule.component.scss']
})
export class ManageScheduleComponent implements OnInit {

  flightData:Flight[]=[];
  searchFlightForm:any;
  fliteredFlight:Flight[]=[];
  airlineNameUnique:any;
  searchedFlight:any;
  constructor(private bookFlightService:BookFlightService,private router:Router) { 
    this.bookFlightService.getFlights().subscribe((response)=>{
      this.flightData=response.body;
      this.airlineNameUnique= [...new Set(this.flightData.map(item => item.airlineName))];
      console.log("uni"+this.airlineNameUnique);
      this.fliteredFlight=response.body;
    });
    
    this.searchFlightForm = new FormGroup({
      'airlineName': new FormControl(null, [Validators.required]),
      'flightNumber': new FormControl(null, [Validators.required]),
      'instrumentUsed':new FormControl(null, [Validators.required])
    })

  }

  ngOnInit(): void {
  }

  changeFlightName(e:any) {
    console.log(this.searchFlightForm.controls.airlineName.value);
    // this.cityName.setValue(e.target.value, {
    //   onlySelf: true
    // })
    this.fliteredFlight = this.flightData.filter((f: Flight) => (f.airlineName === this.searchFlightForm.controls.airlineName.value));
    console.log(this.fliteredFlight);
  }

  onSubmit(){
    console.log(this.searchFlightForm);
    let airlineName=this.searchFlightForm.controls.airlineName.value;
    let flightNumber=this.searchFlightForm.controls.flightNumber.value;
    let instrumentUsed=this.searchFlightForm.controls.instrumentUsed.value;
    this.searchedFlight = this.flightData.filter((f: Flight) => (
      f.airlineName === airlineName && f.id===Number(flightNumber) && f.instrumentUsed===instrumentUsed));
  }

  viewFlightDetails(data:any){
    console.log(data);
    this.router.navigate(['admin/manageAirline',data.id]);
  }

}
