import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenerTipoConvenioRoutingModule } from './mantener-tipo-convenio-routing.module';
import { MantenerTipoConvenioComponent } from './mantener-tipo-convenio.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MantenerTipoConvenioComponent
  ],
  imports: [
    CommonModule,
    MantenerTipoConvenioRoutingModule,
    FormsModule
  ]
})
export class MantenerTipoConvenioModule { }
