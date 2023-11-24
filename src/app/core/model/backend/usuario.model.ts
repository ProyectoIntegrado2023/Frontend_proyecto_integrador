import { Usuario } from "../index.frontend"
import { PersonaModel } from "../index.backend"

export class UsuarioModel {
    
    static init(): UsuarioModel {
        return new this(
            0,
            '',
            '',
            null,
        )
    }

    static fromFrontend(obj: Usuario | null): UsuarioModel | null {
        return obj != null ? new UsuarioModel(
            obj.id,
            obj.username,
            obj.password,
            PersonaModel.fromFrontend(obj.persona)
        ) : null;
    }

    constructor(
        public id_usuario  : number,
        public username    : string,
        public password    : string,
        public id_persona  : PersonaModel  | null,
    ){}
}