import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modulo1RoutingModule } from './modulo1-routing.module';
import { Modulo1Component } from './modulo1.component';

@NgModule({
  declarations: [
    Modulo1Component
  ],
  imports: [
    CommonModule,
    Modulo1RoutingModule
  ]
})
export class Modulo1Module {}
