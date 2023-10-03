import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarModuleComponent } from '../components/sidebar-module/sidebar-module.component';
import { DashboardComponent } from './dashboard.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarModuleComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TableModule,
    ButtonModule
  ]
})
export class DashboardModule { }
