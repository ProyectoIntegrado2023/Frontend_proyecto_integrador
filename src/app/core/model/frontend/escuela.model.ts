import { EscuelaModel } from "../index.backend";
import { Facultad } from "../index.frontend";

export class Escuela {

    static init(): Escuela {
        return new this(
            0,
            '',
            null,
        );
    }
    
    static fromBackend(obj: EscuelaModel | null): Escuela | null {
        return obj != null ? new this(
            obj.id_escuela,
            obj.nombre,
            Facultad.fromBackend(obj.id_facultad),
        ) : null;
    }

    constructor(
        public id              : number,
        public nombre          : string,
        public facultad        : Facultad | null,
    ){}

}