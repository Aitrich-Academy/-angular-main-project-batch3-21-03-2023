import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { UsersidebarComponent } from './usersidebar/usersidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    NavbarComponent,
    AdminnavbarComponent,
    UsersidebarComponent,
    FooterComponent,
    ModalComponent,
    SignUpComponent
  ],
 
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
   
    AdminnavbarComponent,
    UsersidebarComponent,
    FooterComponent 
  ]
})
export class SharedmoduleModule { }
