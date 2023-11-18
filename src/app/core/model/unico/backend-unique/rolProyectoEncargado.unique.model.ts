import { RolProyectoEncargadoUnique } from "../frontend-unique/rolProyectoEncargado.unique.model";

export class RolProyectoEncargadoModelUnique {

    static init(): RolProyectoEncargadoModelUnique {
        return new this(0)
    }
    
    static fromFrontend(obj: RolProyectoEncargadoUnique | null): RolProyectoEncargadoModelUnique | null {
        return obj != null ? new this(
            obj.id,
        ) : null;
    }

    constructor(
        public id_rol_proyecto_encargado : number,
    ){}

}