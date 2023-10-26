import { TipoConvenioEntity } from './../model/database/tipoConvenio.model';
import { TipoConvenioModel } from '../model/backend/tipoConvenio.model';
import { TipoConvenio } from '../model/frontend/tipoConvenio.model';

export function TipoConvenioFiltrarParaFrontend(tipoConvenioModel: TipoConvenioModel): TipoConvenio {
    return tipoConvenioModel != null ? {
        id                      :   tipoConvenioModel.id_tipo_de_convenio,
        nombre                  :   tipoConvenioModel.nombre,
    } : new TipoConvenio()
}

export function TipoConvenioFiltrarParaBackend(tipoConvenio: TipoConvenio): TipoConvenioEntity {
    return tipoConvenio != null ? {
        id_TIPO_DE_CONVENIO     :   tipoConvenio.id,
        nombre                  :   tipoConvenio.nombre,
    } : new TipoConvenioEntity()
}