import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarPlantillaRoutingModule } from './agregar-plantilla-routing.module';
import { AgregarPlantillaComponent } from './agregar-plantilla.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DropAreaComponent } from 'src/app/shared/components/drop-area/drop-area.component';


@NgModule({
  declarations: [
    AgregarPlantillaComponent
  ],
  imports: [
    CommonModule,
    AgregarPlantillaRoutingModule,
    DropAreaComponent,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class AgregarPlantillaModule { }
