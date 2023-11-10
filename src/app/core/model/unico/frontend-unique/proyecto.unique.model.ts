import { ProyectoUniqueModel } from "../backend-unique/proyecto.unique.model";

export class ProyectoUnique {

  static init(): ProyectoUnique {
    return new ProyectoUnique(0)
  }
  
  static fromBackend(obj: ProyectoUniqueModel): ProyectoUnique {
    
    return obj != null ? new this(
      obj.id_proyecto
    ) : this.init();

  } 

  constructor(
    public id                    : number           | null,
  ){}

}