import { ActividadModel } from "../index.backend";
import { Encargado } from "../index.frontend";
import { EncargadoUnique } from "../unico/frontend-unique/encargado.unique.model";
import { ProyectoUnique } from "../unico/frontend-unique/proyecto.unique.model";

export class Actividad {

  static init(): Actividad {
    return new Actividad(
      0,
      ProyectoUnique.init(),
      EncargadoUnique.init(),
      '',
      '');
  }

  static fromBackend(obj: ActividadModel): Actividad {
    return obj != null ? new this(
      obj.id_actividad,
      ProyectoUnique.fromBackend(obj.proyecto), 
      EncargadoUnique.fromBackend(obj.encargado),
      obj.nombre,
      obj.fecha
    ) : this.init();
  }

  constructor(
    public id              : number    | null,
    public proyecto        : ProyectoUnique  ,
    public encargado       : EncargadoUnique ,
    public nombre          : string    | null,
    public fecha           : string    | null,
  ){}
}
  