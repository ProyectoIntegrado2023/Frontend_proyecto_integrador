import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsigCoordRoutingModule } from './asig-coord-routing.module';
import { AsigCoordComponent } from './asig-coord.component';


@NgModule({
  declarations: [
    AsigCoordComponent
  ],
  imports: [
    CommonModule,
    AsigCoordRoutingModule
  ]
})
export class AsigCoordModule { }
