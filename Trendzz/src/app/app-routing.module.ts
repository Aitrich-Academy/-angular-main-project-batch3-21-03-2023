import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { ModalComponent } from './sharedmodule/modal/modal.component';

const routes: Routes = [


  {path:'home',component: UserhomeComponent},
  {path:'profile' , component: AdminUserprofileComponent},
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'**', component: NotFoundComponent},
  {path: 'modal', component: ModalComponent}

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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
