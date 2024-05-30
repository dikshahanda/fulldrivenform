import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceLoginService } from '../../Services/service-login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {

constructor(private Servicescall:ServiceLoginService,private route:Router){
}

public OnLoad=false;

onClick(logininfo){
  this.OnLoad=true
  if (logininfo.valid){
    this.Servicescall.OnLogin(logininfo);
  }
  else{
    // Swal.fire({
    //   title: "The Internet?",
    //   text: "That thing is still around?",
    //   icon: "question"
    // });
    alert('Please enter valid Email & Password ')
  }
}

onLoad(){

}

}
