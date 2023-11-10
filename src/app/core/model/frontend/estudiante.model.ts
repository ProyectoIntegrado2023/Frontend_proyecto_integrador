import { Persona } from './persona.model';
import { EstudianteModel } from "../index.backend"
import { Ciclo, GrupoUniversitario } from "../index.frontend"

export class Estudiante {

    static init(): Estudiante{
        return new Estudiante(0, '', 0, GrupoUniversitario.init(), Ciclo.init(), Persona.init());
    }
    
    static fromBackend(obj: EstudianteModel): Estudiante{
        return obj != null ? new this(
            obj.id_estudiante,
            obj.codigo,
            obj.horas_totales,
            GrupoUniversitario.fromBackend(obj.id_grupo_univ),
            Ciclo.fromBackend(obj.id_ciclo),
            Persona.fromBackend(obj.id_persona)
        ) : this.init();
    }

    constructor(
        public id                      : number             | null,
        public codigo                  : string             | null,
        public horas_totales           : number             | null,
        public grupo_universitario     : GrupoUniversitario ,
        public ciclo                   : Ciclo              ,
        public persona                 : Persona
    ){}

}