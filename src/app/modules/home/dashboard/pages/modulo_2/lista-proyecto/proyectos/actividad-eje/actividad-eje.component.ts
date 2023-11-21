import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-actividad-eje',
  templateUrl: './actividad-eje.component.html',
  styleUrls: ['./actividad-eje.component.css']
})
export class ActividadEjeComponent {

  displayedColumns: string[] = ['Actividad', 'Fecha'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns2: string[] = ['position', 'Actividad', 'Fecha'];
  dataSource2 = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA2);
}
export interface PeriodicElement {
  Actividad: string;
  Fecha: string;
}
export interface PeriodicElement2 {
  position: number;
  Actividad: string;
  Fecha: string;
}
const ELEMENT_DATA2: PeriodicElement2[] = [
  { position: 1, Actividad: 'Sorting Networks', Fecha: '11-10-2023' },
  { position: 2, Actividad: 'Detección de Errores', Fecha: '12-10-2023' },
  { position: 3, Actividad: 'Angular Material', Fecha: '13-10-2023' },
  { position: 4, Actividad: 'Spring Boot', Fecha: '14-10-2023' },
  { position: 5, Actividad: 'API', Fecha: '15-10-2023' },
  { position: 6, Actividad: 'La hora del código', Fecha: '16-10-2023' },
];
const ELEMENT_DATA: PeriodicElement[] = [
  { Actividad: '', Fecha: '' },
  { Actividad: '', Fecha: '' },
  { Actividad: '', Fecha: '' },

];

