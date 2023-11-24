import { FacultadModel } from "../index.backend";

export class Facultad {

    static init(): Facultad {
        return new this(
            0,
            ''
        );
    }
    
    static fromBackend(obj: FacultadModel | null): Facultad | null {
        return obj != null ? new this(
            obj.id_facultad,
            obj.nombre,
        ) : null;
    }

    constructor(
        public id          : number,
        public nombre      : string,
    ){}

}