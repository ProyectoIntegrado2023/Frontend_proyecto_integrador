import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenerUsuarioRoutingModule } from './mantener-usuario-routing.module';
import { MantenerUsuarioComponent } from './mantener-usuario.component';


@NgModule({
  declarations: [
    MantenerUsuarioComponent
  ],
  imports: [
    CommonModule,
    MantenerUsuarioRoutingModule
  ]
})
export class MantenerUsuarioModule { }
