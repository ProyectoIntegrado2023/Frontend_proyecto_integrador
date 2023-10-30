import { AccesoModel } from "../index.backend";

export class Acceso {
    
    static init(): Acceso {
        return new Acceso(0, '', '', 0);
    }

    static fromBackend(obj: AccesoModel) {
        return obj != null ? new Acceso(
            obj.id_accesos,
            obj.nombre,
            obj.url,
            obj.id_accesos_padre
        ) : this.init();
    }

    constructor(
        public id              : number | null,
        public titulo          : string | null,
        public url             : string | null,
        public id_acceso_padre : number | null
    ){}
    
}