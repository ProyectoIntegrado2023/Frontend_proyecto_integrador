import { RolNegocioModel } from "../index.backend";

export class RolNegocio {

    static init(): RolNegocio {
        return new RolNegocio(
            0,
            ''
        );
    }
    
    static fromBackend(obj: RolNegocioModel | null): RolNegocio | null {
        return obj != null ? new this(
            obj.id_rol_negocio,
            obj.nombre
        ) : null;
    }

    constructor(
        public id      : number,
        public nombre  : string,
    ){}

}