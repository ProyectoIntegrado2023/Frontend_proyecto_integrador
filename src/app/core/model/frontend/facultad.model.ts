import { FacultadModel } from "../index.backend";

export class Facultad {

    static init(): Facultad {
        return new Facultad(0, '');
    }
    
    static fromBackend(obj: FacultadModel): Facultad {
        return obj != null ? new this(
            obj.id_facultad,
            obj.nombre,
        ) : this.init();
    }

    constructor(
        public id          : number | null,
        public nombre      : string | null,
    ){}

}