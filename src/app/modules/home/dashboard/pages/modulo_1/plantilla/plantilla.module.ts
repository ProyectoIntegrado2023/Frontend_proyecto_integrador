import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantillaRoutingModule } from './plantilla-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PlantillaComponent } from './plantilla.component';

@NgModule({
  declarations: [
    PlantillaComponent
  ],
  imports: [
    CommonModule,
    PlantillaRoutingModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class PlantillaModule { }
