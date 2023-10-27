import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-asig-horas',
  templateUrl: './asig-horas.component.html',
  styleUrls: ['./asig-horas.component.css']
})
export class AsigHorasComponent {

  displayedColumns: string[] = ['position', 'Nombre', 'Rol', 'Horas'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
export interface PeriodicElement {
  Nombre: string;
  position: number;
  Rol: string;
  Horas: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, Nombre: 'Brayan Kevin Ponce Galarza', Rol: "Instructor", Horas: 15 },
  { position: 2, Nombre: 'Luis Kenny Lucero Balvin', Rol: "Apoyo", Horas: 15 },
  { position: 3, Nombre: 'Esau Morales Ramos', Rol: "Instructor", Horas: 15 },
  { position: 4, Nombre: 'Alexis Frank Del Castillo', Rol: "Asistente", Horas: 15 },
  { position: 5, Nombre: 'May Attilando Cango', Rol: "Instructor", Horas: 15 },
  { position: 6, Nombre: 'Aylan Mostacero', Rol: "Lider", Horas: 15 },
  { position: 7, Nombre: 'Wagner Qquerar Mayta', Rol: "Lider", Horas: 15 },
  { position: 8, Nombre: 'Eric Mendoza Ojeda', Rol: "Instructor", Horas: 15 },
  { position: 9, Nombre: 'Pamela Zulin Vallejos Cotrina', Rol: "Instructor", Horas: 15 },
  { position: 10, Nombre: 'Yajhayra Leon', Rol: "Asistente", Horas: 15 },
  { position: 11, Nombre: 'Veronica Lisseth Vergara Rojas', Rol: "Apoyo", Horas: 15 },
  { position: 12, Nombre: 'Alvaro Maguiña', Rol: "Instructor", Horas: 15 },
  { position: 13, Nombre: 'Abel Guevara', Rol: "Apoyo", Horas: 15 },
  { position: 14, Nombre: 'Daniel Morales', Rol: "Asistente", Horas: 15 },
  { position: 15, Nombre: 'Luis Sedano', Rol: "Apoyo", Horas: 15 },
  { position: 16, Nombre: 'Pepito Aguirre', Rol: "Asistente", Horas: 15 },
  { position: 17, Nombre: 'Luis Alberto Orihuela Orozco', Rol: "Asistente", Horas: 15 },
  { position: 18, Nombre: 'Joshua Pedraza Perez', Rol: "Asistente", Horas: 15 },
];

