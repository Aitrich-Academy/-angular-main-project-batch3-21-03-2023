import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { AdminroutingModule } from './adminrouting.module';
import { AdminUserprofileComponent } from './admin-userprofile/admin-userprofile.component';





@NgModule({
  declarations: [
    AdminlandingComponent,
    AdminUserprofileComponent,
  ],
  imports: [
    CommonModule,
 
     SharedmoduleModule,
        AdminroutingModule
  ],
  exports:[
    AdminUserprofileComponent
  ]
})
export class AdminmoduleModule { }
