import { RolProyecto } from "../index.frontend";
import { ProyectoModel, RolNegocioModel } from "../index.backend";

export class RolProyectoModel {

    static init(): RolProyectoModel {
        return new this(
            0,
            '',
            0,
            ProyectoModel.init(),
            RolNegocioModel.init()
        )
    }

    static fromFrontend(obj: RolProyecto): RolProyectoModel{
        return obj != null ? new this(
            obj.id,
            obj.descripcion,
            obj.hora,
            ProyectoModel.fromFrontend(obj.proyecto),
            RolNegocioModel.fromFrontend(obj.rol_negocio),
        ) : this.init();
    }

    constructor(
        public id_rol_proyecto     : number             | null,
        public descripcion         : string             | null,
        public hora                : number             | null,
        public id_proyecto         : ProyectoModel      ,
        public id_rol_negocio      : RolNegocioModel    ,
    ){}

}