import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm:FormGroup;
  user:any;
  emailExist=false;
  showMsg=false;
  constructor(private formBuilder: FormBuilder,private registerService:RegisterService,private router:Router) {
    this.registrationForm = new FormGroup({
      'userName': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'cnfmPassword': new FormControl(null, [Validators.required,(control => this.confirmPassword(this.registrationForm))])
    }
    );
  }

  ngOnInit(): void {
    // this.registerService.getUser().subscribe((response)=>{
    //   console.log("response",response.body);
    // })
  }
  confirmPassword(registrationForm:any){
    if(registrationForm && registrationForm.controls && registrationForm.controls['password'] && registrationForm.controls['cnfmPassword']){
      const control = registrationForm.controls['password'].value;
      const matchingControl = registrationForm.controls['cnfmPassword'].value;
      return control === matchingControl ? null : { mismatch: true };
    }
    return null;
  }

onSubmit() {
  // TODO: Use EventEmitter with form value
  this.user=new User(this.registrationForm.controls.userName.value,this.registrationForm.controls.email.value,this.registrationForm.controls.password.value,true,'user');
  // this.registerService.getUser(this.registrationForm.controls.email.value).subscribe((response)=>{
    // if(response && response.body.length==0){
      this.registerService.addUser(this.user).subscribe((response)=>{
    this.showMsg=true;
    this.registrationForm.reset();
  })
    // }
    // else{
    //   this.emailExist=true;
    // }

  // })
}
}
