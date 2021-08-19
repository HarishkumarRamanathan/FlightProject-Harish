import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { UserRole } from '../model/userRole';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user:any;
  constructor() { }

  public setUserValue(newUser:UserRole){
    this.user=new UserRole(newUser.userName,newUser.email,newUser.valid,newUser.role,newUser.token);
  }

  public get userValue (){
    return this.user;
  }
}
