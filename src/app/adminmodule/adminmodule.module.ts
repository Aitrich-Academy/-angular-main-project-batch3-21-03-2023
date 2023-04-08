import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { HttpClientModule } from '@angular/common/http';
import { AdmincategoryComponent } from './admincategory/admincategory.component';
import { AdminordersComponent } from './adminorders/adminorders.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AdminlandingComponent,
    AdmincategoryComponent,
    AdminordersComponent,
  ],
  imports: [

    CommonModule,
    SharedmoduleModule ,
    HttpClientModule,
    NgxPaginationModule, 
    ReactiveFormsModule
  ],
  exports:[
    AdminlandingComponent,
    NgxPaginationModule,
    AdmincategoryComponent,
    AdminordersComponent

    
    

  ]

})
export class AdminmoduleModule { }
