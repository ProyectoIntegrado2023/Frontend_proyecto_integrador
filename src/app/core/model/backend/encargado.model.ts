import { Encargado } from "../index.frontend"
import { ActividadModel, ParticipanteModel, RolProyectoEncargadoModel, RolSistemaAccesoModel } from "../index.backend"

export class EncargadoModel {
    
    static init(): EncargadoModel {
        return new this(
            0,
            '',
            RolSistemaAccesoModel.init(),
            ParticipanteModel.init(),
            [],
            []
        )
    }

    static fromFrontend(obj: Encargado): EncargadoModel{
        return obj != null ? new this(
            obj.id,
            obj.nombre,
            RolSistemaAccesoModel.fromFrontend(obj.rol),
            ParticipanteModel.fromFrontend(obj.participante),
            [],
            []
        ) : this.init()
    }

    constructor(
        public id_encargado            : number                         | null,
        public nombre                  : string                         | null,
        public rol                     : RolSistemaAccesoModel          ,
        public id_participante         : ParticipanteModel              ,
        public rol_proyecto_encargado  : RolProyectoEncargadoModel[]    ,
        public actividadd              : ActividadModel[]               ,
    ){}
    
}