import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UsermoduleModule}from './usermodule/usermodule.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsermoduleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
