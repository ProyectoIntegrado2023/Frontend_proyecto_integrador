import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarRoutingModule } from './listar-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ListarComponent } from './listar.component';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    ListarRoutingModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class ListarModule { }
