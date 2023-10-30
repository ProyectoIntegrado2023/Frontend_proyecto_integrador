import { Plantilla } from "../index.frontend";
import { TipoConvenioModel } from "../index.backend";

export class PlantillaModel {

    static init(): PlantillaModel {
        return new this(
            0,
            '',
            TipoConvenioModel.init(),
            ''
        )
    }
    
    static fromFrontend(obj: Plantilla): PlantillaModel{
        return obj != null ? new this(
            obj.id,
            obj.nombre,
            TipoConvenioModel.fromFrontend(obj.tipo_convenio),
            obj.url
        ) : this.init();
    }

    constructor(
        public id_plantilla        : number             | null,
        public nombre              : string             | null,
        public id_tipo_de_convenio : TipoConvenioModel  ,
        public url                 : string             | null,
    ){}

}