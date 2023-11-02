import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService, CursoArticuladoService, TipoConvenioService, 
  CicloService, EstadoService, EscuelaService, SemestreService } from 'src/app/core/index.services';
import { Proyecto, CursoArticulado, Persona, Escuela, Ciclo, TipoConvenio } from 'src/app/core/model/index.frontend';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  urlGuardar: string = '/home/modulo/1/agregar-proyecto/general';
  
  persona: Persona = Persona.init();
  proyecto: Proyecto = Proyecto.init();

  listarCiclo: Ciclo[] = []
  listaEscuela: Escuela[] = []
  listaProyecto: Proyecto[] = []
  listaTipoConvenio: TipoConvenio[] = []
  listaCursoArticulado: CursoArticulado[] = []
  
  mensaje: string = ''
  satisfaccion: boolean = false;
  confirmarEnvioHttp: boolean = false;

  constructor(
    private router: Router,
    private proyectoService: ProyectoService,
    private cursoArticuladoService: CursoArticuladoService,
    private escuelaService: EscuelaService,
    private cicloService: CicloService,
    private estadoService: EstadoService,
    private tipoConvenioService: TipoConvenioService,
    private semestreService: SemestreService
  ){}

  ngOnInit ():void {
    if(this.router.url === this.urlGuardar) {
      localStorage.removeItem('proyecto');
      this.persona = JSON.parse(localStorage.getItem('persona')!);
      this.proyecto.coordinador = this.persona.nombre;

      this.tipoConvenioService.getAll().subscribe(data => {
        this.listaTipoConvenio = data
      })
      this.estadoService.getAll().subscribe(data => { // mejorar esto 
        this.proyecto.estado = data[0]
      })
      this.semestreService.getAll().subscribe(data => { // mejorar esto 
        this.proyecto.semestre = data[0]
      })
      this.escuelaService.getAll().subscribe(data => {
        this.listaEscuela = data
      })

    } else {
      this.proyecto = localStorage.getItem('proyecto') ? JSON.parse(localStorage.getItem('proyecto')!) : Proyecto.init();
      this.proyectoService.getAll().subscribe(data => {
        this.listaProyecto = data
      })
      this.cursoArticuladoService.getAll().subscribe(data => {
        this.listaCursoArticulado = data.filter(c => c.escuela.nombre == this.proyecto.escuela.nombre)
      })
    }
  }

  public guardarProyecto() {
    if(this.router.url === this.urlGuardar){
      this.proyectoService.save(this.proyecto).subscribe(
        (res) => {
          this.mensaje = 'se guardo corectamente'
          this.satisfaccion = true
          // this.proyecto = Proyecto.init()
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

  public generarCodigoProyecto(escuela: string) {
    const año = new Date().getFullYear();
    const abreviacion = this.obtenerAbreviacionEscuela(escuela);
    const numeroProyectos = this.obtenerNumeroProyectos(año + abreviacion); //mejorar no cuenta los proyecto creados anteriormente para aumentar
    const numeroProyectosStr = numeroProyectos.toString().padStart(2, '0'); //formateado para dos numeros revisar si funciona como deberia
    const codigoProyecto = año + abreviacion + numeroProyectosStr;

    return codigoProyecto;
  }

  public obtenerAbreviacionEscuela(escuela: string) {
    const palabras = escuela.split(' ');
    let iniciales = '';
    for (let palabra of palabras) {
      iniciales += palabra.charAt(0);
    }
    return iniciales.toUpperCase();
  }

  public obtenerNumeroProyectos(codigo: string) {
    let contadorCodigo: number = 0;
    this.listaProyecto.filter(p => {
      if(p.codigo != null) {
        const parteInicial = p.codigo.match(/^\d+[A-Z]+/)![0]; //buscar las letras del codigo y los separa del resto del codigo
        if(parteInicial == codigo) {
          contadorCodigo++;
        }
      }
    });
    return contadorCodigo + 1;
  }

  public filtrarCursoPorEscula(){
    this.proyecto.curso_articulado = CursoArticulado.init();
    const nombreEscuela: string = this.proyecto.escuela.nombre ?? 'U P E U';
    this.proyecto.codigo = this.generarCodigoProyecto(nombreEscuela);
    
    this.cicloService.getAll().subscribe(data => {
      this.listarCiclo = data.filter(c => c.escuela.id == this.proyecto.escuela.id);
    })
  }

  public filtrarCursoArticulado(){
    this.cursoArticuladoService.getAll().subscribe(data => {
      this.listaCursoArticulado = data.filter(c => c.escuela.id == this.proyecto.escuela.id);
    })
  }

}
