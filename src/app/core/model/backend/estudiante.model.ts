import { Estudiante } from "../index.frontend";
import { CicloModel, GrupoUniversitarioModel, ParticipanteModel, PersonaModel } from '../index.backend';

export class EstudianteModel {

    static init(): EstudianteModel {
        return new this(
            0,
            '',
            0,
            null,
            null,
            null,
            []
        )
    }


    static fromFrontend(obj: Estudiante | null): EstudianteModel | null{
        return obj != null ? new this(
            obj.id,
            obj.codigo,
            obj.horas_totales,
            GrupoUniversitarioModel.fromFrontend(obj.grupo_universitario),
            CicloModel.fromFrontend(obj.ciclo),
            PersonaModel.fromFrontend(obj.persona),
            []
        ) : null;
    }

    constructor(
        public id_estudiante   : number,
        public codigo          : string,
        public horas_totales   : number,
        public id_grupo_univ   : GrupoUniversitarioModel    | null,
        public id_ciclo        : CicloModel                 | null,
        public id_persona      : PersonaModel               | null,
        public participante    : ParticipanteModel[]        ,
    ){}

}