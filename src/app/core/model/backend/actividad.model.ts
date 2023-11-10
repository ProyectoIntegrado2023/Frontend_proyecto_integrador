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
      ProyectoUniqueModel.init(),
      EncargadoUniqueModel.init(),
      []
    )
  }

  static fromFrontend(obj: Actividad): ActividadModel {
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
    public id_actividad          : number                     | null,
    public nombre                : string                     | null,
    public fecha                 : string                     | null,
    public proyecto              : ProyectoUniqueModel              ,
    public encargado             : EncargadoUniqueModel             ,
    public actividad_partcipante : ActividadParticipanteModel[]
  ){}
  
  
  
}
  