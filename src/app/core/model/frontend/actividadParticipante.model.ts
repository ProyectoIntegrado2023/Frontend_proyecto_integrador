import { ActividadParticipanteModel } from "../index.backend"
import { Actividad, Participante } from "../index.frontend"

export class ActividadParticipante {
    
    static init(): ActividadParticipante {
        return new ActividadParticipante(0, Participante.init(), Actividad.init())
    }

    static fromBackend(obj: ActividadParticipanteModel): ActividadParticipante {
        return obj != null ? new this(
            obj.id_actividad_participant,
            Participante.fromBackend(obj.id_participante),
            Actividad.fromBackend(obj.id_actividad),
        ) : this.init();
    }

    constructor(
        public id               : number        | null,
        public participante     : Participante ,
        public actividad        : Actividad    ,
    ){}

}