import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register/register.service';
import { UserService } from '../service/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  success: boolean = false;
  fail:boolean=false;

  constructor(private registerService:RegisterService,private router:Router,private userService:UserService) { }

  ngOnInit(): void {
  }


  onSubmit(loginForm:any) {
    console.log(loginForm);
    this.registerService.validateUser(loginForm.form.controls.email.value,loginForm.form.controls.password.value).subscribe((response)=>{
      console.log(response);
      if(response.body.length==0){
        this.fail=true;
        this.success=false;
      }
      else{
        this.success=true;
        this.fail=false;
        // localStorage.setItem("email",loginForm.form.controls.email.value);
        this.registerService.setEmail(loginForm.form.controls.email.value);
        // this.registerService.setEmail(loginForm.form.controls.email.value);
        this.router.navigate(['bookFlight']);
        let u={userName:response.body[0].userName,
            role:response.body[0].role,  
            email:response.body[0].email,
            valid:true}
        this.userService.setUserValue(u);
      }
    })
  }


}