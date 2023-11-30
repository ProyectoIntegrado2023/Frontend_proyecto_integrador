import { Participante } from "../index.frontend";
import { ActividadParticipanteModel, DocenteModel, EncargadoModel, 
    EstudianteModel, PersonaModel, RolSistemaModel } from "../index.backend";
import { ProyectoUniqueModel } from "../unico/backend-unique/proyecto.unique.model";
import { RolProyectoEncargadoModelUnique } from "../unico/backend-unique/rolProyectoEncargado.unique.model";

export class ParticipanteModel {

    static init(): ParticipanteModel {
        return new this(
            0,
            null,
            null,
            null,
            null,
            null,
            null,
            [],
            [],
            0
        )
    }

    static fromFrontend(obj: Participante | null): ParticipanteModel | null{
        return obj != null ? new this(
            obj.id,
            PersonaModel.fromFrontend(obj.persona),
            DocenteModel.fromFrontend(obj.docente),
            EstudianteModel.fromFrontend(obj.estudiante),
            ProyectoUniqueModel.fromFrontend(obj.proyecto),
            RolProyectoEncargadoModelUnique.fromFrontend(obj.rol_proyecto_encargado),
            RolSistemaModel.fromFrontend(obj.rol_sistema),
            [],
            [],
            obj.horas
        ) : null;
    }

    constructor(
        public id_participante             : number,
        public id_persona                  : PersonaModel                       | null,
        public id_docente                  : DocenteModel                       | null,
        public id_estudiante               : EstudianteModel                    | null,
        public id_proyecto                 : ProyectoUniqueModel                | null,
        public id_rol_proyecto_encargado   : RolProyectoEncargadoModelUnique    | null,
        public id_rol_sistema              : RolSistemaModel                    | null,
        public actividad_participante      : ActividadParticipanteModel[]       ,
        public encargado                   : EncargadoModel[]                   ,
        public horas                       : number  
    ){}

}