import { DocenteModel } from "../index.backend"
import { Persona } from "../index.frontend"

export class Docente {

    static init(): Docente {
        return new Docente(0, Persona.init())
    }

    static fromBackend(obj: DocenteModel): Docente {
        return obj != null ? new this(
            obj.id_docente,
            Persona.fromBackend(obj.id_persona),
        ) : this.init();
    }
    
    constructor(
        public id           : number   | null,
        public persona      : Persona  ,
    ){}

}