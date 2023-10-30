import { Participante } from "../index.frontend";
import { ActividadParticipanteModel, DocenteModel, EncargadoModel, 
    EstudianteModel, PersonaModel, ProyectoModel,
    RolProyectoEncargadoModel, RolSistemaModel } from "../index.backend";

export class ParticipanteModel {

    static init(): ParticipanteModel {
        return new this(
            0,
            PersonaModel.init(),
            DocenteModel.init(),
            EstudianteModel.init(),
            ProyectoModel.init(),
            RolProyectoEncargadoModel.init(),
            RolSistemaModel.init(),
            [],
            []
        )
    }

    static fromFrontend(obj: Participante): ParticipanteModel{
        return obj != null ? new this(
            obj.id,
            PersonaModel.fromFrontend(obj.persona),
            DocenteModel.fromFrontend(obj.docente),
            EstudianteModel.fromFrontend(obj.estudiante),
            ProyectoModel.fromFrontend(obj.proyecto),
            RolProyectoEncargadoModel.fromFrontend(obj.rol_proyecto_encargado),
            RolSistemaModel.fromFrontend(obj.rol_sistema),
            [],
            []
        ) : this.init();
    }

    constructor(
        public id_participante             : number                         | null,
        public id_persona                  : PersonaModel                   ,
        public id_docente                  : DocenteModel                   ,
        public id_estudiante               : EstudianteModel                ,
        public id_proyecto                 : ProyectoModel                  ,
        public id_rol_proyecto_encargado   : RolProyectoEncargadoModel      ,
        public id_rol_sistema              : RolSistemaModel                ,
        public actividad_participante      : ActividadParticipanteModel[]   ,
        public encargado                   : EncargadoModel[]               ,
    ){}

}