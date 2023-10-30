import { Actividad } from "../index.frontend";
import { ActividadParticipanteModel, EncargadoModel, ProyectoModel } from "../index.backend";

export class ActividadModel {
  
  static init(): ActividadModel {
    return new this(
      0,
      '',
      '',
      ProyectoModel.init(),
      EncargadoModel.init(),
      []
    )
  }

  static fromFrontend(obj: Actividad) {
    return obj != null ? new this(
      obj.id,
      obj.nombre,
      obj.fecha,
      ProyectoModel.fromFrontend(obj.proyecto),
      EncargadoModel.fromFrontend(obj.encargado),
      []
    ) : this.init()
  }

  constructor(
    public id_actividad          : number                     | null,
    public nombre                : string                     | null,
    public fecha                 : string                     | null,
    public proyecto              : ProyectoModel              ,
    public encargado             : EncargadoModel             ,
    public actividad_partcipante : ActividadParticipanteModel | null[]
  ){}
  
  
  
}
  