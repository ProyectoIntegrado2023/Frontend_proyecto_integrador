import { RolSistemaAccesoModel } from "../index.backend";
import { Acceso, RolSistema } from "../index.frontend"

export class RolSistemaAcceso {

    static init(): RolSistemaAcceso {
        return new this(
            0,
            null,
            null,
        )
    }
    
    static fromBackend(obj: RolSistemaAccesoModel | null): RolSistemaAcceso | null {
        return obj != null ? new this(
            obj.id_rol_sistema_accesos,
            RolSistema.fromBackend(obj.id_rol_sistema),
            Acceso.fromBackend(obj.id_accesos),
        ) : null;
    }

    constructor(
        public id           : number,
        public rol_sistema  : RolSistema    | null,
        public accesos      : Acceso        | null,
    ){}

}