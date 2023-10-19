import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarPlantillaRoutingModule } from './agregar-plantilla-routing.module';
import { AgregarPlantillaComponent } from './agregar-plantilla.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AgregarPlantillaComponent
  ],
  imports: [
    CommonModule,
    AgregarPlantillaRoutingModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class AgregarPlantillaModule { }
