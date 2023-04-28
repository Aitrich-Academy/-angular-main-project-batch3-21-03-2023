import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { HttpClientModule } from '@angular/common/http';
import { AdmincategoryComponent } from './admincategory/admincategory.component';
import { AdminordersComponent } from './adminorders/adminorders.component';

import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminroutingModule } from './adminrouting.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { AdminroutingModule } from './adminrouting.module';






@NgModule({
  declarations: [
    AdminlandingComponent,
    AdmincategoryComponent,
    AdminordersComponent,

    UpdatecategoryComponent

   

  ],
  imports: [

    CommonModule,

    SharedmoduleModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminroutingModule
  ],
  exports: [
    AdminlandingComponent,
    AdmincategoryComponent,
    AdminordersComponent,
    RouterModule




    SharedmoduleModule ,
    HttpClientModule, 
    ReactiveFormsModule,
    AdminroutingModule
  ],
  exports:[
    AdminlandingComponent,
    NgxPaginationModule,
    AdmincategoryComponent,
    AdminordersComponent

    


  ]

})
export class AdminmoduleModule { }
