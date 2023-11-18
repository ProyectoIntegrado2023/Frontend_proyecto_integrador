import { GrupoUniversitario } from "../index.frontend";

export class GrupoUniversitarioModel {
    
    static init(): GrupoUniversitarioModel {
        return new this(
            0,
            ''
        )
    }

    static fromFrontend(obj: GrupoUniversitario | null): GrupoUniversitarioModel | null{
        return obj != null ? new this(
            obj.id,
            obj.nombre
        ) : null;
    }

    constructor(
        public id_grupo_univ : number,
        public nombre        : string,
    ){}

}