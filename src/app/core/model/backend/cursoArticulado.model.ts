import { CursoArticulado } from "../index.frontend";
import { DocenteModel, EscuelaModel, PersonaModel, ProyectoModel } from "../index.backend";

export class CursoArticuladoModel {
    
    static init(): CursoArticuladoModel {
        return new this(
            0,
            '',
            null,
            null,
            null,
            []
        );
    }

    static fromFrontend(obj: CursoArticulado | null): CursoArticuladoModel | null{
        return obj != null ? new this(
            obj.id,
            obj.nombre,
            PersonaModel.fromFrontend(obj.persona),
            EscuelaModel.fromFrontend(obj.escuela),
            DocenteModel.fromFrontend(obj.docente),
            []
        ) : null;
    }
    
    constructor(
        public id_curso_articulado : number,
        public nombre              : string,
        public id_persona          : PersonaModel   | null,
        public id_escuela          : EscuelaModel   | null,
        public id_docente          : DocenteModel   | null,
        public proyecto            : ProyectoModel[]    
    ){}
    
}