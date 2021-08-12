import { Component, OnInit } from '@angular/core';
import { Flight } from '../../model/flight';
import { BookFlightService } from '../../book-flight/book-flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-airlines',
  templateUrl: './edit-airlines.component.html',
  styleUrls: ['./edit-airlines.component.scss']
})
export class EditAirlinesComponent implements OnInit {
  data: Flight[] = [];
  result: Flight[] = [];

  constructor(private bookService: BookFlightService , private router: Router) { }

  ngOnInit(): void {
    this.bookService.getFlights().subscribe((response) => {
      if (response && response.body) {
        this.result = response.body;
      }
    })
  }
  
  // onSubmit(editAirlineForm: any) {
    
  //   let airlineId = editAirlineForm.form.get('airlineId').value;
  //   //alert("inside "+this.data);
  //   this.result = this.data;
  //   this.bookService.updateFlight
  //   //alert(this.result);

  // }

  updateAirline(f:any){
    this.router.navigate(['admin/manageAirline',f.id])
  }
  deleteAirline(f:any)
{
  this.bookService.deleteFlight(f.id).subscribe((response)=>{
    console.log(response)
    this.bookService.getFlights().subscribe((response) => {
      if (response && response.body) {
        this.result = response.body;
      }
    })
    
  })
}
}
