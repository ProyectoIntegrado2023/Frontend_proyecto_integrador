import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListaProyectoRoutingModule } from './lista-proyecto-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ListaProyectoComponent } from './lista-proyecto.component';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    ListaProyectoComponent,

  ],
  imports: [
    CommonModule,
    ListaProyectoRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,

  ]
})
export class ListaProyectoModule { }
