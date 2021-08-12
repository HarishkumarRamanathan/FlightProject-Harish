import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ManageDiscountService } from './manage-discount.service';

@Component({
  selector: 'app-manage-discount',
  templateUrl: './manage-discount.component.html',
  styleUrls: ['./manage-discount.component.scss']
})
export class ManageDiscountComponent implements OnInit {

  couponData:any;
  constructor(private couponService:ManageDiscountService,private router:Router) {
    this.couponService.getCoupon().subscribe((response)=>{
      this.couponData=response.body;
    })
  }

  ngOnInit(): void {
  }

  edit(f:any){
    this.router.navigate(['admin/addEditDiscount',f.id]);
  }

}
