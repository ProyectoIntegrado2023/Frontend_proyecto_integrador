import { Component } from '@angular/core';
import { Router } from '@angular/router';



export interface PeriodicElement {
  nombre: string;
  position: number;
  dni: string;
  rolsis: string;
  accion: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, dni: '202210259', nombre: 'May Diamond Attilano Cango', rolsis: 'Estudiante', accion: 'select'},
  {position: 2, dni: '202210260', nombre: 'Brayan Stiven Ponce Galarza', rolsis: 'Estudiante', accion: 'select'},
  {position: 3, dni: '202210261', nombre: 'Luis Keny Lucero Balbin', rolsis: 'Estudiante', accion: 'select'},
  {position: 4, dni: '202210262', nombre: 'Alexis Frank Del Castillo Yunca', rolsis: 'Estudiante', accion: 'select'},
  {position: 5, dni: '202210263', nombre: 'Luis Alberto Orihuela Orozco', rolsis: 'Estudiante', accion: 'select'},
  {position: 6, dni: '202210264', nombre: 'David Reyna Barreto', rolsis: 'Docente', accion: 'select'},
  
];


@Component({
  selector: 'app-asig-privi',
  templateUrl: './asig-privi.component.html',
  styleUrls: ['./asig-privi.component.css'],
  
})

export class AsigPriviComponent {
  displayedColumns: string[] = ['position', 'dni', 'nombre', 'rolsis', 'accion'];
  dataSource = ELEMENT_DATA;
  status: boolean = true;
  
  constructor(
    private router: Router
  ){}
  public navegate(){
    this.status = false
    this.router.navigate([
      'home/modulo/4/asignar-privilegios/seleccionar-privilegios'
    ])
  }
}
