import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:ForgotPasswordComponent}
=======
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent}
>>>>>>> 0d53a8baf42303cc5c6afcbbe11358e6d3dab1f6
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
