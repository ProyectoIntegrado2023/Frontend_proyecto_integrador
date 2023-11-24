import { Actividad } from "../index.frontend";
import { ActividadParticipanteModel } from "../index.backend";
import { ProyectoUniqueModel } from "../unico/backend-unique/proyecto.unique.model";
import { EncargadoUniqueModel } from "../unico/backend-unique/encargado.unique.model";

export class ActividadModel {
  
  static init(): ActividadModel {
    return new this(
      0,
      '',
      '',
      null,
      null,
      []
    )
  }

  static fromFrontend(obj: Actividad | null): ActividadModel | null {
    return obj != null ? new this(
      obj.id,
      obj.nombre,
      obj.fecha,
      ProyectoUniqueModel.fromFrontend(obj.proyecto),
      EncargadoUniqueModel.fromFrontend(obj.encargado),
      []
    ) : this.init()
  }

  constructor(
    public id_actividad          : number,
    public nombre                : string,
    public fecha                 : string,
    public id_proyecto           : ProyectoUniqueModel  | null,
    public encargado             : EncargadoUniqueModel | null,
    public actividad_partcipante : ActividadParticipanteModel[]
  ){}
  
  
  
}
  