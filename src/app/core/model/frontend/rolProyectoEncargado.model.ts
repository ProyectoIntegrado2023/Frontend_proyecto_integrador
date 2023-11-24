import { RolProyectoEncargadoModel } from "../index.backend"
import { Encargado, RolProyecto } from "../index.frontend"

export class RolProyectoEncargado {

    static init(): RolProyectoEncargado {
        return new this(
            0,
            null,
            null,
        )
    }
    
    static fromBackend(obj: RolProyectoEncargadoModel | null): RolProyectoEncargado | null {
        return obj != null ? new this(
            obj.id_rol_proyecto_encargado,
            RolProyecto.fromBackend(obj.id_rol_proyecto),
            Encargado.fromBackend(obj.id_encargado),
        ) : null;
    }

    constructor(
        public id            : number,
        public rol_proyecto  : RolProyecto      | null,
        public encargado     : Encargado        | null,
    ){}

}