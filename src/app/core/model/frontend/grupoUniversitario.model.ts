import { GrupoUniversitarioModel } from "../index.backend";

export class GrupoUniversitario {
    
    static init(): GrupoUniversitario {
        return new GrupoUniversitario(0, '')
    }

    static fromBackend(obj: GrupoUniversitarioModel): GrupoUniversitario {
        return obj != null ? new this(
            obj.id_grupo_univ,
            obj.nombre
        ) : this.init();
    }

    constructor(
        public id       : number | null,
        public nombre   : string | null,
    ){}

}