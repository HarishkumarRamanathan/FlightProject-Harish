import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user-service';

@Injectable({
  providedIn: 'root'
})
export class UserValidGuard implements CanActivate {

  constructor(private userService:UserService,public router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userService.user){
        if(this.userService.user.valid){
          return this.userService.user.valid;
        }else{
          this.router.navigate(['/login']);
          return false;
        }
        
      }else{
        this.router.navigate(['/login']);
        return false;
      }
    
  }
  
}
