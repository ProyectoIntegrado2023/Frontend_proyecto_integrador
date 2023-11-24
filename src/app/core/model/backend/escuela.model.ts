import { Escuela } from '../index.frontend';
import { CicloModel, CursoArticuladoModel, FacultadModel, ProyectoModel } from '../index.backend';
export class EscuelaModel {

    static init(): EscuelaModel {
        return new this(
            0,
            '',
            null,
            [],
            [],
            []
        )
    }

    static fromFrontend(obj: Escuela | null): EscuelaModel | null{
        return obj != null ? new this(
            obj.id,
            obj.nombre,
            FacultadModel.fromFrontend(obj.facultad),
            [],
            [],
            []
        ) : null;
    }

    constructor(
        public id_escuela      : number,
        public nombre          : string,
        public id_facultad     : FacultadModel          | null,
        public Proyecto        : ProyectoModel[]        ,
        public ciclo           : CicloModel[]           ,
        public curso_articulado: CursoArticuladoModel[] ,
    ){}

}