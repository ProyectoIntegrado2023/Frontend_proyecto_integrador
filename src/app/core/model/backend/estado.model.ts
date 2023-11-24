import { Estado } from "../index.frontend";

export class EstadoModel {

    static init(): EstadoModel {
        return new this(
            0,
            ''
        )
    }

    static fromFrontend(obj: Estado | null): EstadoModel | null{
        return obj != null ? new this(
            obj.id,
            obj.nombre
        ) : null;
    }

    constructor(
        public id_estado:      number,
        public nombre:         string,
    ){}

}