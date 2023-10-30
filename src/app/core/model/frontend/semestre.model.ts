import { SemestreModel } from "../index.backend";

export class Semestre {

  static init(): Semestre {
    return new Semestre(0, '')
  }
  
  static fromBackend(obj: SemestreModel): Semestre {
    return obj != null ? new this(
      obj.id_semestre,
      obj.nombre
    ) : this.init();
  }

  constructor(
    public id              :   number | null,
    public nombre          :   string | null,
  ){}  

}