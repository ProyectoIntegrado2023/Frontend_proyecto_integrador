import { UsuarioAcceso } from "../index.frontend"
import { AccesoModel, UsuarioModel } from "../index.backend"

export class UsuarioAccesoModel {

    static init(): UsuarioAccesoModel {
        return new this(
            0,
            UsuarioModel.init(),
            AccesoModel.init(),
        )
    }
    
    static fromFrontend(obj: UsuarioAcceso): UsuarioAccesoModel{
        return obj != null ? new this(
            obj.id,
            UsuarioModel.fromFrontend(obj.usuario),
            AccesoModel.fromFrontend(obj.accesos),
        ) : this.init();
    }

    constructor(
        public id_usuario_accesos  : number         | null,
        public id_usuario          : UsuarioModel   ,
        public id_accesos          : AccesoModel    ,
    ){}

}