import { ActividadModel } from "../index.backend";
import { Encargado, Proyecto } from "../index.frontend";

export class Actividad {

  static init(): Actividad {
    return new Actividad(0, Proyecto.init(), Encargado.init(), '', '');
  }

  static fromBackend(obj: ActividadModel): Actividad {
    return obj != null ? new this(
      obj.id_actividad,
      Proyecto.fromBackend(obj.proyecto), 
      Encargado.fromBackend(obj.encargado),
      obj.nombre,
      obj.fecha
    ) : this.init();
  }

  constructor(
    public id              : number    | null,
    public proyecto        : Proyecto  ,
    public encargado       : Encargado ,
    public nombre          : string    | null,
    public fecha           : string    | null,
  ){}
}
  