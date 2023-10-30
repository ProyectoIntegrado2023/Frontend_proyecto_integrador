import { RolNegocioModel } from "../index.backend";

export class RolNegocio {

    static init(): RolNegocio {
        return new RolNegocio(0, '');
    }
    
    static fromBackend(obj: RolNegocioModel): RolNegocio {
        return obj != null ? new this(
            obj.id_rol_negocio,
            obj.nombre
        ) : this.init();
    }

    constructor(
        public id      : number | null,
        public nombre  : string | null,
    ){}

}