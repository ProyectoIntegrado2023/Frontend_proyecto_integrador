import { ActividadEntity } from './../model/database/actividad.model';
import { ActividadModel } from '../model/backend/actividad.model';
import { Actividad } from '../model/frontend/actividad.model';

export function ActividadFiltrarParaFrontend(actividadModel: ActividadModel): Actividad {
    return actividadModel != null ? {
        id              :   actividadModel.id_actividad,
        nombre          :   actividadModel.nombre,
        fecha           :   actividadModel.fecha,
        proyecto        :   actividadModel.proyecto,
        encargado       :   actividadModel.encargado
    } : new Actividad()
}

export function ActividadFiltrarParaBackend(actividad: Actividad): ActividadEntity {
    return actividad != null ? {
        id_actividad    :   actividad.id,
        nombre          :   actividad.nombre,
        fecha           :   actividad.fecha,
        proyecto        :   actividad.proyecto,
        encargado       :   actividad.encargado
    } : new ActividadEntity()
}