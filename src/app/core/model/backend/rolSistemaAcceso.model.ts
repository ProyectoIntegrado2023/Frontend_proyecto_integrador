import { RolSistemaAcceso } from "../index.frontend"
import { AccesoModel, RolSistemaModel } from "../index.backend"

export class RolSistemaAccesoModel {

    static init(): RolSistemaAccesoModel {
        return new this(
            0,
            null,
            null,
        )
    }

    static fromFrontend(obj: RolSistemaAcceso | null): RolSistemaAccesoModel | null {
        return obj != null ? new this(
            obj.id,
            RolSistemaModel.fromFrontend(obj.rol_sistema),
            AccesoModel.fromFrontend(obj.accesos),
        ) : null;
    }

    constructor(
        public id_rol_sistema_accesos      : number             ,
        public id_rol_sistema              : RolSistemaModel    | null,
        public id_accesos                  : AccesoModel        | null,
    ){}

}