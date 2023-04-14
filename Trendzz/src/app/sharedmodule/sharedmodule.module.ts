import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { UsersidebarComponent } from './usersidebar/usersidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    AdminnavbarComponent,
    UsersidebarComponent,
    FooterComponent 
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    AdminnavbarComponent,
    UsersidebarComponent,
    FooterComponent 
  ]
})
export class SharedmoduleModule { }
