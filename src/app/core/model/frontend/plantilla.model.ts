import { PlantillaModel } from "../index.backend";
import { TipoConvenio } from "../index.frontend";

export class Plantilla {

    static init(): Plantilla {
        return new Plantilla(0, '', TipoConvenio.init(), '', '');
    }
    
    static fromBackend(obj: PlantillaModel): Plantilla {
        return obj != null ? new this(
            obj.id_plantilla,
            obj.nombre,
            TipoConvenio.fromBackend(obj.id_tipo_de_convenio),
            'no hay descripcion',
            obj.url
        ) : this.init();
    }

    constructor(
        public id              :   number       | null,
        public nombre          :   string       | null,
        public tipo_convenio   :   TipoConvenio ,
        public descripcion     :   string       | null,
        public url             :   string       | null,
    ){}

}