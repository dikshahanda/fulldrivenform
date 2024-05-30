import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {

public isAuthencation=false;

  constructor(private httpClient:HttpClient, private route:Router) { }

  OnLogin(LoginService){
    this.httpClient.post('https://api.escuelajs.co/api/v1/auth/login',LoginService.value).subscribe(res=>{
      console.log(res);
      localStorage.setItem('token', res["access_token"]);
      this.route.navigate(['profile'])
      this.isAuthencation=true;
    })
  }


  OnlogOut(){
    localStorage.removeItem("token");
    this.route.navigate(['homepage'])
    this.isAuthencation=false;
   }


   isAuthentivateUser(): boolean {
    return this.isAuthencation;
  }



  // OnGet(){
  //  return this.httpClient.get('https://api.escuelajs.co/api/v1/auth/profile');
  // }
}
