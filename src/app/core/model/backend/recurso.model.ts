import { Recurso } from "../index.frontend";
import { ProyectoModel } from "../index.backend";

export class RecursoModel {

    static init(): RecursoModel {
        return new this(
            0,
            '',
            '',
            null,
        )
    }

    static fromFrontend(obj: Recurso | null): RecursoModel | null{
        return obj != null ? new this(
            obj.id,
            obj.url,
            obj.nombre,
            ProyectoModel.fromFrontend(obj.proyecto)
        ) : null;
    }

    constructor(
        public id_recurso      : number,
        public url             : string,
        public nombre          : string,
        public id_proyecto     : ProyectoModel  | null,
    ){}

}