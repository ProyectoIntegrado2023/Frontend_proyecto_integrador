import { AccesoModel } from "../index.backend";

export class Acceso {
    
    static init(): Acceso {
        return new this(
            0,
            '',
            '',
            0
        );
    }

    static fromBackend(obj: AccesoModel | null): Acceso | null {
        return obj != null ? new this(
            obj.id_accesos,
            obj.nombre,
            obj.url,
            obj.id_accesos_padre
        ) : null;
    }

    constructor(
        public id              : number,
        public titulo          : string,
        public url             : string,
        public id_acceso_padre : number,
    ){}
    
}