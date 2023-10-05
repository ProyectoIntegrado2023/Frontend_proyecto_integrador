import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarModuleComponent } from '../components/sidebar-module/sidebar-module.component';
import { DashboardComponent } from './dashboard.component';
import { ButtonModule } from 'primeng/button';
import { Modulo5Component } from './pages/modulo_5/modulo5.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarModuleComponent,
    Modulo5Component
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ButtonModule
  ]
})
export class DashboardModule { }
