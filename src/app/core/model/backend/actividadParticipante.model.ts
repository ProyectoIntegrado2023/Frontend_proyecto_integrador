import { ActividadParticipante } from "../index.frontend"
import { ActividadModel, ParticipanteModel } from "../index.backend"

export class ActividadParticipanteModel {
    
    static init(): ActividadParticipanteModel {
        return new this(
            0,
            ParticipanteModel.init(),
            ActividadModel.init()
        )
    }

    static fromFrontend(obj: ActividadParticipante) {
        return obj != null ? new this(
            obj.id,
            ParticipanteModel.fromFrontend(obj.participante),
            ActividadModel.fromFrontend(obj.actividad)
        ) : this.init()
    }

    constructor(
        public id_actividad_participant    : number             | null,
        public id_participante             : ParticipanteModel  ,
        public id_actividad                : ActividadModel     
    ){}
    
}