import { RolNegocio } from "../index.frontend";

export class RolNegocioModel {
    
    static init(): RolNegocioModel {
        return new this(
            0,
            ''
        )
    }

    static fromFrontend(obj: RolNegocio): RolNegocioModel{
        return obj != null ? new this(
            obj.id,
            obj.nombre
        ) : this.init();
    }

    constructor(
        public id_rol_negocio    : number | null,
        public nombre            : string | null,
    ){}

}