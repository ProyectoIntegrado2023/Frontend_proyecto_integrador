import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Proyecto } from '../../../../../../core/model/proyecto.model'

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements AfterViewInit {
  
  displayedColumns: string[] = ['codigo', 'nombre', 'tipo', 'coordinador','semestre', 'lugar', 'escuela', 'estado', 'accion'];
  dataSource: MatTableDataSource<Proyecto>;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor() {
    const users: Proyecto[] = [
      {
        codigo: '2023123FIA2',
        nombre: 'Hora del codigo',
        tipo: 'Especifico',
        coordinador: 'Diana Sanchez',
        semestre: '2023-2',
        lugar: 'carapongo huachipa',
        escuela: 'Ingeniera de sistmea',
        estado: 'Terminado'
      },
      {
        codigo: '2023123FIA3',
        nombre: 'Hora del codigo',
        tipo: 'Especifico',
        coordinador: 'Diana Sanchez',
        semestre: '2023-2',
        lugar: 'carapongo huachipa',
        escuela: 'Ingeniera de sistmea',
        estado: 'Terminado'
      }
    ]
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}