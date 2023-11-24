import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenerFacultadRoutingModule } from './mantener-facultad-routing.module';
import { MantenerFacultadComponent } from './mantener-facultad.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MantenerFacultadComponent
  ],
  imports: [
    CommonModule,
    MantenerFacultadRoutingModule,
    FormsModule
  ]
})
export class MantenerFacultadModule { }
