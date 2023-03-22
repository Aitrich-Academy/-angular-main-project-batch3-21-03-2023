import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';




@NgModule({
  declarations: [
    AdminlandingComponent,
  ],
  imports: [
    CommonModule,
    // SharedmoduleModule
  ]
})
export class AdminmoduleModule { }
