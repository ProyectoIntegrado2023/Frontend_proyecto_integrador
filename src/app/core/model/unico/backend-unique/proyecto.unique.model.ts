import { ProyectoUnique } from "../frontend-unique/proyecto.unique.model";


export class ProyectoUniqueModel {

  static init(): ProyectoUniqueModel {
    return new this(0)
  }

  static fromFrontend(obj: ProyectoUnique | null): ProyectoUniqueModel | null{
    return obj != null ? new this(
      obj.id
    ) : null;
  }

  constructor(
    public id_proyecto : number,
  ){}

  }