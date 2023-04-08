import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlandingComponent } from './userlanding/userlanding.component';



@NgModule({
  declarations: [
    UserlandingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserlandingComponent
  ]
})
export class UsermoduleModule { }
