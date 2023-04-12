import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';
import { UsermoduleModule } from './usermodule/usermodule.module';
import { AdminmoduleModule } from './adminmodule/adminmodule.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, SharedmoduleModule, UsermoduleModule,AdminmoduleModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
