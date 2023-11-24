import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PerfilDirective } from './directive/perfil.directive';
import { MatButtonModule } from '@angular/material/button';
import { DropAreaComponent } from './components/drop-area/drop-area.component';

@NgModule({
  declarations: [
    PerfilComponent,
    PerfilDirective,
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    PerfilComponent,
    PerfilDirective,
  ]
})
export class SharedModule { }
