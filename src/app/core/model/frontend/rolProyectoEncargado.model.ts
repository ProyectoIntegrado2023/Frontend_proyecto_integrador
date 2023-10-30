import { RolProyectoEncargadoModel } from "../index.backend"
import { Encargado, RolProyecto } from "../index.frontend"

export class RolProyectoEncargado {

    static init(): RolProyectoEncargado {
        return new RolProyectoEncargado(0, RolProyecto.init(), Encargado.init())
    }
    
    static fromBackend(obj: RolProyectoEncargadoModel): RolProyectoEncargado {
        return obj != null ? new this(
            obj.id_rol_proyecto_encargado,
            RolProyecto.fromBackend(obj.id_rol_proyecto),
            Encargado.fromBackend(obj.id_encargado),
        ) : this.init();
    }

    constructor(
        public id            : number           | null,
        public rol_proyecto  : RolProyecto      ,
        public encargado     : Encargado        ,
    ){}

}