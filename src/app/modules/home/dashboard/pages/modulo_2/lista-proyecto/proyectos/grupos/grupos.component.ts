import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']

})

export class GruposComponent {

  displayedColumns: string[] = ['position', 'Rol', 'Nombre'];
  dataSource1 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns2: string[] = [ 'Nombre', 'Control'];
  dataSource2 = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA2);

}

export interface PeriodicElement {
  Nombre: string;
  position: number;
  Rol: string;

}
export interface PeriodicElement2 {

  Nombre: string;
  Control: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, Nombre: '', Rol: "Instructor", },
  { position: 2, Nombre: '', Rol: "Apoyo", },
  { position: 3, Nombre: '', Rol: "Apoyo", },
  { position: 4, Nombre: '', Rol: "Asistente", },
  { position: 5, Nombre: '', Rol: "Monitor", },
];
const ELEMENT_DATA2: PeriodicElement2[] = [
  { Nombre: 'Brayan Kevin Ponce Galarza', Control:'' },
  { Nombre: 'Luis Kenny Lucero Balvin', Control:'' },
  { Nombre: 'Esau Morales Ramos', Control:'' },
  { Nombre: 'Alexis Frank Del Castillo', Control:'' },
  { Nombre: 'May Attilando Cango', Control:'' },
  { Nombre: 'Aylan Mostacero', Control:'' },
  { Nombre: 'Wagner Qquerar Mayta', Control:'' },
  { Nombre: 'Eric Mendoza Ojeda', Control:'' },
  { Nombre: 'Pamela Zulin Vallejos Cotrina', Control:'' },
  { Nombre: 'Yajhayra Leon', Control:'' },
  { Nombre: 'Veronica Lisseth Vergara Rojas', Control:'' },
  { Nombre: 'Alvaro Maguiña', Control:'' },
  { Nombre: 'Abel Guevara', Control:'' },
  { Nombre: 'Daniel Morales', Control:'' },
  { Nombre: 'Luis Sedano', Control:'' },
  { Nombre: 'Pepito Aguirre', Control:'' },
  { Nombre: 'Luis Alberto Orihuela Orozco', Control:'' },
  { Nombre: 'Joshua Pedraza Perez', Control:'' },
];

