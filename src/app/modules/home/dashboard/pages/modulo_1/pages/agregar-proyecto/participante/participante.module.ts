import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipanteRoutingModule } from './participante-routing.module';
import { ParticipanteComponent } from './participante.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParticipanteComponent
  ],
  imports: [
    CommonModule,
    ParticipanteRoutingModule,
    FormsModule,
    MatButtonModule
  ]
})
export class ParticipanteModule { }
