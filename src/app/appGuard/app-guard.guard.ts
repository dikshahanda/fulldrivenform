import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ServiceLoginService } from '../Services/service-login.service';
// import { ServiceloginService } from '../appservices/loginservices/servicelogin.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private loginService:ServiceLoginService) {}

isLogedIn=true;

  canActivate(): boolean {
    if (this.loginService.isAuthentivateUser()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}