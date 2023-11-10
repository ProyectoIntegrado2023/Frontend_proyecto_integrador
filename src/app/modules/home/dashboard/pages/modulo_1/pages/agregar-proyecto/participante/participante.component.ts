import { Component, OnInit } from '@angular/core';
import { CicloService, DocenteService, EscuelaService, EstudianteService, FacultadService, CursoArticuladoService } from 'src/app/core/services/index.services.https';
import { Ciclo, CursoArticulado, Docente, Escuela, Estudiante, Facultad, Participante } from 'src/app/core/model/index.frontend';

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

  // filtro para docente
  listaFacultadDocente: Facultad[] = []
  listaEscuelaDocente: Escuela[] = []
  listaCursoArticuladoDocente: CursoArticulado[] = []

  // participante
  listaEstudiante: Estudiante[] = []
  listaDocente: Docente[] = []
  listaCursoArticulado_vistaDocente: CursoArticulado[] = []

  // seleccion de filtro para el estudiante
  facultadSeleccionadoEstudiante: Facultad = Facultad.init()
  escuelaSeleccionadoEstudiante: Escuela = Escuela.init()
  cicloSeleccionadoEstudiante: Ciclo = Ciclo.init()

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

  constructor(
    private facultadService: FacultadService,
    private escuelaService: EscuelaService,
    private cicloService: CicloService,
    private cursoArticuladoService: CursoArticuladoService,
    private estudianteService: EstudianteService,
    private docenteService: DocenteService,
  ) {}

  ngOnInit(): void {
    this.facultadService.getAll().subscribe(data => {
      this.listaFacultadEstudiante = data
      this.listaFacultadDocente = data
    })
    this.docenteService.getAll().subscribe(data => {
      this.arrayDocente = data
    })
    this.estudianteService.getAll().subscribe(data => {
      this.arrayEstudiante = data
    })
    this.cursoArticuladoService.getAll().subscribe(data => {
      this.arrayCursoArticulado = data
    })
  }

  // filtro estudiante
  public filtrarEscuelaEstudiante() {
    this.escuelaService.getAll().subscribe(data => {
      this.listaEscuelaEstudiante = data.filter(e => e.facultad.id == this.facultadSeleccionadoEstudiante.id);
    }) 
  }

  public filtrarCicloEstudiante() {
    this.cicloService.getAll().subscribe(data => {
      this.listaCicloEstudiante = data.filter(c => c.escuela.id == this.escuelaSeleccionadoEstudiante.id);      
    })
  }

  public filtrarEstudiante() {
    this.estudianteService.getAll().subscribe(data => {
      this.listaEstudiante = data.filter(e => e.ciclo.id == this.cicloSeleccionadoEstudiante.id);
    })
  }

  // filtrar docente
  public filtrarEscuelaDocente() {
    this.escuelaService.getAll().subscribe(data => {
      this.listaEscuelaDocente = data.filter(e => e.facultad.id == this.facultadSeleccionadoDocente.id);
    }) 
  }

  public filtrarCursoArticuladoDocente() {
    this.cursoArticuladoService.getAll().subscribe(data => {
      this.listaCursoArticuladoDocente = data.filter(c => c.escuela.id == this.escuelaSeleccionadoDocente.id);
    })
  }

  public filtrarDocente() {
    this.docenteService.getAll().subscribe(data => {
      this.listaDocente = data.filter(d => d.id == this.cursoArticuladoSeleccionadoDocente.docente.id);
    })
    this.cursoArticuladoService.getAll().subscribe(data => {
      this.listaCursoArticulado_vistaDocente = data.filter(c => c.id == this.cursoArticuladoSeleccionadoDocente.id);
      this.listaCursoArticulado_vistaDocente.forEach(v => v.escuela.facultad = this.facultadSeleccionadoDocente);
    })
  }

  // busqueda
  public   buscarEstudiante(){
    this.estudianteEncontrado = this.arrayEstudiante.find(e => e.codigo == this.codigo) ?? Estudiante.init();
  }

  public buscarDocente(){
    //arreglar, al parecer depende de los filtros
    const cursos_vistaDocente = this.arrayCursoArticulado.filter(c => c.persona.dni == this.dni);
    this.cursoArticuladoEncontrado_vistaDocente = cursos_vistaDocente
    cursos_vistaDocente.forEach((v, index) => {
      if(v.escuela.id !=  null){
        this.escuelaService.getById(v.escuela.id).subscribe(data => {
          this.cursoArticuladoEncontrado_vistaDocente[index].escuela.facultad = data.facultad
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
    const docenteEncontrado = this.listaCursoArticulado_vistaDocente.some(d => d.docente.id == vista_docente.docente.id);
    if(!docenteEncontrado){
      this.listaCursoArticulado_vistaDocente.push(vista_docente);  
      this.cursoArticuladoEncontrado_vistaDocente = this.cursoArticuladoEncontrado_vistaDocente.filter(vd => vd.id != vista_docente.id);
    } else {
      alert('docente ya asignado');
    }
  }

  public quitarDocente(vista_docente: CursoArticulado){
    const docenteEncontrado = this.cursoArticuladoEncontrado_vistaDocente.some(d => d.docente.persona.dni == vista_docente.docente.persona.dni);
    if(docenteEncontrado){
      this.cursoArticuladoEncontrado_vistaDocente.push(vista_docente);
    }
    this.listaCursoArticulado_vistaDocente = this.listaCursoArticulado_vistaDocente.filter(vd => vd.id != vista_docente.id); 
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
    this.listaEstudiante = this.listaEstudiante.filter(e => e.id != estudiante.id);
  }

  public guardarParticipante(){
    for(let docente_vista of this.listaCursoArticulado_vistaDocente) {
      let participante: Participante = Participante.init();
      participante.docente = docente_vista.docente;
      participante.persona = docente_vista.persona;
      // participante.proyecto // esto funcionaracon el storage
      console.log(participante);
    }
    for(let estudiante of this.listaEstudiante) {
      let participante: Participante = Participante.init();
      participante.estudiante = estudiante;
      participante.persona = estudiante.persona;
      // participante.proyecto // esto funcionaracon el storage
      console.log(participante);
    }
  }
}
