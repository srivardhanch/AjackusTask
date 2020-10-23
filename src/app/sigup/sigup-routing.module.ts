import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigupComponent } from './sigup.component';


const routes: Routes = [
  {
    path: '',
    component: SigupComponent,
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigupRoutingModule { }
