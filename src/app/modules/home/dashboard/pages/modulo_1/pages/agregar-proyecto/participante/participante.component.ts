import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { recopilarProyecto } from 'src/app/core/function/localStorage/recopilarLocalStorage';
import { convertirDocente, convertirEstudiante } from 'src/app/core/function/generacion/convertirParticipante';
import { notificacionConfirmacionEliminar, notificacionSimpleDinamico } from 'src/app/core/function/SweetAlert/alertDinamic';
import { Ciclo, CursoArticulado, Docente, Escuela, Estudiante, Facultad, Participante } from 'src/app/core/model/index.frontend';
import { CicloService, DocenteService, EscuelaService, EstudianteService, FacultadService, CursoArticuladoService, ParticipanteService } from 'src/app/core/services/index.services.https';

@Component({
  selector: 'app-participante',
  templateUrl: './participante.component.html',
  styleUrls: ['./participante.component.css']
})
export class ParticipanteComponent implements OnInit {
  // filtro para estudiante
  listaFacultadEstudiante: Facultad[] = []
  listaEscuelaEstudiante: Escuela[] = []
  listaCicloEstudiante: Ciclo[] = []
  // seleccion de filtro para el estudiante
  facultadSeleccionadoEstudiante: Facultad = Facultad.init()
  escuelaSeleccionadoEstudiante: Escuela = Escuela.init()
  cicloSeleccionadoEstudiante: Ciclo = Ciclo.init()

  // filtro para docente
  listaFacultadDocente: Facultad[] = []
  listaEscuelaDocente: Escuela[] = []
  listaCursoArticuladoDocente: CursoArticulado[] = []
  // seleccion de filtro para el docente
  facultadSeleccionadoDocente: Facultad = Facultad.init()
  escuelaSeleccionadoDocente: Escuela = Escuela.init()
  cursoArticuladoSeleccionadoDocente: CursoArticulado = CursoArticulado.init()

  // parametros busqueda
  codigo: string = ''
  dni: string = ''
  // resultado busqueda
  estudianteEncontrado: Estudiante = Estudiante.init()
  cursoArticuladoEncontrado_vistaDocente: CursoArticulado[] = []

  // listado para su busqueda ya que el back es tacaño :v
  arrayEstudiante: Estudiante[] = []
  arrayDocente: Docente[] = []
  arrayCursoArticulado: CursoArticulado[] = []
  // participante
  listaEstudiante: Estudiante[] = []
  listaDocente: Docente[] = []
  listaParticipante: Participante[] = []
  listaParticipanteCopia: Participante[] = []
  listaCursoArticulado_vistaDocente: CursoArticulado[] = [] // vamos a ver

  constructor(
    private facultadService: FacultadService,
    private escuelaService: EscuelaService,
    private cicloService: CicloService,
    private cursoArticuladoService: CursoArticuladoService,
    private estudianteService: EstudianteService,
    private docenteService: DocenteService,
    private participanteService: ParticipanteService,
  ) {}

  ngOnInit(): void {
    this.facultadService.getAll().subscribe(data => {
      this.listaFacultadEstudiante = data
      this.listaFacultadDocente = data
    })
    this.docenteService.getAll().subscribe(data => {
      this.arrayDocente = data;
    })
    this.participanteService.getAll().subscribe(data => {
      this.listaParticipante = data.filter(p => p.proyecto?.id == recopilarProyecto('proyecto')?.id);
      this.listaParticipanteCopia = this.listaParticipante;
      this.tranformarDocenteEstudiante();
    })
  }

  private tranformarDocenteEstudiante() {
    this.cursoArticuladoService.getAll().subscribe(data => {
      this.arrayCursoArticulado = data
      this.listaCursoArticulado_vistaDocente = convertirDocente(this.listaParticipante,this.arrayCursoArticulado);
      this.actualizarFacultadDocente();
    })
    this.estudianteService.getAll().subscribe(data => {
      this.arrayEstudiante = data
      this.listaEstudiante = convertirEstudiante(this.listaParticipante,this.arrayEstudiante);
      this.actualizarFacultadEstudiante();
    })
  }
  
  private actualizarFacultadDocente() {
    this.escuelaService.getAll().subscribe(arrayEscuela => {
      this.listaCursoArticulado_vistaDocente.forEach(doce => {
        if(doce.escuela != null) {
          doce.escuela.facultad = arrayEscuela.find(e => e.id === doce.escuela?.id) ?? Facultad.init();
          this.facultadSeleccionadoDocente.id = doce.escuela.facultad.id;
          this.escuelaSeleccionadoDocente.id = doce.escuela.id;
          this.cursoArticuladoSeleccionadoDocente.id = doce.id;
          this.filtrarEscuelaDocente();
          this.filtrarCursoArticuladoDocente();
        }
      });
    }) 
  }

  private actualizarFacultadEstudiante() {
    this.escuelaService.getAll().subscribe(arrayEscuela => {
      this.listaEstudiante.forEach(est => {
        if(est.ciclo != null && est.ciclo.escuela != null) {
          est.ciclo.escuela.facultad = arrayEscuela.find(e => e.id === est.ciclo?.escuela?.id) ?? Facultad.init();
          this.facultadSeleccionadoEstudiante.id = est.ciclo.escuela.facultad.id;
          this.escuelaSeleccionadoEstudiante.id = est.ciclo.escuela.id;
          this.cicloSeleccionadoEstudiante.id = est.ciclo.id;
          this.filtrarEscuelaEstudiante();
          this.filtrarCicloEstudiante();
        }
      });
    })
  }

  // ESTUDIANTE ----------------------
  public filtrarEscuelaEstudiante() {
    this.escuelaService.getAll().subscribe(data => {
      this.listaEscuelaEstudiante = data.filter(e => e.facultad?.id == this.facultadSeleccionadoEstudiante.id);
    }) 
  }

  public filtrarCicloEstudiante() {
    this.cicloService.getAll().subscribe(data => {
      this.listaCicloEstudiante = data.filter(c => c.escuela?.id == this.escuelaSeleccionadoEstudiante.id);      
    })
  }

  public filtrarEstudiante() {
    this.estudianteService.getAll().subscribe(data => {
      this.listaEstudiante = data.filter(e => e.ciclo?.id == this.cicloSeleccionadoEstudiante.id);
      this.actualizarFacultadEstudiante();
    })
  }

  public buscarEstudiante(){
    this.estudianteEncontrado = this.arrayEstudiante.find(e => e.codigo == this.codigo) ?? Estudiante.init();
  }

  public agregarEstudiante(estudiante: Estudiante){
    const estudianteEncontrado = this.listaEstudiante.some(e => e.codigo == estudiante.codigo);
    if(!estudianteEncontrado){
      this.listaEstudiante.push(estudiante);  
      this.estudianteEncontrado = Estudiante.init();
    } else {
      alert('estudiante ya asignado');
    }
  }

  public quitarEstudiante(estudiante: Estudiante){
    notificacionConfirmacionEliminar('Existe algunos elementos que se eliminaran',false, 'Eliminar y continuar', true, '')
      .then((result) => {
        if(result) {
          const idEstudiante: number = estudiante?.id ?? 0;
          if(idEstudiante != 0) {
            const idParticipante: number = this.listaParticipante.find(p => p.estudiante?.id == idEstudiante)?.id ?? 0;
            this.participanteService.delete(idParticipante).subscribe(
              (res) => {
                notificacionSimpleDinamico('Participante eliminado', '', 'success');
                this.listaEstudiante = this.listaEstudiante.filter(e => e.id != estudiante.id);
              },
              (error) => notificacionSimpleDinamico('Error', '', 'error')
            );
          }
        }
    })
  }

  // DOCENTE ----------------------------------------
  public filtrarEscuelaDocente() {
    this.escuelaService.getAll().subscribe(data => {
      this.listaEscuelaDocente = data.filter(e => e.facultad?.id == this.facultadSeleccionadoDocente.id);
    }) 
  }

  public filtrarCursoArticuladoDocente() {
    this.cursoArticuladoService.getAll().subscribe(data => {
      this.listaCursoArticuladoDocente = data.filter(c => c.escuela?.id == this.escuelaSeleccionadoDocente.id);
    })
  }

  public filtrarDocente() {
    this.docenteService.getAll().subscribe(data => {
      this.listaDocente = data.filter(d => d.id == this.cursoArticuladoSeleccionadoDocente.docente?.id);
    })
    this.cursoArticuladoService.getAll().subscribe(data => {
      this.listaCursoArticulado_vistaDocente = data.filter(c => c.id == this.cursoArticuladoSeleccionadoDocente.id);
      for(let vd of this.listaCursoArticulado_vistaDocente){
        if(vd.escuela != null) {
          vd.escuela.facultad = this.facultadSeleccionadoDocente;
        }
      }
    })
  }

  public quitarDocente(vista_docente: CursoArticulado){
    notificacionConfirmacionEliminar('Existe algunos elementos que se eliminaran',false, 'Eliminar y continuar', true, '')
      .then((result) => {
        if(result) {
          const docenteEncontrado = this.cursoArticuladoEncontrado_vistaDocente.some(d => d.docente?.persona?.dni == vista_docente.docente?.persona?.dni);
          if(docenteEncontrado){
            this.cursoArticuladoEncontrado_vistaDocente.push(vista_docente);
          }
          this.listaCursoArticulado_vistaDocente = this.listaCursoArticulado_vistaDocente.filter(vd => vd.id != vista_docente.id); 
          const idDocente: number = vista_docente.docente?.id ?? 0;
          if(idDocente != 0) {
            const idParticipante: number = this.listaParticipante.find(p => p.docente?.id == idDocente)?.id ?? 0;
            this.participanteService.delete(idParticipante).subscribe(
              (res) => notificacionSimpleDinamico('Participante eliminado', '', 'success'),
              (error) => notificacionSimpleDinamico('Error', '', 'error')
            );
          }
        }
    })  
  }

  public buscarDocente(){
    //arreglar, al parecer depende de los filtros
    const cursos_vistaDocente = this.arrayCursoArticulado.filter(c => c.persona?.dni == this.dni);
    this.cursoArticuladoEncontrado_vistaDocente = cursos_vistaDocente
    cursos_vistaDocente.forEach((v, index) => {
      if(v.escuela != null && v.escuela.id != 0){
        this.escuelaService.getById(v.escuela.id).subscribe(data => {
          // this.cursoArticuladoEncontrado_vistaDocente[index].escuela = data
          this.cursoArticuladoEncontrado_vistaDocente[index].escuela!.facultad = data.facultad
        })
      }
    });
  }

  public agregarDocente(vista_docente: CursoArticulado){
    /*
      dado que la entidad docente no esta relacionado con entidades importantes, 
      entonces se considero a curso articulado dado que cuenta 
      con el docente como una de sus relaciones
    */ 
    const docenteEncontrado = this.listaCursoArticulado_vistaDocente.some(d => d.docente?.id == vista_docente.docente?.id);
    if(!docenteEncontrado){
      this.listaCursoArticulado_vistaDocente.push(vista_docente);  
      this.cursoArticuladoEncontrado_vistaDocente = this.cursoArticuladoEncontrado_vistaDocente.filter(vd => vd.id != vista_docente.id);
    } else {
      alert('docente ya asignado');
    }
  }

  public guardarParticipante(){
    this.combertirParticipante();

    const observables = this.listaParticipante.map(rp => {
      rp.proyecto = recopilarProyecto('proyecto');
      const existe = this.listaParticipanteCopia.some(rpCopia => rpCopia.id = rp.id);
      if(existe) {
        return Promise.resolve(rp);
      } else {
        return this.participanteService.save(rp);
      }
    });

    forkJoin(observables).subscribe(
      (resultados) => {
        this.listaParticipante = resultados;
        this.listaParticipanteCopia = resultados;
        notificacionSimpleDinamico('¡Guardado!', 'Se guardo todo correctamente', 'success');
      },
      (error) => {
        notificacionSimpleDinamico('Error', 'Ocurrio un error', 'error');
      }
    );
  }

  private combertirParticipante() {
    for(let docente_vista of this.listaCursoArticulado_vistaDocente) {
      if(!this.listaParticipante.some(p => p.docente?.id == docente_vista.docente?.id)) {
        let participante: Participante = Participante.init();
        participante.docente = docente_vista.docente;
        participante.persona = docente_vista.persona;
        if(participante?.proyecto?.id == 0) { 
          participante.proyecto.id = recopilarProyecto('proyecto').id; 
        }
        this.listaParticipante.push(participante);
      }
    }
    for(let estudiante of this.listaEstudiante) {
      if(!this.listaParticipante.some(p => p.estudiante?.id == estudiante.id)) {
        let participante: Participante = Participante.init();
        participante.estudiante = estudiante;
        participante.persona = estudiante.persona;
        if(participante?.proyecto?.id == 0) { 
          participante.proyecto.id = recopilarProyecto('proyecto').id; 
        }
        this.listaParticipante.push(participante);
      }
    }
  }
}
