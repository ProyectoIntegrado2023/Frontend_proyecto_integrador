import { UsuarioAcceso } from "../index.frontend"
import { AccesoModel, UsuarioModel } from "../index.backend"

export class UsuarioAccesoModel {

    static init(): UsuarioAccesoModel {
        return new this(
            0,
            null,
            null,
        )
    }
    
    static fromFrontend(obj: UsuarioAcceso | null): UsuarioAccesoModel | null{
        return obj != null ? new this(
            obj.id,
            UsuarioModel.fromFrontend(obj.usuario),
            AccesoModel.fromFrontend(obj.accesos),
        ) : this.init();
    }

    constructor(
        public id_usuario_accesos  : number,
        public id_usuario          : UsuarioModel   | null,
        public id_accesos          : AccesoModel    | null,
    ){}

}