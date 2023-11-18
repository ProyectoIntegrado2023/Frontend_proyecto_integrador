import { ProyectoUniqueModel } from "../backend-unique/proyecto.unique.model";

export class ProyectoUnique {

  static init(): ProyectoUnique {
    return new ProyectoUnique(0)
  }
  
  static fromBackend(obj: ProyectoUniqueModel | null): ProyectoUnique | null {
    return obj != null ? new this(
      obj.id_proyecto
    ) : null;
  } 

  constructor(
    public id : number,
  ){}

}