import { DocenteModel } from "../index.backend"
import { Persona } from "../index.frontend"

export class Docente {

    static init(): Docente {
        return new this(
            0,
            null,
        );
    }

    static fromBackend(obj: DocenteModel | null): Docente | null {
        return obj != null ? new this(
            obj.id_docente,
            Persona.fromBackend(obj.id_persona),
        ) : null;
    }
    
    constructor(
        public id           : number,
        public persona      : Persona | null,
    ){}

}