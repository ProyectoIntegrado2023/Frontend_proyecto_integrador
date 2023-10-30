import { ParticipanteModel } from "../index.backend";
import { Docente, Estudiante, Persona, Proyecto, RolProyectoEncargado, RolSistema } from "../index.frontend";

export class Participante {
    
    static init(): Participante {
        return new Participante(0, Persona.init(), RolProyectoEncargado.init(), Docente.init(), Estudiante.init(), Proyecto.init(), RolSistema.init())
    }

    static fromBackend(obj: ParticipanteModel): Participante {
        return obj != null ? new this(
            obj.id_participante,
            Persona.fromBackend(obj.id_persona),
            RolProyectoEncargado.fromBackend(obj.id_rol_proyecto_encargado),
            Docente.fromBackend(obj.id_docente),
            Estudiante.fromBackend(obj.id_estudiante),
            Proyecto.fromBackend(obj.id_proyecto),
            RolSistema.fromBackend(obj.id_rol_sistema),
        ) : this.init();
    }

    constructor(
        public id                          :   number               | null,
        public persona                     :   Persona              ,
        public rol_proyecto_encargado      :   RolProyectoEncargado ,
        public docente                     :   Docente              ,
        public estudiante                  :   Estudiante           ,
        public proyecto                    :   Proyecto             ,
        public rol_sistema                 :   RolSistema           ,
    ){}

}