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
    return this.http.post<any>('http://localhost:9001/register', user,
      { observe: 'response' }).pipe(res => {
        return res;
      });
  }

  
  validateLogin(login: any) {

    return this.http.post<any>('http://localhost:9001/login', login, { observe: 'response' }).pipe(res => {
      return res;
    });
  }

  generateJwtToken(login:any){
    return this.http.post<any>('http://localhost:9001/authenticate', login, { observe: 'response' }).pipe(res => {
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

