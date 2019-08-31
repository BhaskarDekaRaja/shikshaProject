import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceptFormComponent } from './accept-form/accept-form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {
  //   path:" ",
  //   component:LoginComponent

  // },
  { path: '',
  redirectTo: '/login',
  pathMatch: 'full'
  },
  {
    path:"login",
    component:LoginComponent

  },
  {
    path:"page2",
    component:AcceptFormComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
