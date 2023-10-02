import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { Modulo1Component } from './pages/modulo_1/modulo1.component';
import { Modulo2Component } from './pages/modulo_2/modulo2.component';
import { Modulo3Component } from './pages/modulo_3/modulo3.component';
import { Modulo4Component } from './pages/modulo_4/modulo4.component';
import { CardModuleComponent } from './components/card-module/card-module.component';
import { HomeComponent } from './home.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    HomeComponent,
    CardModuleComponent,
    Modulo1Component,
    Modulo2Component,
    Modulo3Component,
    Modulo4Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    TableModule
  ]
})
export class HomeModule { }
