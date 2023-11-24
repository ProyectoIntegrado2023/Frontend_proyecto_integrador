import { PlantillaModel } from "../index.backend";
import { TipoConvenio } from "../index.frontend";

export class Plantilla {

    static init(): Plantilla {
        return new this(
            0,
            '',
            '',
            '',
            null,
        );
    }
    
    static fromBackend(obj: PlantillaModel | null): Plantilla | null {
        return obj != null ? new this(
            obj.id_plantilla,
            obj.nombre,
            'no hay descripcion',
            obj.url,
            TipoConvenio.fromBackend(obj.id_tipo_de_convenio),
        ) : null;
    }

    constructor(
        public id              :   number,
        public nombre          :   string,
        public descripcion     :   string,
        public url             :   string,
        public tipo_convenio   :   TipoConvenio | null,
    ){}

}