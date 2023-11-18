import { PersonaModel } from "../index.backend";
import { RolSistema } from "../index.frontend";

export class Persona {

    static init(): Persona {
        return new this(
            0,
            '',
            '',
            null,
        )
    }

    static fromBackend(obj: PersonaModel | null): Persona | null {
        return obj != null ? new this(
            obj.id_persona,
            obj.nombre,
            obj.dni,
            RolSistema.fromBackend(obj.id_rol_sistema),
        ) : null;
    }
    
    constructor(
        public id               : number,
        public nombre           : string,
        public dni              : string,
        public rol_sistema      : RolSistema    | null,
    ){}

}