import { Persona } from 'src/app/core/model/frontend/persona.model';
import { UsuarioModel } from "../index.backend";

export class Usuario {

    static init(): Usuario {
        return new this(
            0,
            '',
            '',
            null,
        );
    }
    
    static fromBackend(obj: UsuarioModel | null): Usuario | null {
        return obj != null ? new this(
            obj.id_usuario,
            obj.username,
            obj.password,
            Persona.fromBackend(obj.id_persona)
        ) : null;
    }

    constructor(
        public id          : number,
        public username    : string,
        public password    : string,
        public persona     : Persona  | null,
    ){}
}