import { RecursoEntity } from './../model/database/recurso.model';
import { RecursoModel } from '../model/backend/recurso.model';
import { Recurso } from '../model/frontend/recurso.model';

export function RecursoFiltrarParaFrontend(recursoModel: RecursoModel): Recurso {
    return recursoModel != null ? {
        url         :   recursoModel.url,
        nombre      :   recursoModel.nombre,
        proyecto    :   recursoModel.id_proyecto,
        id          :   recursoModel.id_recurso,
    } : new Recurso()
}

export function RecursoFiltrarParaBackend(recurso: Recurso): RecursoEntity {
    return recurso != null ? {
        url         :   recurso.url,
        nombre      :   recurso.nombre,
        id_PROYECTO :   recurso.proyecto,
        id_RECURSO  :   recurso.id,
    } : new RecursoEntity()
}