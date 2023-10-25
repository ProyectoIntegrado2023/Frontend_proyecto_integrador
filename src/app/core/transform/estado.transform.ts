import { EstadoEntity } from './../model/database/estado.model';
import { EstadoModel } from '../model/backend/estado.model';
import { Estado } from '../model/frontend/estado.model';

export function EstadoFiltrarParaFrontend(estadoModel: EstadoModel): Estado {
    return estadoModel != null ? {
        id          :   estadoModel.id_estado,
        nombre      :   estadoModel.nombre
    } : new Estado
}

export function EstadoFiltrarParaBackend(estado: Estado): EstadoEntity {
    return estado != null ? {
        id_ESTADO   :   estado.id,
        nombre      :   estado.nombre
    } :  new EstadoEntity()
}