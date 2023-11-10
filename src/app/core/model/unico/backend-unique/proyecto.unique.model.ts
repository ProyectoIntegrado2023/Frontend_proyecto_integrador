import { ProyectoUnique } from "../frontend-unique/proyecto.unique.model";


export class ProyectoUniqueModel {

  static init(): ProyectoUniqueModel {
    return new this(0)
  }

  static fromFrontend(obj: ProyectoUnique): ProyectoUniqueModel{
    return obj != null ? new this(
      obj.id
    ) : this.init();
  }

  constructor(
    public id_proyecto           : number                 | null,
  ){}

  }