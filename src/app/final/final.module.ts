import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinalRoutingModule } from './final-routing.module';
import { FinalComponent } from './final.component';
import { SigupModule } from '../sigup/sigup.module';
import { ImagewithTextComponent } from '../imagewith-text/imagewith-text.component';


@NgModule({
  declarations: [FinalComponent,ImagewithTextComponent],
  imports: [
    CommonModule,
    FinalRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FinalModule { }
