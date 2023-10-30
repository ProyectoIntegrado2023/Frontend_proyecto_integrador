import { RolProyectoEncargado } from "../index.frontend"
import { EncargadoModel, ParticipanteModel, RolProyectoModel } from "../index.backend"

export class RolProyectoEncargadoModel {

    static init(): RolProyectoEncargadoModel {
        return new this(
            0,
            RolProyectoModel.init(),
            EncargadoModel.init(),
            []
        )
    }
    
    static fromFrontend(obj: RolProyectoEncargado): RolProyectoEncargadoModel {
        return obj != null ? new this(
            obj.id,
            RolProyectoModel.fromFrontend(obj.rol_proyecto),
            EncargadoModel.fromFrontend(obj.encargado),
            []
        ) : this.init()
    }

    constructor(
        public id_rol_proyecto_encargado   : number             | null,
        public id_rol_proyecto             : RolProyectoModel   ,
        public id_encargado                : EncargadoModel     ,
        public participante                : ParticipanteModel[],
    ){}

}