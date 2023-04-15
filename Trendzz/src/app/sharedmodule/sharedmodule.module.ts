import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserlandingRoutingModule } from '../usermodule/userlanding-routing.module';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { UsersidebarComponent } from './usersidebar/usersidebar.component';
import { ModalComponent } from './modal/modal.component';
import { SignUpComponent } from './sign-up/sign-up.component';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    UsersidebarComponent,
    ModalComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,

    UserlandingRoutingModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
    

  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    UsersidebarComponent
  ]
})
export class SharedmoduleModule { }
