import { RolSistemaAcceso } from "../index.frontend"
import { AccesoModel, RolSistemaModel } from "../index.backend"

export class RolSistemaAccesoModel {

    static init(): RolSistemaAccesoModel {
        return new this(
            0,
            RolSistemaModel.init(),
            AccesoModel.init(),
        )
    }

    static fromFrontend(obj: RolSistemaAcceso): RolSistemaAccesoModel {
        return obj != null ? new this(
            obj.id,
            RolSistemaModel.fromFrontend(obj.rol_sistema),
            AccesoModel.fromFrontend(obj.accesos),
        ) : this.init();
    }

    constructor(
        public id_rol_sistema_accesos      : number             | null,
        public id_rol_sistema              : RolSistemaModel    ,
        public id_accesos                  : AccesoModel        ,
    ){}

}