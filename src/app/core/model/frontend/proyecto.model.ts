import { ProyectoModel } from '../index.backend';
import { Semestre, Ciclo, Escuela, TipoConvenio, Estado, CursoArticulado } from '../index.frontend';

export class Proyecto {

  static init(): Proyecto {
    return new Proyecto(
      0,
      CursoArticulado.init(),
      TipoConvenio.init(),
      Estado.init(), 
      Ciclo.init(),
      Escuela.init(),
      Semestre.init(),
      '',
      '',
      '',
      '',
      '',
      0,
      '',
      '', 
      '',
      '',
      )
  }
  
  static fromBackend(obj: ProyectoModel): Proyecto {
    
    return obj != null ? new this(
      obj.id_proyecto,
      CursoArticulado.fromBackend(obj.id_curso_articulado),
      TipoConvenio.fromBackend(obj.id_tipo_de_convenio),
      Estado.fromBackend(obj.id_estado),
      Ciclo.fromBackend(obj.id_ciclo),
      Escuela.fromBackend(obj.id_escuela),
      Semestre.fromBackend(obj.id_semestre),
      obj.nombre,
      obj.codigo,
      obj.coordinador,
      obj.lugar,
      obj.fecha_inicio,
      obj.presupuesto,
      obj.fecha_fin,
      obj.descripcion,
      obj.objetivos,
      obj.informe_final
    ) : this.init();

  } 

  constructor(
    public id                    : number           | null,
    public curso_articulado      : CursoArticulado  ,
    public tipo_convenio         : TipoConvenio     ,
    public estado                : Estado           ,
    public ciclo                 : Ciclo            ,
    public escuela               : Escuela          ,
    public semestre              : Semestre         ,
    public nombre                : string           | null,
    public codigo                : string           | null,
    public coordinador           : string           | null,
    public lugar                 : string           | null,
    public fecha_inicio          : string           | null,
    public presupuesto           : number           | null,
    public fecha_fin             : string           | null,
    public descripcion           : string           | null,
    public objetivos             : string           | null,
    public informe_final         : string           | null,
  ){}

}