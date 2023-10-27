import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modulo4RoutingModule } from './modulo4-routing.module';
import { Modulo4Component } from './modulo4.component';
import { AsigPriviComponent } from './pages/asig-privi/asig-privi.component';
import { AsigCoordComponent } from './pages/asig-coord/asig-coord.component';
import { CrearRolsisComponent } from './pages/crear-rolsis/crear-rolsis.component';
import { ListRolsisComponent } from './pages/list-rolsis/list-rolsis.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    Modulo4Component,
    AsigCoordComponent,
    CrearRolsisComponent,
    ListRolsisComponent
  ],
  imports: [
    CommonModule,
    Modulo4RoutingModule,
    MatTableModule
  ]
})
export class Modulo4Module { }
