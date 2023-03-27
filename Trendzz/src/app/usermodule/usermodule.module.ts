import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { FormsModule } from '@angular/forms';
import { UserlandingRoutingModule } from './userlanding-routing.module';
import { NavbarComponent } from '../sharedmodule/navbar/navbar.component';
import { FooterComponent } from '../sharedmodule/footer/footer.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';




@NgModule({
  declarations: [
    UserlandingComponent,
   
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserlandingRoutingModule,
    SharedmoduleModule
   
  ],
  exports: [
    UserlandingComponent,
    
  ]
})
export class UsermoduleModule { }
