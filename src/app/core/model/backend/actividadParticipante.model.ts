import { ActividadParticipante } from "../index.frontend"
import { ActividadModel, ParticipanteModel } from "../index.backend"

export class ActividadParticipanteModel {
    
    static init(): ActividadParticipanteModel {
        return new this(
            0,
            null,
            null,
        )
    }

    static fromFrontend(obj: ActividadParticipante | null): ActividadParticipanteModel | null {
        return obj != null ? new this(
            obj.id,
            ParticipanteModel.fromFrontend(obj.participante),
            ActividadModel.fromFrontend(obj.actividad)
        ) : null;
    }

    constructor(
        public id_actividad_participant    : number,
        public id_participante             : ParticipanteModel      | null,
        public id_actividad                : ActividadModel         | null,     
    ){}
    
}