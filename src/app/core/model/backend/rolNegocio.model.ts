import { RolNegocio } from "../index.frontend";

export class RolNegocioModel {
    
    static init(): RolNegocioModel {
        return new this(
            0,
            ''
        )
    }

    static fromFrontend(obj: RolNegocio  | null): RolNegocioModel  | null{
        return obj != null ? new this(
            obj.id,
            obj.nombre
        ) : null;
    }

    constructor(
        public id_rol_negocio    : number,
        public nombre            : string,
    ){}

}