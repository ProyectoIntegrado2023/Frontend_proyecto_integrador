import { RolProyectoEntity } from './../model/database/rolProyecto.model';
import { RolProyectoModel } from '../model/backend/rolProyecto.model';
import { RolProyecto } from '../model/frontend/rolProyecto.model';

export function RolProyectoFiltrarParaFrontend(rolProyectoModel: RolProyectoModel): RolProyecto {
    return rolProyectoModel != null ? {
        nombre          :   rolProyectoModel.nombre,
        descripcion     :   rolProyectoModel.descripcion,
        hora            :   rolProyectoModel.hora,
        id_proyecto     :   rolProyectoModel.id_proyecto,
        id_rol_negocio  :   rolProyectoModel.id_rol_negocio,
        id_rol_proyecto :   rolProyectoModel.id_rol_proyecto,
    } : new RolProyecto()
}

export function RolProyectoFiltrarParaBackend(rolProyecto: RolProyecto): RolProyectoEntity {
    return {
        nombre          :   rolProyecto.nombre,
        descripcion     :   rolProyecto.descripcion,
        hora            :   rolProyecto.hora,
        id_PROYECTO     :   rolProyecto.id_proyecto,
        id_ROL_NEGOCIO  :   rolProyecto.id_rol_negocio,
        id_ROL_PROYECTO :   rolProyecto.id_rol_proyecto,
    }
}