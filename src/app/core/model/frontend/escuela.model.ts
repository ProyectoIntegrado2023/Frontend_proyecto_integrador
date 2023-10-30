import { EscuelaModel } from "../index.backend";
import { Facultad } from "../index.frontend";

export class Escuela {

    static init(): Escuela {
        return new Escuela(0, Facultad.init(), '');
    }
    
    static fromBackend(obj: EscuelaModel): Escuela {
        return obj != null ? new this(
            obj.id_escuela,
            Facultad.fromBackend(obj.id_facultad),
            obj.nombre,
        ) : this.init();
    }

    constructor(
        public id              : number   | null,
        public facultad        : Facultad ,
        public nombre          : string   | null,
    ){}

}