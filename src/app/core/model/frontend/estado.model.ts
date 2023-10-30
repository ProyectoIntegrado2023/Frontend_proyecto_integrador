import { EstadoModel } from "../index.backend";

export class Estado {

    static init(): Estado {
        return new Estado(0, '');
    }
    
    static fromBackend(obj: EstadoModel): Estado {
        return obj != null ? new this(
            obj.id_estado,
            obj.nombre
        ) : this.init();
    }

    constructor(
        public id              : number | null,
        public nombre          : string | null,
    ){}

}