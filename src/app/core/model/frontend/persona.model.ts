import { PersonaModel } from "../index.backend";
import { RolSistema } from "../index.frontend";

export class Persona {

    static init(): Persona {
        return new Persona(0, '', '', RolSistema.init())
    }

    static fromBackend(obj: PersonaModel): Persona {
        return obj != null ? new this(
            obj.id_persona,
            obj.nombre,
            obj.dni,
            RolSistema.fromBackend(obj.id_rol_sistema),
        ) : this.init();
    }
    
    constructor(
        public id              : number     | null,
        public nombre          : string     | null,
        public dni          : string     | null,
        public rol_sistema     : RolSistema ,
    ){}

}