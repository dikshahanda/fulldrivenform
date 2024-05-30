import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './appcomponent/loginpage/loginpage.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './appComponent/home-page/home-page.component';
import { ProfilepageComponent } from './appComponent/profilepage/profilepage.component';
import { HeaderComponent } from './appComponent/header/header.component';
import { AboutComponent } from './appcomponent/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomePageComponent,
    ProfilepageComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
