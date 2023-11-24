import { ProyectoModel } from '../index.backend';
import { Semestre, Ciclo, Escuela, TipoConvenio, Estado, CursoArticulado } from '../index.frontend';

export class Proyecto {

  static init(): Proyecto {
    return new this(
      0,
      null,
      null,
      null,
      null,
      null,
      null,
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
  
  static fromBackend(obj: ProyectoModel | null): Proyecto | null {
    
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
    ) : null;

  } 

  constructor(
    public id                    : number,
    public curso_articulado      : CursoArticulado  | null,
    public tipo_convenio         : TipoConvenio     | null,
    public estado                : Estado           | null,
    public ciclo                 : Ciclo            | null,
    public escuela               : Escuela          | null,
    public semestre              : Semestre         | null,
    public nombre                : string,
    public codigo                : string,
    public coordinador           : string,
    public lugar                 : string,
    public fecha_inicio          : string,
    public presupuesto           : number,
    public fecha_fin             : string,
    public descripcion           : string,
    public objetivos             : string,
    public informe_final         : string,
  ){}

}