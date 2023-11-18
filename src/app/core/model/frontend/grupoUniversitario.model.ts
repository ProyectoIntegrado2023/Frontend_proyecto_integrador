import { GrupoUniversitarioModel } from "../index.backend";

export class GrupoUniversitario {
    
    static init(): GrupoUniversitario {
        return new this(
            0,
            ''
        )
    }

    static fromBackend(obj: GrupoUniversitarioModel | null): GrupoUniversitario | null {
        return obj != null ? new this(
            obj.id_grupo_univ,
            obj.nombre
        ) : null;
    }

    constructor(
        public id       : number,
        public nombre   : string,
    ){}

}