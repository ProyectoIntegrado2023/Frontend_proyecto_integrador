import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipanteRoutingModule } from './participante-routing.module';
import { ParticipanteComponent } from './participante.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ParticipanteComponent
  ],
  imports: [
    CommonModule,
    ParticipanteRoutingModule,
    MatButtonModule
  ]
})
export class ParticipanteModule { }
