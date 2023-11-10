import { RolProyectoEncargadoUnique } from "../frontend-unique/rolProyectoEncargado.unique.model";

export class RolProyectoEncargadoModelUnique {

    static init(): RolProyectoEncargadoModelUnique {
        return new this(0)
    }
    
    static fromFrontend(obj: RolProyectoEncargadoUnique): RolProyectoEncargadoModelUnique {
        return obj != null ? new this(
            obj.id,
        ) : this.init();
    }

    constructor(
        public id_rol_proyecto_encargado            : number           | null,
    ){}

}