import { CicloModel } from "../index.backend";
import { Escuela } from "../index.frontend";

export class Ciclo {

    static init(): Ciclo {
        return new this(
            0,
            '',
            null,
        );
    }
    
    static fromBackend(obj: CicloModel | null): Ciclo | null {
        return obj != null ? new this(
            obj.id_ciclo,
            obj.nombre,
            Escuela.fromBackend(obj.id_escuela),
        ) : null;
    }

    constructor(
        public id      : number,
        public nombre  : string,
        public escuela : Escuela | null,
    ){}

}