import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { RouterModule } from '@angular/router';
import { SharedroutingModule } from './sharedrouting.module';




@NgModule({
  declarations: [
    NavbarComponent,
    AdminnavbarComponent,
 
  ],
  imports: [
    CommonModule,
    SharedroutingModule
    
  ],
  exports: [
    NavbarComponent,
    AdminnavbarComponent,
    RouterModule,
  
  ]
})
export class SharedmoduleModule { }
