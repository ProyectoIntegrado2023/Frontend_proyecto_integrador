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
      CursoArticuladoModel.init(),
      TipoConvenioModel.init(),
      EstadoModel.init(),
      CicloModel.init(),
      EscuelaModel.init(),
      SemestreModel.init(),
      [],
      [],
      [],
      [],
    )
  }

  static fromFrontend(obj: Proyecto): ProyectoModel{
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
    ) : this.init();
  }

  constructor(
    public id_proyecto           : number                 | null,
    public nombre                : string                 | null,
    public codigo                : string                 | null,
    public coordinador           : string                 | null,
    public fecha_inicio          : string                 | null,
    public fecha_fin             : string                 | null,
    public lugar                 : string                 | null,
    public presupuesto           : number                 | null,
    public descripcion           : string                 | null,
    public objetivos             : string                 | null,
    public informe_final         : string                 | null,
    public id_curso_articulado   : CursoArticuladoModel   ,
    public id_tipo_de_convenio   : TipoConvenioModel      ,
    public id_estado             : EstadoModel            ,
    public id_ciclo              : CicloModel             ,
    public id_escuela            : EscuelaModel           ,
    public id_semestre           : SemestreModel          ,
    public actividades           : ActividadModel[]       ,
    public recurso               : RecursoModel[]         ,
    public participante          : ParticipanteModel[]    ,
    public rol_proyecto          : RolProyectoModel[]     ,
  ){}

  }