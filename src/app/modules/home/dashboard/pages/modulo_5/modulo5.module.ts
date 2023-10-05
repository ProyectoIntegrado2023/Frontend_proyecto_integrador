import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modulo5RoutingModule } from './modulo5-routing.module';
import { Modulo5Component } from './modulo5.component';


@NgModule({
  declarations: [
    Modulo5Component
  ],
  imports: [
    CommonModule,
    Modulo5RoutingModule
  ]
})
export class Modulo5Module { }
