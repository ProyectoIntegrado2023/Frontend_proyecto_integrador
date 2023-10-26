import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenerSemestreRoutingModule } from './mantener-semestre-routing.module';
import { MantenerSemestreComponent } from './mantener-semestre.component';


@NgModule({
  declarations: [
    MantenerSemestreComponent
  ],
  imports: [
    CommonModule,
    MantenerSemestreRoutingModule
  ]
})
export class MantenerSemestreModule { }
