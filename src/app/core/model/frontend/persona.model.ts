import { PersonaModel } from "../index.backend";
import { RolSistema } from "../index.frontend";

export class Persona {

    static init(): Persona {
        return new Persona(0, RolSistema.init(), '')
    }

    static fromBackend(obj: PersonaModel): Persona {
        return obj != null ? new this(
            obj.id_persona,
            RolSistema.fromBackend(obj.id_rol_sistema),
            obj.nombre
        ) : this.init();
    }
    
    constructor(
        public id              : number     | null,
        public rol_sistema     : RolSistema ,
        public nombre          : string     | null,
    ){}

}