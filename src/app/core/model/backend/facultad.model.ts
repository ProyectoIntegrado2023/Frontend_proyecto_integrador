import { Facultad } from "../index.frontend";

export class FacultadModel {

    static init(): FacultadModel {
        return new this(
            0,
            ''
        )
    }

    static fromFrontend(obj: Facultad): FacultadModel{
        return obj != null ? new this(
            obj.id,
            obj.nombre
        ) : this.init();
    }
    
    constructor(
        public id_facultad : number | null,
        public nombre      : string | null,
    ){}

}