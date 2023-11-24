import { TipoConvenio } from "../index.frontend";

export class TipoConvenioModel {

    static init(): TipoConvenioModel {
        return new this(
            0,
            ''
        )
    }
    
    static fromFrontend(obj: TipoConvenio | null): TipoConvenioModel | null{
        return obj != null ? new this(
            obj.id,
            obj.nombre
        ) : null;
    }

    constructor(
        public id_tipo_de_convenio:    number,
        public nombre:                 string,
    ){}

}