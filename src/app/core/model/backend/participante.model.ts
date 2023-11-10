import { Participante } from "../index.frontend";
import { ActividadParticipanteModel, DocenteModel, EncargadoModel, 
    EstudianteModel, PersonaModel, RolProyectoEncargadoModel, RolSistemaModel } from "../index.backend";
import { ProyectoUniqueModel } from "../unico/backend-unique/proyecto.unique.model";
import { RolProyectoEncargadoModelUnique } from "../unico/backend-unique/rolProyectoEncargado.unique.model";

export class ParticipanteModel {

    static init(): ParticipanteModel {
        return new this(
            0,
            PersonaModel.init(),
            DocenteModel.init(),
            EstudianteModel.init(),
            ProyectoUniqueModel.init(),
            RolProyectoEncargadoModelUnique.init(),
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
            ProyectoUniqueModel.fromFrontend(obj.proyecto),
            RolProyectoEncargadoModelUnique.fromFrontend(obj.rol_proyecto_encargado),
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
        public id_proyecto                 : ProyectoUniqueModel                  ,
        public id_rol_proyecto_encargado   : RolProyectoEncargadoModelUnique      ,
        public id_rol_sistema              : RolSistemaModel                ,
        public actividad_participante      : ActividadParticipanteModel[]   ,
        public encargado                   : EncargadoModel[]               ,
    ){}

}