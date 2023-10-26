import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modulo3RoutingModule } from './modulo3-routing.module';
import { Modulo3Component } from './modulo3.component';


@NgModule({
  declarations: [
    Modulo3Component
  ],
  imports: [
    CommonModule,
    Modulo3RoutingModule
  ]
})
export class Modulo3Module { }
