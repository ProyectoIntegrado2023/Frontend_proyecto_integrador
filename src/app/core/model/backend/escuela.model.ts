import { Escuela } from '../index.frontend';
import { CicloModel, CursoArticuladoModel, FacultadModel, ProyectoModel } from '../index.backend';
export class EscuelaModel {

    static init(): EscuelaModel {
        return new this(
            0,
            FacultadModel.init(),
            '',
            [],
            [],
            []
        )
    }

    static fromFrontend(obj: Escuela): EscuelaModel{
        return obj != null ? new this(
            obj.id,
            FacultadModel.fromFrontend(obj.facultad),
            obj.nombre,
            [],
            [],
            []
        ) : this.init();
    }

    constructor(
        public id_escuela      : number                 | null,
        public id_facultad     : FacultadModel          ,
        public nombre          : string                 | null,
        public Proyecto        : ProyectoModel[]        ,
        public ciclo           : CicloModel[]           ,
        public curso_articulado: CursoArticuladoModel[] ,
    ){}

}