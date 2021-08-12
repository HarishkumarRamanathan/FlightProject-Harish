import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register/register.service';
import { UserService } from '../service/user-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userLogin:boolean=false;
  constructor(private router:Router,private registerService:RegisterService,public userservice:UserService) { }

  ngOnInit(): void {
    this.registerService.userEmailData.subscribe((response)=>{
      if(response.length>0){
        this.userLogin=true;
      }else{
        this.userLogin=false;
      }
    })
  }

  redirect(){
    this.registerService.setEmail('');
    this.router.navigate(['/login']);
    this.userLogin=false;
    this.userservice.user.valid=false;
    this.userservice.user.role='user';
  }

}
