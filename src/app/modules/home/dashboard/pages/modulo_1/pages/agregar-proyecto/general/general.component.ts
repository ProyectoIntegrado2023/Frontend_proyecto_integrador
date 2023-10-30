import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService, CursoArticuladoService } from 'src/app/core/index.services';
import { Proyecto, CursoArticulado } from 'src/app/core/model/index.frontend';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  urlGuardar: string = '/home/modulo/1/agregar-proyecto/general';
  proyecto: Proyecto = Proyecto.init();
  confirmarEnvioHttp: boolean = false;
  mensaje: string = ''
  satisfaccion: boolean = false;
  listaCursoArticulado: CursoArticulado[] = []

  constructor(
    private router: Router,
    private proyectoService: ProyectoService,
    private cursoArticuladoService: CursoArticuladoService
  ){}

  ngOnInit ():void {
    if(this.router.url === this.urlGuardar) {
      localStorage.removeItem('proyecto');
    } else {
      this.proyecto = localStorage.getItem('proyecto') ? JSON.parse(localStorage.getItem('proyecto')!) : Proyecto.init();
      this.cursoArticuladoService.getAll().subscribe(data => {
        this.listaCursoArticulado = data.filter(c => c.escuela.nombre == this.proyecto.escuela.nombre)
      })
    }
  }

  public guardarProyecto() {
    console.log('ejecutando');
    if(this.router.url === this.urlGuardar){
      this.proyectoService.save(this.proyecto).subscribe(
        (res) => {
          this.mensaje = 'se guardo corectamente'
          this.satisfaccion = true
          this.proyecto = Proyecto.init()
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
          this.satisfaccion = true
          localStorage.removeItem('proyecto');
          localStorage.setItem('proyecto', JSON.stringify(this.proyecto))
        },
        (error) =>{
          this.mensaje = 'ocurrio un error'
          this.satisfaccion = false
          console.log('error xd');
        }
      );
    }
    this.confirmarEnvioHttp = true
  }

  public cancelar() {
    if(this.router.url === this.urlGuardar){
      this.proyecto = Proyecto.init();
    } else {
      this.proyecto = localStorage.getItem('proyecto') ? JSON.parse(localStorage.getItem('proyecto')!) : Proyecto.init();
    }
  }

  public cerrarConfirmacion() {
    this.confirmarEnvioHttp = false
    this.satisfaccion = false
    this.mensaje = ''
  }

  generarCodigoProyecto(escuela: string, proyectos: Proyecto[]) {
  const año = new Date().getFullYear();
  const abreviacion = this.obtenerAbreviacionEscuela(escuela);
  const numeroProyectos = this.obtenerNumeroProyectos(año + abreviacion, proyectos); //mejorar no cuenta los proyecto creados anteriormente para aumentar
  const numeroProyectosStr = numeroProyectos.toString().padStart(2, '0'); //formateado para dos numeros revisar si funciona como deberia
  const codigoProyecto = año + abreviacion + numeroProyectosStr;

  return codigoProyecto;
}

  obtenerAbreviacionEscuela(escuela: string) {
    const palabras = escuela.split(' ');
    let iniciales = '';
    for (let palabra of palabras) {
      iniciales += palabra.charAt(0);
    }
    
    return iniciales;
  }

  obtenerNumeroProyectos(codigo: string, proyectos: Proyecto[]) {
    const proyectosEscuela = proyectos.filter(p => {
      if(p.codigo != null) {
        const parteInicial = p.codigo.match(/^\d+[A-Z]+/)![0]; //buscar las letras del codigo y 
      }
    });
    return proyectosEscuela.length + 1;
  }

}
