import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { FormsModule } from '@angular/forms';
import { UserlandingRoutingModule } from './userlanding-routing.module';

import { ProductplaceorderComponent } from './productplaceorder/productplaceorder.component';

import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';




@NgModule({
  declarations: [
    UserlandingComponent,

    ProductplaceorderComponent

   
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserlandingRoutingModule,

    SharedmoduleModule,
    
  ],
  exports: [
    UserlandingComponent,
    ProductplaceorderComponent

  ]
})
export class UsermoduleModule { }
