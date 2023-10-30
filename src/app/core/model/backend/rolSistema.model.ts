import { RolSistema } from "../index.frontend";

export class RolSistemaModel {

    static init(): RolSistemaModel {
        return new this(
            0,
            ''
        )
    }

    static fromFrontend(obj: RolSistema): RolSistemaModel{
        return obj != null ? new this(
            obj.id,
            obj.nombre
        ) : this.init();
    }
    
    constructor(
        public id_rol_sistema : number  | null,
        public nombre         : string  | null,
    ){}

}