import { Facultad } from "../index.frontend";

export class FacultadModel {

    static init(): FacultadModel {
        return new this(
            0,
            ''
        )
    }

    static fromFrontend(obj: Facultad | null): FacultadModel | null{
        return obj != null ? new this(
            obj.id,
            obj.nombre
        ) : null;
    }
    
    constructor(
        public id_facultad : number,
        public nombre      : string,
    ){}

}