
import { UsuarioAccesoModel } from "../index.backend";
import { Acceso, Usuario } from "../index.frontend"

export class UsuarioAcceso {

    static init(): UsuarioAcceso {
        return new UsuarioAcceso(0, Usuario.init(), Acceso.init())
    }
    
    static fromBackend(obj: UsuarioAccesoModel): UsuarioAcceso {
        return obj != null ? new this(
            obj.id_usuario_accesos,
            Usuario.fromBackend(obj.id_usuario),
            Acceso.fromBackend(obj.id_accesos),
        ) : this.init();
    }

    constructor(
        public id      : number     | null,
        public usuario : Usuario,
        public accesos : Acceso ,
    ){}

}