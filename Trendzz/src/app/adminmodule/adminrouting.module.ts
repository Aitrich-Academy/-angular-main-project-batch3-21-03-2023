import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';

const routes: Routes = [
  {path:'',component:AdminlandingComponent}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
   CommonModule
  ],
  exports: [RouterModule]
})
export class AdminroutingModule { }
