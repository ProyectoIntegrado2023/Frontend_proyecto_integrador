import { EncargadoModel } from "../index.backend"
import { Participante, RolSistemaAcceso } from "../index.frontend"

export class Encargado {
    
    static init(): Encargado {
        return new Encargado(0, '', RolSistemaAcceso.init(), Participante.init())
    }

    static fromBackend(obj: EncargadoModel): Encargado {
        return obj != null ? new this(
            obj.id_encargado,
            obj.nombre,
            RolSistemaAcceso.fromBackend(obj.rol),
            Participante.fromBackend(obj.id_participante),
        ) : this.init();
    }

    constructor(
        public id                      : number             | null,
        public nombre                  : string             | null,
        public rol                     : RolSistemaAcceso   ,
        public participante            : Participante       ,
    ){}

}