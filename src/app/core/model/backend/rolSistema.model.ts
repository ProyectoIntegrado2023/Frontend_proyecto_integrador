import { RolSistema } from "../index.frontend";

export class RolSistemaModel {

    static init(): RolSistemaModel {
        return new this(
            0,
            ''
        )
    }

    static fromFrontend(obj: RolSistema | null): RolSistemaModel | null{
        return obj != null ? new this(
            obj.id,
            obj.nombre
        ) : null;
    }
    
    constructor(
        public id_rol_sistema : number,
        public nombre         : string,
    ){}

}