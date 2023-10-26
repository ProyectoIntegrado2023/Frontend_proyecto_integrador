import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modulo4RoutingModule } from './modulo4-routing.module';
import { Modulo4Component } from './modulo4.component';


@NgModule({
  declarations: [
    Modulo4Component
  ],
  imports: [
    CommonModule,
    Modulo4RoutingModule
  ]
})
export class Modulo4Module { }
