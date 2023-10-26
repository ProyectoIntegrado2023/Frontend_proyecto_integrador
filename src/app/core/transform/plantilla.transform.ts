import { PlantillaEntity } from './../model/database/plantilla.model';
import { PlantillaModel } from '../model/backend/plantilla.model';
import { Plantilla } from '../model/frontend/plantilla.model';

export function PlantillaFiltrarParaFrontend(plantillaModel: PlantillaModel): Plantilla {
    return plantillaModel != null ? {
        id              :   plantillaModel.id,
        nombre          :   plantillaModel.nombre,
        tipo            :   plantillaModel.tipo,
        descripcion     :   plantillaModel.descripcion,
        url             :   plantillaModel.url
    } : new Plantilla()
}

export function PlantillaFiltrarParaBackend(plantilla: Plantilla): PlantillaEntity {
    return plantilla != null ? {
        id              :   plantilla.id,
        nombre          :   plantilla.nombre,
        tipo            :   plantilla.tipo,
        descripcion     :   plantilla.descripcion,
        url             :   plantilla.url
    } : new PlantillaEntity()
}