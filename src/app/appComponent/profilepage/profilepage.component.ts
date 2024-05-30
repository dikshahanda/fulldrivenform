import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceLoginService } from '../../Services/service-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css'
})
export class ProfilepageComponent {
constructor(private profiledata:ServiceLoginService, private httpClient:HttpClient, private route:Router){

}
 getData:any;



 
// ngOnInit(){
//   this.profiledata.OnGet().subscribe(res=>{
//     console.log(res);
//     this.GetData=res;
//     console.log(this.GetData)
//   });
// }



ngOnInit(){
  let tokenhead=new HttpHeaders({
    'Authorization':'Bearer '+ localStorage.getItem('token')
  })
  this.httpClient.get('https://api.escuelajs.co/api/v1/auth/profile',{headers:tokenhead}).subscribe(res=>{
    console.log(res);
    this.getData=res;
  })
}

OnlogOut(){
 this.profiledata.OnlogOut()
}


}
