import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AsigHorasRoutingModule } from './asig-horas-routing.module';
import { AsigHorasComponent } from './asig-horas.component';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AsigHorasComponent,

  ],
  imports: [
    CommonModule,
    AsigHorasRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule
  ]
})
export class AsigHorasModule { }
