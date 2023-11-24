import { EncargadoModel } from "../index.backend"
import { Participante, RolSistemaAcceso } from "../index.frontend"

export class Encargado {
    
    static init(): Encargado {
        return new this(
            0,
            '',
            null,
            null,
        )
    }

    static fromBackend(obj: EncargadoModel | null): Encargado | null {
        return obj != null ? new this(
            obj.id_encargado,
            obj.nombre,
            RolSistemaAcceso.fromBackend(obj.rol),
            Participante.fromBackend(obj.id_participante),
        ) : null;
    }

    constructor(
        public id                      : number,
        public nombre                  : string,
        public rol                     : RolSistemaAcceso   | null,
        public participante            : Participante       | null,
    ){}

}