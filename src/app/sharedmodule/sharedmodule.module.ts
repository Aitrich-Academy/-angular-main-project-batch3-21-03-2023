import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    AdminnavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    AdminnavbarComponent
  ]
})
export class SharedmoduleModule { }
