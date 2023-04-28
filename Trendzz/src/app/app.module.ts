import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { BrowserModule } from '@angular/platform-browser';
import { UsermoduleModule } from './usermodule/usermodule.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';
import { UsermoduleModule } from './usermodule/usermodule.module';
import { AdminmoduleModule } from './adminmodule/adminmodule.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { UserhomeComponent } from './userhome/userhome.component';

@NgModule({
  declarations: [

    AppComponent,
    UserhomeComponent,
    NotFoundComponent

    AppComponent, 
       UserhomeComponent,
       
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SharedmoduleModule,
    FormsModule,
    UsermoduleModule,
    AdminmoduleModule

    SharedmoduleModule, 
    FormsModule,  
    UsermoduleModule,
    FormsModule, 
    AdminmoduleModule,
     BrowserAnimationsModule ,
     HttpClientModule,
     MatDialogModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
