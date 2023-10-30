import { RecursoModel } from "../index.backend";
import { Proyecto } from "../index.frontend";

export class Recurso {

    static init(): Recurso {
        return new Recurso(0, '', '', Proyecto.init())
    }
    
    static fromBackend(obj: RecursoModel): Recurso {
        return obj != null ? new this(
            obj.id_recurso,
            obj.url,
            obj.nombre,
            Proyecto.fromBackend(obj.id_proyecto)
        ) : this.init();
    }

    constructor(
        public id        : number       | null,
        public url       : string       | null,
        public nombre    : string       | null,
        public proyecto  : Proyecto     ,
    ) {}

}