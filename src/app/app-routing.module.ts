import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilepageComponent } from './appComponent/profilepage/profilepage.component';
import { HomePageComponent } from './appComponent/home-page/home-page.component';
import { LoginpageComponent } from './appcomponent/loginpage/loginpage.component';
import { AuthGuard } from './appGuard/app-guard.guard';
import { AboutComponent } from './appcomponent/about/about.component';


const routes: Routes = [
  {path:'', redirectTo:'homepage', pathMatch:'full'},
  // {path:"login", Component:LoginpageComponent}
  {path:'profile', component:ProfilepageComponent, canActivate:[AuthGuard]},
  {path:'homepage', component:HomePageComponent,canActivate:[AuthGuard]},
  {path:'login', component:LoginpageComponent},
  {path:'about', component:AboutComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
