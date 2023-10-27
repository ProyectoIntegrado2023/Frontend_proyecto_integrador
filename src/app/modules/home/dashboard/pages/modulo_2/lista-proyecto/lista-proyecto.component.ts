import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/core/model/proyectos.model';
import { ProyectosService } from 'src/app/core/services/proyectos.service';

@Component({
  selector: 'app-lista-proyecto',
  templateUrl: './lista-proyecto.component.html',
  styleUrls: ['./lista-proyecto.component.css']
})
export class ListaProyectoComponent implements OnInit{
status: boolean = true
lista_proyectos : Proyectos [] = []

constructor(
  private proyectosService : ProyectosService,
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
