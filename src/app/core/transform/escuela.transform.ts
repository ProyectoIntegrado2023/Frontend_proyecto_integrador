import { EscuelaEntity } from './../model/database/escuela.model';
import { EscuelaModel } from '../model/backend/escuela.model';
import { Escuela } from '../model/frontend/escuela.model';

export function EscuelaFiltrarParaFrontend(escuelaModel: EscuelaModel): Escuela {
    return escuelaModel != null ? {
        facultad        :   escuelaModel.id_facultad,
        id              :   escuelaModel.id_escuela,
        nombre          :   escuelaModel.nombre
    } : new Escuela()
}

export function EscuelaFiltrarParaBackend(escuela: Escuela): EscuelaEntity {
    return escuela != null ? {
        id_FACULTAD     :   escuela.facultad,
        id_ESCUELA      :   escuela.id,
        nombre          :   escuela.nombre
    } : new EscuelaEntity()
}