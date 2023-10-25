import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GeneralComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    MatButtonModule,
    FormsModule
  ]
})
export class GeneralModule { }
