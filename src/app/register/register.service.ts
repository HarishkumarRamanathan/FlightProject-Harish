import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private userEmail = new BehaviorSubject<String>('');
  userEmailData = this.userEmail.asObservable();
  email: string = '';
  constructor(private http: HttpClient) { }

  getUser(email: string) {
    let endpoint = "http://localhost:3000/users?email=" + email;
    console.log(endpoint);
    return this.http.get<any>(endpoint,
      { observe: 'response' }).pipe(res => {
        return res;
      });
  }

  addUser(user: any) {
    console.log("user", user);
    return this.http.post<any>('http://ec2-3-15-15-120.us-east-2.compute.amazonaws.com:8989/api/user-service/register', user,
      { observe: 'response' }).pipe(res => {
        return res;
      });
  }

  
  validateLogin(login: any) {

    return this.http.post<any>('http://ec2-3-15-15-120.us-east-2.compute.amazonaws.com:8989/api/user-service/login', login, { observe: 'response' }).pipe(res => {
      return res;
    });
  }

  generateJwtToken(login:any){
    return this.http.post<any>('http://ec2-3-15-15-120.us-east-2.compute.amazonaws.com:8989/api/user-service/authenticate', login, { observe: 'response' }).pipe(res => {
      return res;
    });
  }

  validateUser(email: string, password: string) {
    let endpoint = "http://localhost:3000/users?email=" + email + "&password=" + password;
    console.log(endpoint);
    return this.http.get<any>(endpoint,
      { observe: 'response' }).pipe(res => {
        return res;
      });
  }

  setEmail(email: string) {
    this.userEmail.next(email);
  }

  setEmailS(email: string) {
    this.email = email;
  }

}

