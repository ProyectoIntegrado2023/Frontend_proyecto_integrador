import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { Modulo2RoutingModule } from './modulo2-routing.module';
import { Modulo2Component } from './modulo2.component';



@NgModule({
  declarations: [
    Modulo2Component,


  ],
  imports: [
    CommonModule,
    Modulo2RoutingModule,

  ]
})
export class Modulo2Module { }
