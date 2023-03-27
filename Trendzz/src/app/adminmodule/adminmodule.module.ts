import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { AdminroutingModule } from './adminrouting.module';





@NgModule({
  declarations: [
    AdminlandingComponent,
  ],
  imports: [
    CommonModule,
 
     SharedmoduleModule,
        AdminroutingModule
  ]
})
export class AdminmoduleModule { }
