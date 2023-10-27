import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRolsisRoutingModule } from './list-rolsis-routing.module';
import { ListRolsisComponent } from './list-rolsis.component';


@NgModule({
  declarations: [
    ListRolsisComponent
  ],
  imports: [
    CommonModule,
    ListRolsisRoutingModule
  ]
})
export class ListRolsisModule { }
