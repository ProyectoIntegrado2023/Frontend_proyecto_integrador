import { Estudiante } from "../index.frontend";
import { CicloModel, GrupoUniversitarioModel, ParticipanteModel, PersonaModel } from '../index.backend';

export class EstudianteModel {

    static init(): EstudianteModel {
        return new this(
            0,
            '',
            0,
            GrupoUniversitarioModel.init(),
            CicloModel.init(),
            PersonaModel.init(),
            []
        )
    }


    static fromFrontend(obj: Estudiante): EstudianteModel{
        return obj != null ? new this(
            obj.id,
            obj.codigo,
            obj.horas_totales,
            GrupoUniversitarioModel.fromFrontend(obj.grupo_universitario),
            CicloModel.fromFrontend(obj.ciclo),
            PersonaModel.fromFrontend(obj.persona),
            []
        ) : this.init();
    }

    constructor(
        public id_estudiante   : number                     | null,
        public codigo          : string                     | null,
        public horas_totales   : number                     | null,
        public id_grupo_univ   : GrupoUniversitarioModel    ,
        public id_ciclo        : CicloModel                 ,
        public id_persona      : PersonaModel               ,
        public participante    : ParticipanteModel[]        ,
    ){}

}