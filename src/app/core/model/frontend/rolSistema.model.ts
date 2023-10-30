import { RolSistemaModel } from "../index.backend";

export class RolSistema {

    static init(): RolSistema {
        return new RolSistema(0, '');
    }
    
    static fromBackend(obj: RolSistemaModel): RolSistema {
        return obj != null ? new this(
            obj.id_rol_sistema,
            obj.nombre,
        ) : this.init();
    }

    constructor(
        public id       : number | null,
        public nombre   : string | null,
    ){}

}