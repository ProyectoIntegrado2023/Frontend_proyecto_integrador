import { CicloModel } from "../index.backend";
import { Escuela } from "../index.frontend";

export class Ciclo {

    static init(): Ciclo {
        return new Ciclo(0, Escuela.init(), '')
    }
    
    static fromBackend(obj: CicloModel): Ciclo {
        return obj != null ? new this(
            obj.id_ciclo,
            Escuela.fromBackend(obj.id_escuela),
            obj.nombre
        ) : this.init();
    }

    constructor(
        public id              :   number   | null,
        public escuela         :   Escuela,
        public nombre          :   string   | null,
    ){}

}