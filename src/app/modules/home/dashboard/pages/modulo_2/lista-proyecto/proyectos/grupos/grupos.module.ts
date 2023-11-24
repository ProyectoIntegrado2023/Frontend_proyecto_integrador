import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GruposRoutingModule } from './grupos-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { GruposComponent } from './grupos.component';


@NgModule({
  declarations: [
    GruposComponent

  ],
  imports: [
    CommonModule,
    GruposRoutingModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,

  ]
})
export class GruposModule { }
