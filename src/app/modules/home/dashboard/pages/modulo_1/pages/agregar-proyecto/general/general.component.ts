import { ProyectoService } from 'src/app/core/services/proyecto.service';
import { Proyecto } from 'src/app/core/model/frontend/proyecto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  urlGuardar: string = '/home/modulo/1/agregar-proyecto/general';
  proyecto: Proyecto = new Proyecto();
  confirmarGuardado: boolean = false;
  mensaje: string = ''
  satisfaccion: boolean = false;
  constructor(
    private router: Router,
    private proyectoService: ProyectoService
  ){}

  ngOnInit ():void {
    
    if(this.router.url === this.urlGuardar) {
      localStorage.removeItem('proyecto');
    } else {
      this.proyecto = localStorage.getItem('proyecto') ? JSON.parse(localStorage.getItem('proyecto')!) : new Proyecto();
    }
  }

  public guardarProyecto() {
    if(this.router.url === this.urlGuardar){
      this.proyectoService.save(this.proyecto).subscribe(
        (res) => {
          this.mensaje = 'se guardo corectamente'
          this.confirmarGuardado = true
          this.proyecto = new Proyecto()
        },
        (error) => {
          this.mensaje = 'ocurrio un error'
          this.satisfaccion = false
        }
      );
    } else {
      this.proyectoService.update(this.proyecto).subscribe(
        (res) => {
          this.mensaje = 'se actualizo corectamente'
          this.confirmarGuardado = true
          localStorage.removeItem('proyecto');
          localStorage.setItem('proyecto', JSON.stringify(this.proyecto))
        },
        (error) =>{
          this.mensaje = 'ocurrio un error'
          this.satisfaccion = false
        }
      );
    }
    this.satisfaccion = true
  }

  public cancelar() {
    if(this.router.url === this.urlGuardar){
      this.proyecto = new Proyecto();
    } else {
      this.proyecto = localStorage.getItem('proyecto') ? JSON.parse(localStorage.getItem('proyecto')!) : new Proyecto();
    }
  }

  public cerrarConfirmacion() {
    this.confirmarGuardado = false
    this.satisfaccion = false
    this.mensaje = ''
  }

}
