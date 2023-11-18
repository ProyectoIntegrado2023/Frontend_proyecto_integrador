import { Encargado } from "../index.frontend"
import { ActividadModel, ParticipanteModel, RolProyectoEncargadoModel, RolSistemaAccesoModel } from "../index.backend"

export class EncargadoModel {
    
    static init(): EncargadoModel {
        return new this(
            0,
            '',
            null,
            null,
            [],
            []
        )
    }

    static fromFrontend(obj: Encargado | null): EncargadoModel | null{
        return obj != null ? new this(
            obj.id,
            obj.nombre,
            RolSistemaAccesoModel.fromFrontend(obj.rol),
            ParticipanteModel.fromFrontend(obj.participante),
            [],
            []
        ) : null;
    }

    constructor(
        public id_encargado            : number,
        public nombre                  : string,
        public rol                     : RolSistemaAccesoModel          | null,
        public id_participante         : ParticipanteModel              | null,
        public rol_proyecto_encargado  : RolProyectoEncargadoModel[]    ,
        public actividadd              : ActividadModel[]               ,
    ){}
    
}