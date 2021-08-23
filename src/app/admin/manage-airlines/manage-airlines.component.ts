import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookFlightService } from 'src/app/book-flight/book-flight.service';
import { ManageAirlineService } from './manage-airline.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-manage-airlines',
  templateUrl: './manage-airlines.component.html',
  styleUrls: ['./manage-airlines.component.scss']
})
export class ManageAirlinesComponent implements OnInit {
  airlineCreateForm: FormGroup;
  flightDays = [
  {
    name: "Sunday",
    value: "sunday"
  },
  {
    name: "Monday",
    value: "monday"
  },
  {
    name: "Tuesday",
    value: "tuesday"
  },
  {
    name: "Wednesday",
    value: "wednesday"
  },
  {
    name: "Thursday",
    value: "thursday"
  },
  {
    name: "Friday",
    value: "friday"
  },
  {
    name: "Saturday",
    value: "saturday"
  }]

  mealList = [{
    name: "Veg",
    value: "veg"
  },{
    name: "Non veg",
    value: "non-veg"
  },{
    name: "None",
    value: "none"
  }]

  mealVal=["veg","non-veg","none"];
  dayVal=["daily","sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
  successMsg: boolean=false;
  id:any;
  isAddMode:any;
  flightData:any;
  constructor(private formBuilder:FormBuilder,private manageAirlineService:ManageAirlineService,
    private activateRoute:ActivatedRoute,private bookService:BookFlightService) {
    this.id = this.activateRoute.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.airlineCreateForm = new FormGroup({
      'airlineName': new FormControl(null, [Validators.required]),
      'fromPlace': new FormControl(null, [Validators.required]),
      'toPlace': new FormControl(null, [Validators.required]),
      'startDateTime': new FormControl(null, [Validators.required]),
      'endDateTime': new FormControl(null, [Validators.required]),
      'scheduledDays': this.formBuilder.array(this.flightDays.map(x => !1)),
      'instrumentUsed': new FormControl(null, [Validators.required]),
      'totalNoOfSeats': new FormControl(null, [Validators.required]),
      'totalNoOfBussinessSeats': new FormControl(null, [Validators.required]),
      'price': new FormControl(null, [Validators.required]),
      'noOfRows': new FormControl(null, [Validators.required]),
      'meal':  this.formBuilder.array(this.mealList.map(x =>!1)),

    }
    );
    if (!this.isAddMode) {
      this.bookService.getFlightDetails(this.id)
          .pipe(first())
          .subscribe((res:any) => {
            this.airlineCreateForm.patchValue(res.body);
           let mealArr=[false,false,false];
           for(let c of res.body.meal){
            let i=this.mealVal.indexOf(c);
            mealArr[i]=true;
           }
           this.airlineCreateForm.patchValue({
             meal:mealArr
           })
           let dayArr=[false,false,false,false,false,false,false,false];
           for(let c of res.body.scheduledDays){
            let i=this.dayVal.indexOf(c);
            dayArr[i]=true;
           }
           this.airlineCreateForm.patchValue({
             scheduledDays:dayArr
           })
          });    
  }  
  }

  ngOnInit(): void {
  }
  onSubmit() {
    let daysOfFlight=[];
    for(let i=0;i<this.airlineCreateForm.controls.scheduledDays.value.length;i++){
      if(this.airlineCreateForm.controls.scheduledDays.value[i]===true){
        daysOfFlight.push(this.flightDays[i].value);
      }
    }
    let mealsSelected=[];
    for(let i=0;i<this.airlineCreateForm.controls.meal.value.length;i++){
      if(this.airlineCreateForm.controls.meal.value[i]===true){
        mealsSelected.push(this.mealList[i].value);
      }
    }
    
    if(this.isAddMode){
      let airlineData={
        airlineName: this.airlineCreateForm.controls.airlineName.value,
        fromPlace: this.airlineCreateForm.controls.fromPlace.value.toLowerCase(),
        toPlace: this.airlineCreateForm.controls.toPlace.value.toLowerCase(),
        startDateTime: this.airlineCreateForm.controls.startDateTime.value,
        endDateTime: this.airlineCreateForm.controls.endDateTime.value,
        scheduledDays: daysOfFlight,
        instrumentUsed: this.airlineCreateForm.controls.instrumentUsed.value,
        totalNoOfSeats: this.airlineCreateForm.controls.totalNoOfSeats.value,
        totalNoOfBussinessSeats: this.airlineCreateForm.controls.totalNoOfBussinessSeats.value,
        price: this.airlineCreateForm.controls.price.value,
        noOfRows: this.airlineCreateForm.controls.noOfRows.value,
        meal:mealsSelected,
        status:'active'
      }
      this.manageAirlineService.addFlight(airlineData).subscribe((response)=>{
        this.airlineCreateForm.reset();
        this.successMsg=true;
      })
    }else{
      let airlineData={
        id:Number(this.id),
        airlineName: this.airlineCreateForm.controls.airlineName.value,
        fromPlace: this.airlineCreateForm.controls.fromPlace.value.toLowerCase(),
        toPlace: this.airlineCreateForm.controls.toPlace.value.toLowerCase(),
        startDateTime: this.airlineCreateForm.controls.startDateTime.value,
        endDateTime: this.airlineCreateForm.controls.endDateTime.value,
        scheduledDays: daysOfFlight,
        instrumentUsed: this.airlineCreateForm.controls.instrumentUsed.value,
        totalNoOfSeats: this.airlineCreateForm.controls.totalNoOfSeats.value,
        totalNoOfBussinessSeats: this.airlineCreateForm.controls.totalNoOfBussinessSeats.value,
        price: this.airlineCreateForm.controls.price.value,
        noOfRows: this.airlineCreateForm.controls.noOfRows.value,
        meal:mealsSelected,

      }
      this.manageAirlineService.updateFlight(airlineData).subscribe((response)=>{
        this.airlineCreateForm.reset();
        this.successMsg=true;
      })
    }
   

  }
}
