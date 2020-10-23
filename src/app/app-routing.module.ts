import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginModule} from './login/login.module'
import{SigupModule} from './sigup/sigup.module'
import{FinalModule} from './final/final.module'

const routes: Routes = [
  { path: '', redirectTo: 'sigup', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  },
  {
    path: 'sigup',
    loadChildren: './sigup/sigup.module#SigupModule',
  },
  {
    path: 'final',
    loadChildren: './final/final.module#FinalModule',
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
