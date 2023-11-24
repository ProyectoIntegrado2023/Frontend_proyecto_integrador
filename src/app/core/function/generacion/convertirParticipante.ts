import { CursoArticulado, Estudiante, Participante } from "../../model/index.frontend";

export function convertirEstudiante(arrayParticipante: Participante[], arrayEstudiante: Estudiante[]): Estudiante[] {
    let listaEstudiante: Estudiante[] = [];
    for(let pt of arrayParticipante) {
      if(pt.estudiante != null && pt.estudiante.id != 0 && pt.docente == null) {
        const estudiante = arrayEstudiante.find(e => e.id == pt.estudiante?.id);
        if(estudiante != undefined) listaEstudiante.push(estudiante);
      }
    }
    return listaEstudiante;
}

export function convertirDocente(arrayParticipante: Participante[], arrayCursoArticulado: CursoArticulado[]): CursoArticulado[] {
    let listavista_docente: CursoArticulado[] = [];
    for(let pt of arrayParticipante) {
      if(pt.docente != null && pt.docente.id != 0 && pt.estudiante == null) {
        const curso = arrayCursoArticulado.find(ca => ca.id == pt.docente?.id);
        if(curso != undefined) listavista_docente.push(curso);
      }
    }
    return listavista_docente;
}