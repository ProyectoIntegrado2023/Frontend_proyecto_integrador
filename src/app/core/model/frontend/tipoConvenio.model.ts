import { TipoConvenioModel } from "../index.backend";

export class TipoConvenio {

    static init(): TipoConvenio {
        return new TipoConvenio(0, '');
    }
    
    static fromBackend(obj: TipoConvenioModel): TipoConvenio {
        return obj != null ? new this(
            obj.id_tipo_de_convenio,
            obj.nombre
        ) : this.init();
    }

    constructor(
        public id       : number | null,
        public nombre   : string | null,
    ){}

}