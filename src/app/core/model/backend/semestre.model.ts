import { Semestre } from "../index.frontend";

export class SemestreModel {

  static init(): SemestreModel {
    return new this(
      0,
      ''
    )
  }
  
  static fromFrontend(obj: Semestre | null): SemestreModel | null {
    return obj != null ? new this(
      obj.id,
      obj.nombre
    ) : null;
  }

  constructor(
    public id_semestre:    number,
    public nombre:         string,
  ){}

}