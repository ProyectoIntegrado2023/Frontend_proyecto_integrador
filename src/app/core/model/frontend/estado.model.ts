import { EstadoModel } from "../index.backend";

export class Estado {

    static init(): Estado {
        return new this(
            0,
            ''
        );
    }
    
    static fromBackend(obj: EstadoModel | null): Estado | null {
        return obj != null ? new this(
            obj.id_estado,
            obj.nombre
        ) : null;
    }

    constructor(
        public id              : number,
        public nombre          : string,
    ){}

}