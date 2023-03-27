import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {UsermoduleModule}from './usermodule/usermodule.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './sharedmodule/footer/footer.component';
import { NavbarComponent } from './sharedmodule/navbar/navbar.component';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';
import { UserlandingRoutingModule } from './usermodule/userlanding-routing.module';


import { UserhomeComponent } from './userhome/userhome.component';

import { UsermoduleModule } from './usermodule/usermodule.module';


@NgModule({
  declarations: [
    AppComponent,

    UserhomeComponent,


    
  ],
  imports: [
    BrowserModule,
    UserlandingRoutingModule,
    AppRoutingModule,
    SharedmoduleModule,
    UsermoduleModule,
    FormsModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
