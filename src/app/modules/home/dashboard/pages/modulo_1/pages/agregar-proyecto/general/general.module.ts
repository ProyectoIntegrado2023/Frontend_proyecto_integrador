import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { NotificacionComponent } from 'src/app/shared/components/notificacion/notificacion.component';
import { DropAreaComponent } from 'src/app/shared/components/drop-area/drop-area.component';
import { Storage as StorageFirebase } from '@angular/fire/storage';

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
  ],
  providers: [
    { provide: StorageFirebase, useValue: StorageFirebase } // Proporciona StorageFirebase como un proveedor
  ],
})
export class GeneralModule { }
