import { RolSistemaAccesoModel } from "../index.backend";
import { Acceso, RolSistema } from "../index.frontend"

export class RolSistemaAcceso {

    static init(): RolSistemaAcceso {
        return new RolSistemaAcceso(0, RolSistema.init(), Acceso.init())
    }
    
    static fromBackend(obj: RolSistemaAccesoModel): RolSistemaAcceso {
        return obj != null ? new this(
            obj.id_rol_sistema_accesos,
            RolSistema.fromBackend(obj.id_rol_sistema),
            Acceso.fromBackend(obj.id_accesos),
        ) : this.init();
    }

    constructor(
        public id           : number        | null,
        public rol_sistema  : RolSistema    ,
        public accesos      : Acceso        ,
    ){}

}