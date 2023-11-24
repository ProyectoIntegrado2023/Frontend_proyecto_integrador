import { Ciclo } from "../index.frontend";
import { EscuelaModel, EstudianteModel, ProyectoModel } from '../index.backend';

export class CicloModel {
    
    static init(): CicloModel {
        return new this(
            0,
            '',
            null,
            [],
            []
        )
    }

    static fromFrontend(obj: Ciclo  | null): CicloModel  | null{
        return obj != null ? new this(
            obj.id,
            obj.nombre,
            EscuelaModel.fromFrontend(obj.escuela),
            [],
            []
        ) : null;
    }

    constructor(
        public id_ciclo        : number             ,
        public nombre          : string             ,
        public id_escuela      : EscuelaModel       | null,
        public estudiante      : EstudianteModel[]  ,
        public proyecto        : ProyectoModel[]    ,
    ){}
    
}