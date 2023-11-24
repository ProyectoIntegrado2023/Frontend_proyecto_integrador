import { RolProyecto } from "../index.frontend";
import { ProyectoModel, RolNegocioModel } from "../index.backend";

export class RolProyectoModel {

    static init(): RolProyectoModel {
        return new this(
            0,
            '',
            0,
            null,
            null,
        )
    }

    static fromFrontend(obj: RolProyecto  | null): RolProyectoModel  | null{
        return obj != null ? new this(
            obj.id,
            obj.descripcion,
            obj.hora,
            ProyectoModel.fromFrontend(obj.proyecto),
            RolNegocioModel.fromFrontend(obj.rol_negocio),
        ) : null;
    }

    constructor(
        public id_rol_proyecto     : number,
        public descripcion         : string,
        public hora                : number,
        public id_proyecto         : ProyectoModel      | null,
        public id_rol_negocio      : RolNegocioModel    | null,
    ){}

}