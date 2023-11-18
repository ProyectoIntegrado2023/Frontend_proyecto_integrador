import { Persona } from './persona.model';
import { EstudianteModel } from "../index.backend"
import { Ciclo, GrupoUniversitario } from "../index.frontend"

export class Estudiante {

    static init(): Estudiante{
        return new this(
            0,
            '',
            0,
            null,
            null,
            null,
        );
    }
    
    static fromBackend(obj: EstudianteModel | null): Estudiante | null{
        return obj != null ? new this(
            obj.id_estudiante,
            obj.codigo,
            obj.horas_totales,
            GrupoUniversitario.fromBackend(obj.id_grupo_univ),
            Ciclo.fromBackend(obj.id_ciclo),
            Persona.fromBackend(obj.id_persona)
        ) : null;
    }

    constructor(
        public id                      : number,
        public codigo                  : string,
        public horas_totales           : number,
        public grupo_universitario     : GrupoUniversitario | null,
        public ciclo                   : Ciclo              | null,
        public persona                 : Persona            | null,
    ){}

}