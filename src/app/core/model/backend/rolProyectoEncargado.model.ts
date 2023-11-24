import { RolProyectoEncargado } from "../index.frontend"
import { EncargadoModel, ParticipanteModel, RolProyectoModel } from "../index.backend"

export class RolProyectoEncargadoModel {

    static init(): RolProyectoEncargadoModel {
        return new this(
            0,
            null,
            null,
            []
        )
    }
    
    static fromFrontend(obj: RolProyectoEncargado | null): RolProyectoEncargadoModel | null {
        return obj != null ? new this(
            obj.id,
            RolProyectoModel.fromFrontend(obj.rol_proyecto),
            EncargadoModel.fromFrontend(obj.encargado),
            []
        ) : null;
    }

    constructor(
        public id_rol_proyecto_encargado   : number,
        public id_rol_proyecto             : RolProyectoModel   | null,
        public id_encargado                : EncargadoModel     | null,
        public participante                : ParticipanteModel[],
    ){}

}