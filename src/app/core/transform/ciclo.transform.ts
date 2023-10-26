import { CicloEntity } from './../model/database/ciclo.model';
import { CicloModel } from '../model/backend/ciclo.model';
import { Ciclo } from '../model/frontend/ciclo.model';

export function CicloFiltrarParaFrontend(ciclodModel: CicloModel): Ciclo {
    return ciclodModel != null ? {
        id          :   ciclodModel.id_ciclo,
        escuela     :   ciclodModel.id_escuela,
        nombre      :   ciclodModel.nombre
    } : new Ciclo()
}

export function CicloFiltrarParaBackend(ciclo: Ciclo): CicloEntity {
    return ciclo != null ? {
        id_CICLO    :   ciclo.id,
        id_ESCUELA  :   ciclo.escuela,
        nombre      :   ciclo.nombre
    } :  new CicloEntity()
}