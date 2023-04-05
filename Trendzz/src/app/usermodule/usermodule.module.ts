import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { FormsModule } from '@angular/forms';
import { UserlandingRoutingModule } from './userlanding-routing.module';

import { ProductplaceorderComponent } from './productplaceorder/productplaceorder.component';

import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { OrdershippingComponent } from './ordershipping/ordershipping.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { MyordersComponent } from './myorders/myorders.component';
import { UserorderhistoryComponent } from './userorderhistory/userorderhistory.component';




@NgModule({
  declarations: [
    UserlandingComponent,

    ProductplaceorderComponent,
    OrdershippingComponent,
    UserprofileComponent,
    MyordersComponent,
    UserorderhistoryComponent

   
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserlandingRoutingModule,

    SharedmoduleModule,
    
  ],
  
  exports: [
    UserlandingComponent,

    ProductplaceorderComponent,
    OrdershippingComponent,
    UserprofileComponent,
    MyordersComponent,
    UserorderhistoryComponent

  ]
})
export class UsermoduleModule { }
