import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs'
import { ProyectoService, CursoArticuladoService, TipoConvenioService, 
  CicloService, EstadoService, EscuelaService, SemestreService } from 'src/app/core/index.services';
import { Proyecto, CursoArticulado, Persona, Escuela, Ciclo, TipoConvenio } from 'src/app/core/model/index.frontend';
import { generarCodigoProyecto } from 'src/app/shared/function/generarCodigoEscuela';
import { carpetaProyecto, carpetaRecurso } from 'src/app/core/global/const-carpeta.firebase';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  urlGuardar: string = '/home/modulo/1/agregar-proyecto/general';
  carpetaFire: string = '';
  
  persona: Persona = Persona.init();
  proyecto: Proyecto = Proyecto.init();

  listarCiclo: Ciclo[] = []
  listaEscuela: BehaviorSubject<Escuela[]> = new BehaviorSubject<Escuela[]>([])
  proyectoEscuela: BehaviorSubject<Escuela> = new BehaviorSubject<Escuela>(Escuela.init())
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

      this.estadoService.getAll().subscribe(data => { // mejorar esto 
        this.proyecto.estado = data[0]
      })
      this.semestreService.getAll().subscribe(data => { // mejorar esto 
        this.proyecto.semestre = data[0]
      })

    } else {
      this.proyecto = localStorage.getItem('proyecto') ? JSON.parse(localStorage.getItem('proyecto')!) : Proyecto.init();
      this.proyectoEscuela.next(this.proyecto.escuela);
      this.cursoArticuladoService.getAll().subscribe(data => {
        this.listaCursoArticulado = data.filter(c => c.escuela.nombre == this.proyecto.escuela.nombre)
      })
    }

    this.escuelaService.getAll().subscribe(data => {
      this.listaEscuela.next(data)
    })
    this.tipoConvenioService.getAll().subscribe(data => {
      this.listaTipoConvenio = data
    })
    this.proyectoService.getAll().subscribe(data => {
      this.listaProyecto = data
    })
  }

  public filtrarCursoPorEscuela(){
    this.proyecto.curso_articulado = CursoArticulado.init();
    const nombreEscuela: string = this.proyecto.escuela.nombre ?? 'U P E U';
    const codigo = generarCodigoProyecto(nombreEscuela, this.listaProyecto);
    this.carpetaFire = carpetaProyecto + codigo + '/' + carpetaRecurso; // carpeta donde se almacena los recursos del proyecto
    this.proyecto.codigo = codigo;
    
    this.cicloService.getAll().subscribe(data => {
      this.listarCiclo = data.filter(c => c.escuela.id == this.proyecto.escuela.id);
    })
  }

  public filtrarCursoArticulado(){
    this.cursoArticuladoService.getAll().subscribe(data => {
      this.listaCursoArticulado = data.filter(c => c.escuela.id == this.proyecto.escuela.id);
    })
  }

  public subirProyecto() {
    if(this.router.url === this.urlGuardar){
      this.guardarProyecto(this.proyecto);
    } else {
      this.editarProyecto(this.proyecto);
    }
  }

  private guardarProyecto(pry: Proyecto){
    this.proyectoService.save(pry).subscribe(
      (res) => {
        this.notificacion(true,'se guardo corectamente');
        // localStorage.setItem('proyectoAgregado', JSON.stringify(this.proyecto))
      },
      (error) => {
        this.notificacion(false,'ocurrio un error');
      }
    );
  }

  private editarProyecto(pry: Proyecto){
    this.proyectoService.update(this.proyecto).subscribe(
      (res) => {
        this.notificacion(true,'se actualizo corectamente');
        localStorage.removeItem('proyecto');
        localStorage.setItem('proyecto', JSON.stringify(this.proyecto))
      },
      (error) =>{
        this.notificacion(false,'ocurrio un error');
      }
    );
  }

  public onFileUrlsEmitted(fileUrls: string[]){
    console.log(fileUrls);
  }

  private notificacion(satisfecho: boolean, mensaje: string){
    this.mensaje = mensaje;
    this.satisfaccion = satisfecho;
    this.confirmarEnvioHttp = true
  }

  public cancelar() {
    if(this.router.url === this.urlGuardar){
      this.proyecto = Proyecto.init();
    } else {
      this.proyecto = localStorage.getItem('proyecto') ? JSON.parse(localStorage.getItem('proyecto')!) : Proyecto.init();
    }
  }
}
