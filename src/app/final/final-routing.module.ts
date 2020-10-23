import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{FinalComponent} from './final.component'

const routes: Routes = [
  {
    path: '',
    component: FinalComponent,
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinalRoutingModule { }
