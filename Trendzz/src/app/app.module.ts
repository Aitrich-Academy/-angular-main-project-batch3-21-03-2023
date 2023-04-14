import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';
import { UsermoduleModule } from './usermodule/usermodule.module';
import { AdminmoduleModule } from './adminmodule/adminmodule.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserhomeComponent } from './userhome/userhome.component';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, 
       UserhomeComponent,
       
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     SharedmoduleModule, 
     UsermoduleModule,
     AdminmoduleModule,
     NgxPaginationModule,
     FormsModule,
     HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
