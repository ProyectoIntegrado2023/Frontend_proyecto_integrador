import { EncargadoUniqueModel } from "../backend-unique/encargado.unique.model"

export class EncargadoUnique {
    
    static init(): EncargadoUnique {
        return new this(0)
    }

    static fromBackend(obj: EncargadoUniqueModel | null): EncargadoUnique | null{
        return obj != null ? new this(
            obj.id_encargado,
        ) : null;
    }

    constructor(
        public id  : number,
    ){}
    
}