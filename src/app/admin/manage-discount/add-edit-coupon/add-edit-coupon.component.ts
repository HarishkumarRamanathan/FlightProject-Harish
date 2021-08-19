import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ManageDiscountService } from '../manage-discount.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-edit-coupon',
  templateUrl: './add-edit-coupon.component.html',
  styleUrls: ['./add-edit-coupon.component.scss']
})
export class AddEditCouponComponent implements OnInit {
  
  couponForm:FormGroup;
 //minDate: any;
  successMsg: boolean=false;
  isAddMode: any;
  id:any;
  constructor(private datePipe:DatePipe,private manageDiscountService:ManageDiscountService,private activateRoute:ActivatedRoute) { 
    let currentDate=Date.now();
    this.id = this.activateRoute.snapshot.params['id'];
    this.isAddMode = !this.id;
    //this.minDate=this.datePipe.transform(currentDate, "yyyy-MM-dd");
    this.couponForm = new FormGroup({
      'couponCode': new FormControl(null, [Validators.required]),
      //'startDate': new FormControl(null, [Validators.required]),
      //'endDate': new FormControl(null, [Validators.required]),
      'maxAmount': new FormControl(null, [Validators.required]),
      'percentage': new FormControl(null, [Validators.required,(control => this.maxPercentage(this.couponForm))]),
    }
    );
  }
  maxPercentage(couponForm: FormGroup){
    if(couponForm && couponForm.controls && couponForm.controls['percentage']){
      const control = couponForm.controls['percentage'].value;
      return (control >0 || control<=100) ? null : { mismatch: true };
    }
    return null;
  }

  ngOnInit(): void {
    if (!this.isAddMode) {
      this.manageDiscountService.getCouponById(this.id)
          .pipe(first())
          .subscribe((res:any) => {
            this.couponForm.patchValue(res.body);
          });    
  }  
  }

  onSubmit(){
    console.log(this.couponForm.value);
    //let startDat = new Date(this.couponForm.controls.startDate.value);
    //let endDat = new Date(this.couponForm.controls.endDate.value);
    //let startDateVal = this.datePipe.transform(startDat, "dd-MM-yyyy");
    //let endDateVal = this.datePipe.transform(endDat, "dd-MM-yyyy");
    var couponData={
      couponCode:this.couponForm.controls.couponCode.value,
      //startDate:startDateVal,
      //endDate:endDateVal,
      maxAmount:this.couponForm.controls.maxAmount.value,
      percentage:this.couponForm.controls.percentage.value,
    }
    if(this.isAddMode){
      this.manageDiscountService.createCoupon(couponData).subscribe((response)=>{
        console.log(response);
        this.successMsg=true;
        this.couponForm.reset();
      })
    } else{
      this.manageDiscountService.updateCoupon(this.id,couponData).subscribe((response)=>{
        console.log(response);
        this.successMsg=true;
        this.couponForm.reset();
      })
    }
    
  }

}
