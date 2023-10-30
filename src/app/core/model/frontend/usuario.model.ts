import { Persona } from 'src/app/core/model/frontend/persona.model';
import { UsuarioModel } from "../index.backend";

export class Usuario {

    static init(): Usuario {
        return new Usuario(0, '', '', Persona.init());
    }
    
    static fromBackend(obj: UsuarioModel): Usuario {
        return obj != null ? new this(
            obj.id_usuario,
            obj.username,
            obj.password,
            Persona.fromBackend(obj.id_persona)
        ) : this.init();
    }

    constructor(
        public id          : number     | null,
        public username    : string     | null,
        public password    : string     | null,
        public persona     : Persona
    ){}
}