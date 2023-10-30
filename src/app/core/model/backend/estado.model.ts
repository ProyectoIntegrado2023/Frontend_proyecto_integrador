import { Estado } from "../index.frontend";

export class EstadoModel {

    static init(): EstadoModel {
        return new this(
            0,
            ''
        )
    }

    static fromFrontend(obj: Estado): EstadoModel{
        return obj != null ? new this(
            obj.id,
            obj.nombre
        ) : this.init();
    }

    constructor(
        public id_estado:      number | null,
        public nombre:         string | null,
    ){}

}