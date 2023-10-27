import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatTableModule } from '@angular/material/table';
import { MatCommonModule } from '@angular/material/core';
import { PriviDespleComponent } from './list-privi/privi-desple/privi-desple.component';
import { AsigPriviComponent } from './asig-privi.component';
import { AsigPriviRoutingModule } from './asig-privi-routing.module';


@NgModule({
  declarations: [
    AsigPriviComponent
  ],
  imports: [
    CommonModule,
    AsigPriviRoutingModule,
    MatTableModule
  ]
})
export class AsigPriviModule { }