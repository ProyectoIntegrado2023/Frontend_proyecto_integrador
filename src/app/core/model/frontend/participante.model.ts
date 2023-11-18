import { ParticipanteModel } from "../index.backend";
import { Docente, Estudiante, Persona, RolSistema } from "../index.frontend";
import { ProyectoUnique } from "../unico/frontend-unique/proyecto.unique.model";
import { RolProyectoEncargadoUnique } from "../unico/frontend-unique/rolProyectoEncargado.unique.model";

export class Participante {
    
    static init(): Participante {
        return new this(
            0,
            null,
            null,
            null,
            null,
            null,
            null,
        )
    }

    static fromBackend(obj: ParticipanteModel | null): Participante | null {
        return obj != null ? new this(
            obj.id_participante,
            Persona.fromBackend(obj.id_persona),
            RolProyectoEncargadoUnique.fromBackend(obj.id_rol_proyecto_encargado),
            Docente.fromBackend(obj.id_docente),
            Estudiante.fromBackend(obj.id_estudiante),
            ProyectoUnique.fromBackend(obj.id_proyecto),
            RolSistema.fromBackend(obj.id_rol_sistema),
        ) : null;
    }

    constructor(
        public id                          :   number,
        public persona                     :   Persona                      | null,
        public rol_proyecto_encargado      :   RolProyectoEncargadoUnique   | null,
        public docente                     :   Docente                      | null,
        public estudiante                  :   Estudiante                   | null,
        public proyecto                    :   ProyectoUnique               | null,
        public rol_sistema                 :   RolSistema                   | null,
    ){}

}