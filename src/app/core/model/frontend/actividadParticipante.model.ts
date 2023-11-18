import { ActividadParticipanteModel } from "../index.backend"
import { Actividad, Participante } from "../index.frontend"

export class ActividadParticipante {
    
    static init(): ActividadParticipante {
        return new this(
            0,
            null,
            null,
        )
    }

    static fromBackend(obj: ActividadParticipanteModel | null): ActividadParticipante | null {
        return obj != null ? new this(
            obj.id_actividad_participant,
            Participante.fromBackend(obj.id_participante),
            Actividad.fromBackend(obj.id_actividad),
        ) : null;
    }

    constructor(
        public id               : number,
        public participante     : Participante  | null,
        public actividad        : Actividad     | null,
    ){}

}