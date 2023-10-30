import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Proyecto } from 'src/app/core/model/index.frontend'
import { ProyectoService } from 'src/app/core/index.services';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit  {
  listaProyecto: Proyecto[] = []
  displayedColumns: string[] = ['codigo', 'nombre', 'tipo', 'coordinador','semestre', 'lugar', 'escuela', 'estado', 'accion'];
  dataSource!: MatTableDataSource<Proyecto>;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(
    private proyectoService: ProyectoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    localStorage.removeItem('proyecto');

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
    localStorage.setItem('proyecto', JSON.stringify(proyecto));
    this.router.navigate(['/home/modulo/1/proyecto/editar'])
  }
}
