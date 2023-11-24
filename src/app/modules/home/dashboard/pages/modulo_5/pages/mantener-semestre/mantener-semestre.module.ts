import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenerSemestreRoutingModule } from './mantener-semestre-routing.module';
import { MantenerSemestreComponent } from './mantener-semestre.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MantenerSemestreComponent
  ],
  imports: [
    CommonModule,
    MantenerSemestreRoutingModule,
    FormsModule
  ]
})
export class MantenerSemestreModule { }
