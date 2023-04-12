import { NgModule  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdmincategoryComponent } from './adminmodule/admincategory/admincategory.component';
import { AdminlandingComponent } from './adminmodule/adminlanding/adminlanding.component';
import { AdminordersComponent } from './adminmodule/adminorders/adminorders.component';
import { UpdatecategoryComponent } from './adminmodule/updatecategory/updatecategory.component';

const routes: Routes=[
  {path:"admincategory",component: AdmincategoryComponent },
  {path:"adminlanding",component: AdminlandingComponent },
  {path:"adminorders",component: AdminordersComponent },
  
  {path:'updatecategory/:id', component: UpdatecategoryComponent },
 {path: '',redirectTo:'adminlanding',pathMatch:"full"}
];
@NgModule({
  imports: [ CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
