import { CursoArticuladoModel } from "../index.backend";
import { Docente, Escuela, Persona } from "../index.frontend";

export class CursoArticulado {
    
    static init(): CursoArticulado {
        return new this(
            0,
            '',
            null,
            null,
            null,
        );
    }

    static fromBackend(obj: CursoArticuladoModel | null): CursoArticulado | null {
        return obj != null ? new this(
            obj.id_curso_articulado,
            obj.nombre,
            Persona.fromBackend(obj.id_persona),
            Escuela.fromBackend(obj.id_escuela),
            Docente.fromBackend(obj.id_docente),
        ) : null;
    }

    constructor(
        public id                  : number,
        public nombre              : string,
        public persona             : Persona | null,
        public escuela             : Escuela | null,
        public docente             : Docente | null,
    ){}

}