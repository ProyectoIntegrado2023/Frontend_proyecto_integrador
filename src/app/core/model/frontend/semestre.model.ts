import { SemestreModel } from "../index.backend";

export class Semestre {

  static init(): Semestre {
    return new this(
      0,
      ''
    )
  }
  
  static fromBackend(obj: SemestreModel | null): Semestre | null {
    return obj != null ? new this(
      obj.id_semestre,
      obj.nombre
    ) : null;
  }

  constructor(
    public id              :   number,
    public nombre          :   string,
  ){}  

}