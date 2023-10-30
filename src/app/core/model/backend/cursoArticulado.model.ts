import { CursoArticulado } from "../index.frontend";
import { DocenteModel, EscuelaModel, PersonaModel, ProyectoModel } from "../index.backend";

export class CursoArticuladoModel {
    
    static init(): CursoArticuladoModel {
        return new this(
            0,
            '',
            PersonaModel.init(),
            EscuelaModel.init(),
            DocenteModel.init(),
            []
        )
    }

    static fromFrontend(obj: CursoArticulado): CursoArticuladoModel{
        return obj != null ? new this(
            obj.id,
            obj.nombre,
            PersonaModel.fromFrontend(obj.persona),
            EscuelaModel.fromFrontend(obj.escuela),
            DocenteModel.fromFrontend(obj.docente),
            []
        ) : this.init();
    }
    
    constructor(
        public id_curso_articulado : number             | null,
        public nombre              : string             | null,
        public id_persona          : PersonaModel       ,
        public id_escuela          : EscuelaModel       ,
        public id_docente          : DocenteModel       ,
        public proyecto            : ProyectoModel[]    
    ){}
    
}