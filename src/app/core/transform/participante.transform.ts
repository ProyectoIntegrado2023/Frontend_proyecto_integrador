import { ParticipanteEntity } from './../model/database/participante.model';
import { ParticipanteModel } from '../model/backend/participante.model';
import { Participante } from './../model/frontend/participante.model';

export function ParticipanteFiltrarParaFrontend (participanteModel: ParticipanteModel): Participante {
    return participanteModel != null ? {
        persona                 :   participanteModel.id_persona,
        rol_proyecto_encargado  :   participanteModel.id_rol_proyecto_encargado,
        docente                 :   participanteModel.id_docente,
        estudiante              :   participanteModel.id_estudiante,
        id                      :   participanteModel.id_participante,
        proyecto                :   participanteModel.id_proyecto,
        rol_sistema             :   participanteModel.id_rol_sistema
    } : new Participante()
}

export function ParticipanteFiltrarParaBackend (participante: Participante): ParticipanteEntity {
    return participante != null ? {
        id_PERSONA                 :   participante.persona,
        id_ROL_PROYECTO_ENCARGADO  :   participante.rol_proyecto_encargado,
        id_DOCENTE                 :   participante.docente,
        id_ESTUDIANTE              :   participante.estudiante,
        id_PARTICIPANTE            :   participante.id,
        id_PROYECTO                :   participante.proyecto,
        id_ROL_SISTEMA             :   participante.rol_sistema
    } : new ParticipanteEntity()
}