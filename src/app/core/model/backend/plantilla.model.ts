import { Plantilla } from "../index.frontend";
import { TipoConvenioModel } from "../index.backend";

export class PlantillaModel {

    static init(): PlantillaModel {
        return new this(
            0,
            '',
            '',
            null,
        )
    }
    
    static fromFrontend(obj: Plantilla | null): PlantillaModel | null{
        return obj != null ? new this(
            obj.id,
            obj.nombre,
            obj.url,
            TipoConvenioModel.fromFrontend(obj.tipo_convenio),
        ) : null;
    }

    constructor(
        public id_plantilla        : number,
        public nombre              : string,
        public url                 : string,
        public id_tipo_de_convenio : TipoConvenioModel  | null,
    ){}

}