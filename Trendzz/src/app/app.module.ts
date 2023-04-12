import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { UsermoduleModule } from './usermodule/usermodule.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';
import { UserlandingRoutingModule } from './usermodule/userlanding-routing.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminmoduleModule } from './adminmodule/adminmodule.module';
import { NotFoundComponent } from './not-found/not-found.component';





@NgModule({
  declarations: [
    AppComponent,
    UserhomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    UserlandingRoutingModule,
    UserlandingRoutingModule,
    AppRoutingModule,
    SharedmoduleModule,
    FormsModule,
    UsermoduleModule,
    AdminmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
