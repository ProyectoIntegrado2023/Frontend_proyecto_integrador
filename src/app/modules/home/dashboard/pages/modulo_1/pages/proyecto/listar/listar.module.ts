import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarComponent } from './listar.component';
import { ListarRoutingModule } from './listar-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    ListarRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class ListarModule { }
