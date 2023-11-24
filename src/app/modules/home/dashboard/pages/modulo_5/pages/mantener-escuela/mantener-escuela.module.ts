import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenerEscuelaRoutingModule } from './mantener-escuela-routing.module';
import { MantenerEscuelaComponent } from './mantener-escuela.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MantenerEscuelaComponent
  ],
  imports: [
    CommonModule,
    MantenerEscuelaRoutingModule,
    FormsModule
  ]
})
export class MantenerEscuelaModule { }
