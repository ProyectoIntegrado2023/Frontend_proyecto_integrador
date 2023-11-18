import { TipoConvenioModel } from "../index.backend";

export class TipoConvenio {

    static init(): TipoConvenio {
        return new this(
            0,
            ''
        );
    }
    
    static fromBackend(obj: TipoConvenioModel  | null): TipoConvenio  | null {
        return obj != null ? new this(
            obj.id_tipo_de_convenio,
            obj.nombre
        ) : null
    }

    constructor(
        public id       : number,
        public nombre   : string,
    ){}

}