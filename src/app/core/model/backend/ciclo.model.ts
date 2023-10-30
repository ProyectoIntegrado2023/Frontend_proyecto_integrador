import { Ciclo } from "../index.frontend";
import { EscuelaModel, EstudianteModel, ProyectoModel } from '../index.backend';

export class CicloModel {
    
    static init(): CicloModel {
        return new this(
            0,
            EscuelaModel.init(),
            '',
            [],
            []
        )
    }

    static fromFrontend(obj: Ciclo): CicloModel{
        return obj != null ? new this(
            obj.id,
            EscuelaModel.fromFrontend(obj.escuela),
            obj.nombre,
            [],
            []
        ) : this.init();
    }

    constructor(
        public id_ciclo        : number             | null,
        public id_escuela      : EscuelaModel       ,
        public nombre          : string             | null,
        public estudiante      : EstudianteModel[]  ,
        public proyecto        : ProyectoModel[]    
    ){}
    
}