import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model/login';
import { RegisterService } from '../register/register.service';
import { UserService } from '../service/user-service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  success: boolean = false;
  fail: boolean = false;
  login: any;
  token: any;
  constructor(private registerService: RegisterService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }


  onSubmit(loginForm: any) {
    this.login = new Login(loginForm.form.controls.email.value, loginForm.form.controls.password.value);

    this.registerService.generateJwtToken(this.login).subscribe((response) => {
      console.log("JWT token...." + JSON.stringify(response.body.token));
      this.token = response.body.token;

      //var token = "eyJ0eXAiO.../// jwt token";
      var decoded:any = jwt_decode(this.token);

      console.log(decoded);

      if (!response.body.token) {
        this.fail = true;
        this.success = false;
      }
      else {
        this.success = true;
        this.fail = false;
        // localStorage.setItem("email",loginForm.form.controls.email.value);
        this.registerService.setEmail(loginForm.form.controls.email.value);
        // this.registerService.setEmail(loginForm.form.controls.email.value);
        
        this.router.navigate(['bookFlight']);
        console.log(response.body)
        let u = {
        
          userName: decoded.sub,
          role: decoded.role,
          email: decoded.sub,
          valid: true,
          token:this.token
        }
        this.userService.setUserValue(u);
      }

    })
    // console.log('tokenn:'+this.token.toString());
    // console.log(loginForm);
    // this.registerService.validateUser(loginForm.form.controls.email.value, loginForm.form.controls.password.value).subscribe((response) => {
    //   console.log(response);
    //   if (response.body.length == 0) {
    //     this.fail = true;
    //     this.success = false;
    //   }
    //   else {
    //     this.success = true;
    //     this.fail = false;
    //     // localStorage.setItem("email",loginForm.form.controls.email.value);
    //     this.registerService.setEmail(loginForm.form.controls.email.value);
    //     // this.registerService.setEmail(loginForm.form.controls.email.value);
    //     this.router.navigate(['bookFlight']);
    //     let u = {
    //       userName: response.body[0].userName,
    //       role: response.body[0].role,
    //       email: response.body[0].email,
    //       valid: true
    //     }
    //     this.userService.setUserValue(u);
    //   }
    // })
  }


}