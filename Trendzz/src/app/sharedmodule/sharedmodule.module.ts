import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserlandingRoutingModule } from '../usermodule/userlanding-routing.module';

import { FormsModule } from '@angular/forms';

import { UsersidebarComponent } from './usersidebar/usersidebar.component';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    UsersidebarComponent
  ],
  imports: [
    CommonModule,

    UserlandingRoutingModule,
    FormsModule

  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    UsersidebarComponent
  ]
})
export class SharedmoduleModule { }
