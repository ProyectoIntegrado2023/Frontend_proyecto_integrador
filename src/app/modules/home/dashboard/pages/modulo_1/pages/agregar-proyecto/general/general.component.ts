import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { UpdateEffectProjectService } from 'src/app/core/services/index.services.status';
import { Proyecto, CursoArticulado, Escuela, Ciclo, TipoConvenio } from 'src/app/core/model/index.frontend';
import { ProyectoService, CursoArticuladoService, TipoConvenioService, CicloService, EscuelaService } from 'src/app/core/services/index.services.https';

import { generarCodigoProyecto } from 'src/app/core/function/generacion/generarCodigoEscuela';
import { notificacionConfirmacionEliminar, notificacionConfirmacionLimpieza, notificacionSimpleDinamico } from 'src/app/core/function/SweetAlert/alertDinamic';
import { recopilarPersona, recopilarProyecto } from 'src/app/core/function/localStorage/recopilarLocalStorage';
import { existeItemLocalStorage } from 'src/app/core/function/localStorage/validarLocalStorage';
import { deactivateProyecto } from 'src/app/core/guards/deactivate-proyecto.guard';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit, deactivateProyecto {
  statusUpdate: boolean = false;
  
  proyecto: Proyecto = Proyecto.init();

  cicloSeleccionada: Ciclo = Ciclo.init();
  escuelaSeleccionada: Escuela = Escuela.init();
  tipoConvenioSeleccionada: TipoConvenio = TipoConvenio.init();
  cursoArticuladoSeleccionada: CursoArticulado = CursoArticulado.init();

  listarCiclo: Ciclo[] = []
  listaEscuela: Escuela[] = []
  listaProyecto: Proyecto[] = []
  listaTipoConvenio: TipoConvenio[] = []
  listaCursoArticulado: CursoArticulado[] = []

  constructor(
    private cicloService: CicloService,
    private escuelaService: EscuelaService,
    private proyectoService: ProyectoService,
    private tipoConvenioService: TipoConvenioService,
    private cursoArticuladoService: CursoArticuladoService,
    private _updateEffectProject: UpdateEffectProjectService,
  ){}

  canExit() {
    let exit$: Promise<boolean> = notificacionConfirmacionEliminar('¿Desea abandonar el formulario?',false, 'Si, continuar', true, 'No abandonar')
    return exit$ ?? false;
  }

  ngOnInit ():void {
    this._updateEffectProject.get().subscribe(update =>{
      this.statusUpdate = update;
      this.cargarProyecto();
    })

    this.escuelaService.getAll().subscribe(arrayEscuelas => this.listaEscuela = arrayEscuelas)
    this.tipoConvenioService.getAll().subscribe(arrayConvenios => this.listaTipoConvenio = arrayConvenios)
    this.proyectoService.getAll().subscribe(arrayProyectos => this.listaProyecto = arrayProyectos)
  }

  private cargarProyecto(){
    if(!this.statusUpdate){
      this.obtenerProyectoCreado(existeItemLocalStorage('proyecto'));
    } else {
      this.recopilarDatosProyecto();
    }
    this.filtrarCicloPorEscuela();
    this.filtrarCursoPorCiclo();
  }

  private obtenerProyectoCreado(creado: boolean) {
    if(creado){
      this.recopilarDatosProyecto();
    } else {
      this.proyecto = Proyecto.init();
      this.proyecto.coordinador = recopilarPersona().nombre;
    }
  }

  private recopilarDatosProyecto(){
    this.proyecto = recopilarProyecto();
    this.cicloSeleccionada = this.proyecto.ciclo != null ? this.proyecto.ciclo : Ciclo.init();
    this.escuelaSeleccionada = this.proyecto.escuela != null ? this.proyecto.escuela : Escuela.init();
    this.tipoConvenioSeleccionada = this.proyecto.tipo_convenio != null ? this.proyecto.tipo_convenio : TipoConvenio.init();
    this.cursoArticuladoSeleccionada = this.proyecto.curso_articulado != null ? this.proyecto.curso_articulado : CursoArticulado.init();
  }

  public generaracionCodigoProyecto(){
    const idEscuela = this.escuelaSeleccionada.id;
    if(this.escuelaSeleccionada.id != 0) {
      this.proyecto.escuela = this.escuelaSeleccionada;
    }
    const nombreEscuela: string = this.listaEscuela.find(e => e.id == idEscuela)?.nombre ?? 'U P E U';
    this.proyecto.codigo = generarCodigoProyecto(nombreEscuela, this.listaProyecto);
  }

  public filtrarCicloPorEscuela(){
    this.cicloService.getAll().subscribe(arrayCiclos => {
      this.listarCiclo = arrayCiclos.filter(c => c.escuela?.id == this.proyecto.escuela?.id);
    })
  }

  public filtrarCursoPorCiclo(){
    this.cursoArticuladoService.getAll().subscribe(arrayCursos => {
      this.listaCursoArticulado = arrayCursos.filter(c => c.escuela?.id == this.proyecto.escuela?.id);
    })
  }

  public subirProyecto() {
    if(this.cicloSeleccionada.id != 0) this.proyecto.ciclo = this.cicloSeleccionada;
    if(this.tipoConvenioSeleccionada.id != 0) this.proyecto.tipo_convenio = this.tipoConvenioSeleccionada;
    if(this.cursoArticuladoSeleccionada.id != 0) this.proyecto.curso_articulado = this.cursoArticuladoSeleccionada;

    if(!this.statusUpdate){
      this.guardarProyecto(this.proyecto);
    } else {
      this.editarProyecto(this.proyecto);
    }
  }

  private guardarProyecto(pry: Proyecto){
    if(!existeItemLocalStorage('proyecto')) {
      this.proyectoService.save(pry).subscribe(
        (res) => {
          notificacionSimpleDinamico('¡Guardado!', 'Se guardo Correctamente', 'success');
          this.proyecto = res;
          localStorage.removeItem('proyecto');
          localStorage.setItem('proyecto', JSON.stringify(res));
        },
        (error) => {
          notificacionSimpleDinamico('Error', 'Ocurrio un error', 'error');
        }
      );
    } else {
      this.proyectoService.update(pry).subscribe(
        (res) => {
          notificacionSimpleDinamico('¡Cambio guardado!', 'Se guardo Correctamente los ultimos cambios', 'success');
          this.proyecto = res;
          localStorage.removeItem('proyecto');
          localStorage.setItem('proyecto', JSON.stringify(res));
        },
        (error) =>{
          notificacionSimpleDinamico('Error', 'Ocurrio un error', 'error');
        }
      );
    }
  }

  private editarProyecto(pry: Proyecto){
    this.proyectoService.update(pry).subscribe(
      (res) => {
        notificacionSimpleDinamico('¡Actualizado!', 'se actualizo corectamente', 'success');
        localStorage.removeItem('proyecto');
        localStorage.setItem('proyecto', JSON.stringify(res))
      },
      (error) =>{
        notificacionSimpleDinamico('Error', 'Ocurrio un error', 'error');
      }
    );
  }

  public cancelar() {
    if(!this.statusUpdate){
      this.cargarProyecto();
    } else {
      this.proyecto = recopilarProyecto();
    }
  }

  public limpiar(){
    notificacionConfirmacionLimpieza().then((result) => {
      if(result) {
        localStorage.removeItem('proyecto');
        this.cargarProyecto();
      }
    })
  }

  public onFileUrlsEmitted(fileUrls: string[]){
    console.log(fileUrls);
  }
}
