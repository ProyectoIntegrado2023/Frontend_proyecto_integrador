import { Docente } from "../index.frontend"
import { CursoArticuladoModel, ParticipanteModel, PersonaModel } from "../index.backend"

export class DocenteModel {
    
    static init(): DocenteModel {
        return new this(
            0,
            null,
            [],
            []
        )
    }

    static fromFrontend(obj: Docente | null): DocenteModel | null{
        return obj != null ? new this(
            obj.id,
            PersonaModel.fromFrontend(obj.persona),
            [],
            []
        ) : null;
    }

    constructor(
        public id_docente          : number,
        public id_persona          : PersonaModel               | null,
        public participante        : ParticipanteModel[]        ,
        public curso_articulado    : CursoArticuladoModel[]     ,
    ){}
    
}