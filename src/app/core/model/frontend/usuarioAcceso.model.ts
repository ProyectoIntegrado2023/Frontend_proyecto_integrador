
import { UsuarioAccesoModel } from "../index.backend";
import { Acceso, Usuario } from "../index.frontend"

export class UsuarioAcceso {

    static init(): UsuarioAcceso {
        return new this(
            0,
            null,
            null,
        )
    }
    
    static fromBackend(obj: UsuarioAccesoModel | null): UsuarioAcceso | null {
        return obj != null ? new this(
            obj.id_usuario_accesos,
            Usuario.fromBackend(obj.id_usuario),
            Acceso.fromBackend(obj.id_accesos),
        ) : null;
    }

    constructor(
        public id      : number,
        public usuario : Usuario    | null,
        public accesos : Acceso     | null,
    ){}

}