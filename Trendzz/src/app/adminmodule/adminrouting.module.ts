import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';

const routes: Routes=[


  // {path: '',redirectTo:'adminlanding',pathMatch:"full"}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AdminroutingModule { }
