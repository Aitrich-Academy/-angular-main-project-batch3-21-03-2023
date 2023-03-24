import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UsermoduleModule}from './usermodule/usermodule.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedmoduleModule,
    UsermoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
