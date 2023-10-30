import { Acceso } from "../index.frontend";

export class AccesoModel {

    static init(): AccesoModel {
        return new this( 0, '', '', 0 )
    }

    static fromFrontend(obj: Acceso): AccesoModel {
        return obj != null ? new AccesoModel(
            obj.id,
            obj.titulo,
            obj.url,
            obj.id_acceso_padre
        ) : this.init();
    }

    constructor(
        public id_accesos:       number | null,
        public nombre:           string | null,
        public url:              string | null,
        public id_accesos_padre: number | null
    ) {}
}