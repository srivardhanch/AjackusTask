import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigupRoutingModule } from './sigup-routing.module';
import { SigupComponent } from './sigup.component';


@NgModule({
  declarations: [SigupComponent],
  imports: [
    CommonModule,
    SigupRoutingModule
  ]
})
export class SigupModule { }
