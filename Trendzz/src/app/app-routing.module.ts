import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserprofileComponent } from './adminmodule/admin-userprofile/admin-userprofile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ModalComponent } from './sharedmodule/modal/modal.component';

const routes: Routes = [

  {path:'home',component: UserhomeComponent},
  {path:'profile' , component: AdminUserprofileComponent},
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'**', component: NotFoundComponent},
  {path: 'modal', component: ModalComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
