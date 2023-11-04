import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { NotificacionComponent } from 'src/app/shared/components/notificacion/notificacion.component';
import { DropAreaComponent } from 'src/app/shared/components/drop-area/drop-area.component';


@NgModule({
  declarations: [
    GeneralComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    DropAreaComponent,
    NotificacionComponent,
    MatButtonModule,
    FormsModule
  ]
})
export class GeneralModule { }
