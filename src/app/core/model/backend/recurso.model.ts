import { Recurso } from "../index.frontend";
import { ProyectoModel } from "../index.backend";

export class RecursoModel {

    static init(): RecursoModel {
        return new this(
            0,
            '',
            '',
            ProyectoModel.init()
        )
    }

    static fromFrontend(obj: Recurso): RecursoModel{
        return obj != null ? new this(
            obj.id,
            obj.url,
            obj.nombre,
            ProyectoModel.fromFrontend(obj.proyecto)
        ) : this.init();
    }

    constructor(
        public id_recurso      : number         | null,
        public url             : string         | null,
        public nombre          : string         | null,
        public id_proyecto     : ProyectoModel  ,
    ){}

}