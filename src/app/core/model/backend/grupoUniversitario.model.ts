import { GrupoUniversitario } from "../index.frontend";

export class GrupoUniversitarioModel {
    
    static init(): GrupoUniversitarioModel {
        return new this(
            0,
            ''
        )
    }

    static fromFrontend(obj: GrupoUniversitario): GrupoUniversitarioModel{
        return obj != null ? new this(
            obj.id,
            obj.nombre
        ) : this.init();
    }

    constructor(
        public id_grupo_univ : number   | null,
        public nombre        : string   | null,
    ){}

}