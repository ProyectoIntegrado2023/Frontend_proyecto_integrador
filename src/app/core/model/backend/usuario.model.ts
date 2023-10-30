import { Usuario } from "../index.frontend"
import { PersonaModel } from "../index.backend"

export class UsuarioModel {
    
    static init(): UsuarioModel {
        return new this(
            0,
            '',
            '',
            PersonaModel.init()
        )
    }

    static fromFrontend(obj: Usuario): UsuarioModel {
        return obj != null ? new UsuarioModel(
            obj.id,
            obj.username,
            obj.password,
            PersonaModel.fromFrontend(obj.persona)
        ) : this.init();
    }

    constructor(
        public id_usuario  : number         | null,
        public username    : string         | null,
        public password    : string         | null,
        public id_persona  : PersonaModel   
    ){}
}