import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Proyecto } from 'src/app/core/model/index.frontend'
import { ProyectoService } from 'src/app/core/services/index.services.https';
import { UpdateEffectProjectService } from 'src/app/core/services/index.services.status';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit  {
  listaProyecto: Proyecto[] = []
  displayedColumns: string[] = ['codigo', 'nombre', 'tipo', 'coordinador','semestre', 'lugar', 'escuela', 'estado', 'accion'];
  dataSource!: MatTableDataSource<Proyecto>;
  arrayPaginator: number[] = [5, 10, 25, 100];
  pageDefine: number = this.arrayPaginator[0];

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(
    private proyectoService: ProyectoService,
    private router: Router,
    private _updateEffectProject: UpdateEffectProjectService
  ) {}

  ngOnInit(): void {
    localStorage.removeItem('proyecto');
    this.pageDefine = localStorage.getItem('pageSize') ? Number(localStorage.getItem('pageSize')) : this.arrayPaginator[0];

    this.proyectoService.getAll().subscribe(data => {
      this.listaProyecto = data;
      this.dataSource = new MatTableDataSource(this.listaProyecto);
      this.paginatorAndSort();
    })
  }

  public paginatorAndSort():void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public eliminar(id: number){
    this.proyectoService.delete(id).subscribe(data => {
      this.listaProyecto = this.listaProyecto.filter(v => v.id != id);
      this.dataSource = new MatTableDataSource(this.listaProyecto);
      this.paginatorAndSort();
    })
  }
 
  public navegar(proyecto: Proyecto){
    this._updateEffectProject.emit(true);
    localStorage.setItem('proyecto', JSON.stringify(proyecto));
    this.router.navigate(['/home/modulo/1/proyecto/editar'])
  }

  public definePaginador($event: any) {
    const { pageSize } = $event;
    localStorage.setItem('pageSize', pageSize);
  }
}
