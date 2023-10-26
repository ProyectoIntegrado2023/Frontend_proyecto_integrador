import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RolesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RolesRoutingModule,
    MatButtonModule
  ]
})
export class RolesModule { }
