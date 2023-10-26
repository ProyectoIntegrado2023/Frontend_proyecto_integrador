import { AccesoEntity } from '../model/database/acceso.model';
import { AccesoModel } from '../model/backend/acceso.model';
import { Acceso } from '../model/frontend/acceso.model';

export function AccesoFiltrarParaFrontend(accesoModel: AccesoModel): Acceso {
    return accesoModel != null ?{
        id                  :   accesoModel.id_accesos,
        url                 :   accesoModel.url,
        titulo              :   accesoModel.nombre,
        id_acceso_padre     :   accesoModel.id_accesos_padre
    } : new Acceso()
}

export function AccesoFiltrarParaBackend(acceso: Acceso): AccesoEntity {
    return acceso != null ? {
        id_ACCESOS          :   acceso.id,
        url                 :   acceso.url,
        nombre              :   acceso.titulo,
        id_ACCESOS_PADRE    :   acceso.id_acceso_padre
    } : new AccesoEntity
}