import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent {
  displayedColumns: string[] = ['position', 'Codigo', 'Nombre', 'Asistencia'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  public onFileUrlsEmitted(fileUrls: string[]) {
    console.log(fileUrls);
  }
}
export interface PeriodicElement {
  Codigo: string;
  position: number;
  Nombre: string;
  Asistencia: number;

}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, Codigo:'202123208', Nombre: 'Brayan Kevin Ponce Galarza', Asistencia: 1 },
  { position: 2, Codigo:'202123852',Nombre: 'Luis Kenny Lucero Balvin',Asistencia: 1 },
  { position: 3, Codigo:'202123208',Nombre: 'Esau Morales Ramos', Asistencia: 1 },
  { position: 4, Codigo:'202123208',Nombre: 'Alexis Frank Del Castillo', Asistencia: 1 },
  { position: 5, Codigo:'202123208',Nombre: 'May Attilando Cango', Asistencia: 1 },
  { position: 6, Codigo:'202123208',Nombre: 'Aylan Mostacero', Asistencia: 1 },
  { position: 7, Codigo:'202123208',Nombre: 'Wagner Qquerar Mayta', Asistencia: 1 },
  { position: 8, Codigo:'202123208',Nombre: 'Eric Mendoza Ojeda', Asistencia: 1 },
  { position: 9, Codigo:'202123208',Nombre: 'Pamela Zulin Vallejos Cotrina', Asistencia: 1 },
  { position: 10, Codigo:'202123208',Nombre: 'Yajhayra Leon', Asistencia: 1 },
  { position: 11, Codigo:'202123208',Nombre: 'Veronica Lisseth Vergara Rojas', Asistencia: 1 },
  { position: 12, Codigo:'202123208',Nombre: 'Alvaro Maguiña', Asistencia: 1 },
  { position: 13, Codigo:'202123208',Nombre: 'Abel Guevara', Asistencia: 1 },
  { position: 14, Codigo:'202123208',Nombre: 'Daniel Morales', Asistencia: 1 },
  { position: 15,Codigo:'202123208', Nombre: 'Luis Sedano',Asistencia: 1 },
  { position: 16, Codigo:'202123208',Nombre: 'Pepito Aguirre', Asistencia: 1 },
  { position: 17, Codigo:'202123208',Nombre: 'Luis Alberto Orihuela Orozco', Asistencia: 1 },
  { position: 18, Codigo:'202123208',Nombre: 'Joshua Pedraza Perez', Asistencia: 1 },
];
