import { RolProyectoEncargadoModelUnique } from "../backend-unique/rolProyectoEncargado.unique.model";

export class RolProyectoEncargadoUnique {

    static init(): RolProyectoEncargadoUnique {
        return new this(0)
    }
    
    static fromBackend(obj: RolProyectoEncargadoModelUnique | null): RolProyectoEncargadoUnique | null {
        return obj != null ? new this(
            obj.id_rol_proyecto_encargado,
        ) : null;
    }

    constructor(
        public id : number,
    ){}

}