import { Persona } from "../index.frontend";
import { CursoArticuladoModel, DocenteModel, EstudianteModel, ParticipanteModel, RolSistemaModel, UsuarioAccesoModel } from "../index.backend";

export class PersonaModel {

    static init(): PersonaModel {
        return new this(
            0,
            '',
            '',
            null,
            [],
            [],
            [],
            [],
            []
        )
    }

    static fromFrontend(obj: Persona | null): PersonaModel | null{
        return obj != null ? new this(
            obj.id,
            obj.nombre,
            obj.dni,
            RolSistemaModel.fromFrontend(obj.rol_sistema),
            [],
            [],
            [],
            [],
            []
        ) : null;
    }

    constructor(
        public id_persona      : number,
        public nombre          : string,
        public dni             : string,
        public id_rol_sistema  : RolSistemaModel        | null,
        public estudiantes     : EstudianteModel[]      ,
        public cursoarticualdo : CursoArticuladoModel[] ,
        public participante    : ParticipanteModel[]    ,
        public docente         : DocenteModel[]         ,
        public usuario_accesos : UsuarioAccesoModel[]   ,
    ){}
}