import { Persona } from "../index.frontend";
import { CursoArticuladoModel, DocenteModel, EstudianteModel, ParticipanteModel, RolSistemaModel, UsuarioAccesoModel } from "../index.backend";

export class PersonaModel {

    static init(): PersonaModel {
        return new PersonaModel(
            0,
            RolSistemaModel.init(),
            '',
            [],
            [],
            [],
            [],
            []
        )
    }

    static fromFrontend(obj: Persona): PersonaModel{
        return obj != null ? new this(
            obj.id,
            RolSistemaModel.fromFrontend(obj.rol_sistema),
            obj.nombre,
            [],
            [],
            [],
            [],
            []
        ) : this.init();
    }

    constructor(
        public id_persona      : number                 | null,
        public id_rol_sistema  : RolSistemaModel        ,
        public nombre          : string                 | null,
        public estudiantes     : EstudianteModel[]      ,
        public cursoarticualdo : CursoArticuladoModel[] ,
        public participante    : ParticipanteModel[]    ,
        public docente         : DocenteModel[]         ,
        public usuario_accesos : UsuarioAccesoModel[]   ,
    ){}
}