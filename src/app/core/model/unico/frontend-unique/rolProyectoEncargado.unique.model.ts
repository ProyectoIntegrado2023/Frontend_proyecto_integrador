import { RolProyectoEncargadoModelUnique } from "../backend-unique/rolProyectoEncargado.unique.model";

export class RolProyectoEncargadoUnique {

    static init(): RolProyectoEncargadoUnique {
        return new this(0)
    }
    
    static fromBackend(obj: RolProyectoEncargadoModelUnique): RolProyectoEncargadoUnique {
        return obj != null ? new this(
            obj.id_rol_proyecto_encargado,
        ) : this.init();
    }

    constructor(
        public id            : number           | null,
    ){}

}