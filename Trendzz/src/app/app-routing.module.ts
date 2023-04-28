import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdmincategoryComponent } from './adminmodule/admincategory/admincategory.component';
import { AdminlandingComponent } from './adminmodule/adminlanding/adminlanding.component';
import { AdminordersComponent } from './adminmodule/adminorders/adminorders.component';
import { UpdatecategoryComponent } from './adminmodule/updatecategory/updatecategory.component';

const routes: Routes = [
 { path:'', component:UserhomeComponent,
 },
 { path:'home', component:UserhomeComponent,
 },
 {
  path:'admin',loadChildren:()=>import('./adminmodule/adminmodule.module').then(m=>m.AdminmoduleModule)
 },
 {
  path:'user',loadChildren:()=>import('./usermodule/usermodule.module').then(m=>m.UsermoduleModule)
 },
];


  {path:'home',component: UserhomeComponent},
  {path:'profile' , component: AdminUserprofileComponent},
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'**', component: NotFoundComponent}, {path:"admincategory",component: AdmincategoryComponent },
  {path:"adminlanding",component: AdminlandingComponent },
  {path:"adminorders",component: AdminordersComponent },
  
  {path:'updatecategory/:id', component: UpdatecategoryComponent },



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
