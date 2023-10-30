import { RolProyectoModel } from "../index.backend";
import { Proyecto, RolNegocio } from "../index.frontend";

export class RolProyecto {

    static init(): RolProyecto {
        return new RolProyecto(0, '', 0, Proyecto.init(), RolNegocio.init())
    }
    
    static fromBackend(obj: RolProyectoModel): RolProyecto {
        return obj != null ? new this(
            obj.id_rol_proyecto,
            obj.descripcion,
            obj.hora,
            Proyecto.fromBackend(obj.id_proyecto),
            RolNegocio.fromBackend(obj.id_rol_negocio),
        ) : this.init();
    }

    constructor(
        public id            :   number     | null,
        public descripcion   :   string     | null,
        public hora          :   number     | null,
        public proyecto      :   Proyecto   ,
        public rol_negocio   :   RolNegocio ,
    ){}

}