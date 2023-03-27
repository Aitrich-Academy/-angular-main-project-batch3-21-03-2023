import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { OrdershippingComponent } from './ordershipping/ordershipping.component';
import { ProductplaceorderComponent } from './productplaceorder/productplaceorder.component';
import { UserprofileComponent } from './userprofile/userprofile.component';




@NgModule({
  declarations: [
    UserlandingComponent,
    OrdershippingComponent,
    ProductplaceorderComponent,
    UserprofileComponent
  ],
  imports: [
    CommonModule,
    
  
  ],
  exports:[
    UserlandingComponent,
    OrdershippingComponent,
    ProductplaceorderComponent,
    UserprofileComponent
  ]
})
export class UsermoduleModule { }
