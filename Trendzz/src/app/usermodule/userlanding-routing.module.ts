import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlandingComponent } from '../adminmodule/adminlanding/adminlanding.component';
import { UserlandingComponent } from './userlanding/userlanding.component';

const routes: Routes = [
  // {path: 'userlanding' , component : UserlandingComponent},
  // {path: '' , redirectTo:'/userlanding', pathMatch : 'full'},
  // {path:'adminlanding', component: AdminlandingComponent},

  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserlandingRoutingModule { }
