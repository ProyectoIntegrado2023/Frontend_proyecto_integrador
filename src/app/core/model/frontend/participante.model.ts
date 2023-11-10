import { ParticipanteModel } from "../index.backend";
import { Docente, Estudiante, Persona, RolSistema } from "../index.frontend";
import { ProyectoUnique } from "../unico/frontend-unique/proyecto.unique.model";
import { RolProyectoEncargadoUnique } from "../unico/frontend-unique/rolProyectoEncargado.unique.model";

export class Participante {
    
    static init(): Participante {
        return new this(
            0,
            Persona.init(),
            RolProyectoEncargadoUnique.init(),
            Docente.init(),
            Estudiante.init(),
            ProyectoUnique.init(),
            RolSistema.init()
        )
    }

    static fromBackend(obj: ParticipanteModel): Participante {
        return obj != null ? new this(
            obj.id_participante,
            Persona.fromBackend(obj.id_persona),
            RolProyectoEncargadoUnique.fromBackend(obj.id_rol_proyecto_encargado),
            Docente.fromBackend(obj.id_docente),
            Estudiante.fromBackend(obj.id_estudiante),
            ProyectoUnique.fromBackend(obj.id_proyecto),
            RolSistema.fromBackend(obj.id_rol_sistema),
        ) : this.init();
    }

    constructor(
        public id                          :   number               | null,
        public persona                     :   Persona              ,
        public rol_proyecto_encargado      :   RolProyectoEncargadoUnique ,
        public docente                     :   Docente              ,
        public estudiante                  :   Estudiante           ,
        public proyecto                    :   ProyectoUnique             ,
        public rol_sistema                 :   RolSistema           ,
    ){}

}