import { ActividadModel } from "../index.backend";
import { EncargadoUnique } from "../unico/frontend-unique/encargado.unique.model";
import { ProyectoUnique } from "../unico/frontend-unique/proyecto.unique.model";

export class Actividad {

  static init(): Actividad {
    return new this(
      0,
      '',
      '',
      null,
      null,
      );
  }

  static fromBackend(obj: ActividadModel | null): Actividad | null {
    return obj != null ? new this(
      obj.id_actividad,
      obj.nombre,
      obj.fecha,
      EncargadoUnique.fromBackend(obj.encargado),
      ProyectoUnique.fromBackend(obj.id_proyecto), 
    ) : null;
  }

  constructor(
    public id              : number,
    public nombre          : string,
    public fecha           : string,
    public encargado       : EncargadoUnique  | null,
    public proyecto        : ProyectoUnique   | null,
  ){}
}
  