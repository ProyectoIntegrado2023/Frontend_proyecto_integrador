import { Semestre } from "../index.frontend";

export class SemestreModel {

  static init(): SemestreModel {
    return new this(
      0,
      ''
    )
  }
  
  static fromFrontend(obj: Semestre): SemestreModel {
    return obj != null ? new this(
      obj.id,
      obj.nombre
    ) : this.init();
  }

  constructor(
    public id_semestre:    number | null,
    public nombre:         string | null,
  ){}

}