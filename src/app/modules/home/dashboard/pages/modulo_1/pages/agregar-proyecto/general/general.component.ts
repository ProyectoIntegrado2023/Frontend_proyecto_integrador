import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UpdateEffectProjectService } from 'src/app/core/services/index.services.status';
import { generarCodigoProyecto } from 'src/app/core/function/generarCodigoEscuela';
import { Proyecto, CursoArticulado, Persona, Escuela, Ciclo, TipoConvenio } from 'src/app/core/model/index.frontend';
import { ProyectoService, CursoArticuladoService, TipoConvenioService, CicloService, EstadoService, EscuelaService, SemestreService } from 'src/app/core/services/index.services.https';
import { notificacionCon_titulo_cuerpo_icono } from 'src/app/core/function/SweetAlertDeterminado';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  statusUpdate: boolean = false;
  
  persona: Persona = Persona.init();
  proyecto: Proyecto = Proyecto.init();

  listarCiclo: Ciclo[] = []
  listaEscuela: Escuela[] = []
  listaProyecto: Proyecto[] = []
  listaTipoConvenio: TipoConvenio[] = []
  listaCursoArticulado: CursoArticulado[] = []

  constructor(
    private router: Router,
    private cicloService: CicloService,
    private estadoService: EstadoService,
    private escuelaService: EscuelaService,
    private proyectoService: ProyectoService,
    private semestreService: SemestreService,
    private tipoConvenioService: TipoConvenioService,
    private cursoArticuladoService: CursoArticuladoService,
    private _updateEffectProject: UpdateEffectProjectService,
  ){}

  ngOnInit ():void {
    this._updateEffectProject.get().subscribe(update =>{
      this.statusUpdate = update;
      this.cargarProyecto(update);
    })

    this.escuelaService.getAll().subscribe(data => {
      this.listaEscuela = data
    })
    this.tipoConvenioService.getAll().subscribe(data => {
      this.listaTipoConvenio = data
    })
    this.proyectoService.getAll().subscribe(data => {
      this.listaProyecto = data
    })
  }

  private cargarProyecto(willBeUpdate: boolean){
    if(!willBeUpdate){
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
      this.cursoArticuladoService.getAll().subscribe(data => {
        this.listaCursoArticulado = data.filter(c => c.escuela.nombre == this.proyecto.escuela.nombre)
      })
    }
  }

  public filtrarCursoPorEscuela(){
    const idEscuela = this.proyecto.escuela.id;
    const nombreEscuela: string = this.listaEscuela.find(e => e.id == idEscuela)?.nombre ?? 'U P E U';
    const codigo = generarCodigoProyecto(nombreEscuela, this.listaProyecto);
    this.proyecto.codigo = codigo;
    console.log(codigo);
    
    this.cicloService.getAll().subscribe(data => {
      this.listarCiclo = data.filter(c => c.escuela.id == this.proyecto.escuela.id);
      this.proyecto.curso_articulado = CursoArticulado.init();
    })
  }

  public filtrarCursoArticulado(){
    this.cursoArticuladoService.getAll().subscribe(data => {
      this.listaCursoArticulado = data.filter(c => c.escuela.id == this.proyecto.escuela.id);
    })
  }

  public subirProyecto() {
    if(!this.statusUpdate){
      this.guardarProyecto(this.proyecto);
    } else {
      this.editarProyecto(this.proyecto);
    }
  }

  private guardarProyecto(pry: Proyecto){
    this.proyectoService.save(pry).subscribe(
      (res) => {
        notificacionCon_titulo_cuerpo_icono('¡Guardado!', 'Se guardo Correctamente', 'success');
        localStorage.setItem('proyectoCreado', JSON.stringify(this.proyecto));
      },
      (error) => {
        notificacionCon_titulo_cuerpo_icono('Error', 'Ocurrio un error', 'error');
      }
    );
  }

  private editarProyecto(pry: Proyecto){
    this.proyectoService.update(pry).subscribe(
      (res) => {
        notificacionCon_titulo_cuerpo_icono('¡Actualizado!', 'se actualizo corectamente', 'success');
        localStorage.removeItem('proyecto');
        localStorage.setItem('proyecto', JSON.stringify(pry))
      },
      (error) =>{
        notificacionCon_titulo_cuerpo_icono('Error', 'Ocurrio un error', 'error');
      }
    );
  }

  public cancelar() {
    if(!this.statusUpdate){
      this.proyecto = Proyecto.init();
    } else {
      this.proyecto = localStorage.getItem('proyecto') ? JSON.parse(localStorage.getItem('proyecto')!) : Proyecto.init();
    }
  }

  public onFileUrlsEmitted(fileUrls: string[]){
    console.log(fileUrls);
  }
}
