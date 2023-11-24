import { RolSistemaModel } from "../index.backend";

export class RolSistema {

    static init(): RolSistema {
        return new this(
            0,
            ''
        );
    }
    
    static fromBackend(obj: RolSistemaModel | null): RolSistema | null {
        return obj != null ? new this(
            obj.id_rol_sistema,
            obj.nombre,
        ) : null;
    }

    constructor(
        public id       : number,
        public nombre   : string,
    ){}

}