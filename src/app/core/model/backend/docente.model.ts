import { Docente } from "../index.frontend"
import { CursoArticuladoModel, ParticipanteModel, PersonaModel } from "../index.backend"

export class DocenteModel {
    
    static init(): DocenteModel {
        return new this(
            0,
            PersonaModel.init(),
            [],
            []
        )
    }

    static fromFrontend(obj: Docente): DocenteModel{
        return obj != null ? new this(
            obj.id,
            PersonaModel.fromFrontend(obj.persona),
            [],
            []
        ) : this.init();
    }

    constructor(
        public id_docente          : number                     | null,
        public id_persona          : PersonaModel               ,
        public participante        : ParticipanteModel[]        ,
        public curso_articulado    : CursoArticuladoModel[]     ,
    ){}
    
}