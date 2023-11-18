import { EncargadoUnique } from "../frontend-unique/encargado.unique.model"

export class EncargadoUniqueModel {
    
    static init(): EncargadoUniqueModel {
        return new this(
            0,
        )
    }

    static fromFrontend(obj: EncargadoUnique | null): EncargadoUniqueModel | null{
        return obj != null ? new this(
            obj.id,
        ) : null
    }

    constructor(
        public id_encargado : number,
    ){}
    
}