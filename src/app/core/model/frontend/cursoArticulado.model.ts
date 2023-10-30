import { CursoArticuladoModel } from "../index.backend";
import { Docente, Escuela, Persona } from "../index.frontend";

export class CursoArticulado {
    
    static init(): CursoArticulado {
        return new CursoArticulado(0, '', Persona.init(), Escuela.init(), Docente.init());
    }

    static fromBackend(obj: CursoArticuladoModel): CursoArticulado {
        return obj != null ? new this(
            obj.id_curso_articulado,
            obj.nombre,
            Persona.fromBackend(obj.id_persona),
            Escuela.fromBackend(obj.id_escuela),
            Docente.fromBackend(obj.id_docente),
        ) : this.init();
    }

    constructor(
        public id                  : number   | null,
        public nombre              : string   | null,
        public persona             : Persona  ,
        public escuela             : Escuela  ,
        public docente             : Docente  ,
    ){}

}