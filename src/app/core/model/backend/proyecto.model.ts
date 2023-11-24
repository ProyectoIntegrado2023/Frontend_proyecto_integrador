import { Proyecto } from '../index.frontend';
import { SemestreModel, ActividadModel, RecursoModel, 
  ParticipanteModel, RolProyectoModel, CicloModel, 
  EscuelaModel, TipoConvenioModel, EstadoModel, CursoArticuladoModel } from '../index.backend';

export class ProyectoModel {

  static init(): ProyectoModel {
    return new this(
      0,
      '',
      '',
      '',
      '',
      '',
      '',
      0,
      '',
      '',
      '',
      null,
      null,
      null,
      null,
      null,
      null,
      [],
      [],
      [],
      [],
    )
  }

  static fromFrontend(obj: Proyecto | null): ProyectoModel | null{
    return obj != null ? new this(
      obj.id,
      obj.nombre,
      obj.codigo,
      obj.coordinador,
      obj.fecha_inicio,
      obj.fecha_fin,
      obj.lugar,
      obj.presupuesto,
      obj.descripcion,
      obj.objetivos,
      obj.informe_final,
      CursoArticuladoModel.fromFrontend(obj.curso_articulado),
      TipoConvenioModel.fromFrontend(obj.tipo_convenio),
      EstadoModel.fromFrontend(obj.estado),
      CicloModel.fromFrontend(obj.ciclo),
      EscuelaModel.fromFrontend(obj.escuela),
      SemestreModel.fromFrontend(obj.semestre),
      [],
      [],
      [],
      []
    ) : null;
  }

  constructor(
    public id_proyecto           : number,
    public nombre                : string,
    public codigo                : string,
    public coordinador           : string,
    public fecha_inicio          : string,
    public fecha_fin             : string,
    public lugar                 : string,
    public presupuesto           : number,
    public descripcion           : string,
    public objetivos             : string,
    public informe_final         : string,
    public id_curso_articulado   : CursoArticuladoModel   | null,
    public id_tipo_de_convenio   : TipoConvenioModel      | null,
    public id_estado             : EstadoModel            | null,
    public id_ciclo              : CicloModel             | null,
    public id_escuela            : EscuelaModel           | null,
    public id_semestre           : SemestreModel          | null,
    public actividades           : ActividadModel[]       ,
    public recurso               : RecursoModel[]         ,
    public participante          : ParticipanteModel[]    ,
    public rol_proyecto          : RolProyectoModel[]     ,
  ){}

  }