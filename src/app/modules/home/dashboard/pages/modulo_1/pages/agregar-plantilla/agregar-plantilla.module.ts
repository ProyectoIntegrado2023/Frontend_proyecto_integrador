import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarPlantillaRoutingModule } from './agregar-plantilla-routing.module';
import { AgregarPlantillaComponent } from './agregar-plantilla.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DropAreaComponent } from 'src/app/shared/components/drop-area/drop-area.component';
import { FormsModule } from '@angular/forms';
import { NotificacionComponent } from 'src/app/shared/components/notificacion/notificacion.component';
import { Storage as StorageFirebase } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AgregarPlantillaComponent
  ],
  imports: [
    CommonModule,
    AgregarPlantillaRoutingModule,
    DropAreaComponent,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    NotificacionComponent,
  ],
  providers: [
    { provide: StorageFirebase, useValue: StorageFirebase } // Proporciona StorageFirebase como un proveedor
  ],
})
export class AgregarPlantillaModule { }
