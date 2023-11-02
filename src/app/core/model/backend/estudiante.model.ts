import { Estudiante } from "../index.frontend";
import { CicloModel, GrupoUniversitarioModel, ParticipanteModel } from '../index.backend';

export class EstudianteModel {

    static init(): EstudianteModel {
        return new this(
            0,
            '',
            0,
            GrupoUniversitarioModel.init(),
            CicloModel.init(),
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
            []
        ) : this.init();
    }

    constructor(
        public id_estudiante   : number                     | null,
        public codigo          : string                     | null,
        public horas_totales   : number                     | null,
        public id_grupo_univ   : GrupoUniversitarioModel    ,
        public id_ciclo        : CicloModel                 ,
        public participante    : ParticipanteModel[]        ,
    ){}

}