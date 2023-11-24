import { Acceso } from "../index.frontend";

export class AccesoModel {

    static init(): AccesoModel {
        return new this(
            0,
            '',
            '',
            0
        );
    }

    static fromFrontend(obj: Acceso | null): AccesoModel | null {
        return obj != null ? new this(
            obj.id,
            obj.titulo,
            obj.url,
            obj.id_acceso_padre
        ) : null;
    }

    constructor(
        public id_accesos:       number,
        public nombre:           string,
        public url:              string,
        public id_accesos_padre: number,
    ) {}
}