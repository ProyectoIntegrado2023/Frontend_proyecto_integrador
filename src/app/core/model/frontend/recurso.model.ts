import { RecursoModel } from "../index.backend";
import { Proyecto } from "../index.frontend";

export class Recurso {

    static init(): Recurso {
        return new this(
            0,
            '',
            '',
            null,
        )
    }
    
    static fromBackend(obj: RecursoModel | null): Recurso | null {
        return obj != null ? new this(
            obj.id_recurso,
            obj.url,
            obj.nombre,
            Proyecto.fromBackend(obj.id_proyecto)
        ) : null;
    }

    constructor(
        public id        : number,
        public url       : string,
        public nombre    : string,
        public proyecto  : Proyecto | null,
    ) {}

}