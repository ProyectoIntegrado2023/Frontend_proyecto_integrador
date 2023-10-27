import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/core/model/frontend/proyecto.model';
import { ProyectoService } from 'src/app/core/services/proyecto.service';

@Component({
  selector: 'app-lista-proyecto',
  templateUrl: './lista-proyecto.component.html',
  styleUrls: ['./lista-proyecto.component.css']
})
export class ListaProyectoComponent implements OnInit{
status: boolean = true
lista_proyectos : Proyecto [] = []

constructor(
  private proyectosService : ProyectoService,
  private router: Router
  ){}

ngOnInit(): void {
    this.proyectosService.getAll().subscribe(d => this.lista_proyectos = d);
}
public verproyecto(): void{
  this.status = !this.status
  this.router.navigate(['home/modulo/2/lista-proyecto/proyecto']);
}

public regresar() {
  this.status = !this.status
  this.router.navigate(['home/modulo/2/lista-proyecto']);
}

}
