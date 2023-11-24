import { RolProyectoModel } from "../index.backend";
import { Proyecto, RolNegocio } from "../index.frontend";

export class RolProyecto {

    static init(): RolProyecto {
        return new this(
            0,
            '',
            0,
            null,
            null,
        );
    }
    
    static fromBackend(obj: RolProyectoModel | null): RolProyecto | null {
        return obj != null ? new this(
            obj.id_rol_proyecto,
            obj.descripcion,
            obj.hora,
            Proyecto.fromBackend(obj.id_proyecto),
            RolNegocio.fromBackend(obj.id_rol_negocio),
        ) : null;
    }

    constructor(
        public id            :   number,
        public descripcion   :   string,
        public hora          :   number,
        public proyecto      :   Proyecto   | null,
        public rol_negocio   :   RolNegocio | null,
    ){}

}