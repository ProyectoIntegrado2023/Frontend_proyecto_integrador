import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { Modulo5Component } from './pages/modulo_5/modulo5.component';


@NgModule({
  declarations: [
    DashboardComponent,
    Modulo5Component
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
