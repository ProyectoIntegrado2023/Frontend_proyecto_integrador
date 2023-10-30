import { TipoConvenio } from "../index.frontend";

export class TipoConvenioModel {

    static init(): TipoConvenioModel {
        return new this(
            0,
            ''
        )
    }
    
    static fromFrontend(obj: TipoConvenio): TipoConvenioModel{
        return obj != null ? new this(
            obj.id,
            obj.nombre
        ) : this.init();
    }

    constructor(
        public id_tipo_de_convenio:    number   | null,
        public nombre:                 string   | null,
    ){}

}