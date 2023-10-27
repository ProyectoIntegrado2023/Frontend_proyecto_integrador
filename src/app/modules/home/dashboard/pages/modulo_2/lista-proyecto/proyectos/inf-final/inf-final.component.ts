import { Component } from '@angular/core';


@Component({
  selector: 'app-inf-final',
  templateUrl: './inf-final.component.html',
  styleUrls: ['./inf-final.component.css']
})
export class InfFinalComponent {

  displayedColumns: string[] = ['id', 'Actividad', 'Fecha'];
  dataSource = ELEMENT_DATA;

}
export interface PeriodicElement {
  id: number;
  Actividad: string;
  Fecha: Date;
  }

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, Actividad: 'Sorign Networks', Fecha: new Date('10-01-15')},
  {id: 2, Actividad: 'La hora del código', Fecha: new Date('10-13-15')},
  {id: 3, Actividad: 'Java', Fecha: new Date('10-18-15')},
];
