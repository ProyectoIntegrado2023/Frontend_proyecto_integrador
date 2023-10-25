import { SemestreEntity } from './../model/database/semestre.model';
import { SemestreModel } from '../model/backend/semestre.model';
import { Semestre } from '../model/frontend/semestre.model';

export function SemestreFiltrarParaFrontend(semestreModel: SemestreModel): Semestre {
    return semestreModel != null ? {
        nombre      :   semestreModel.nombre,
        id          :   semestreModel.id_semestre,
    } : new Semestre();
}

export function SemestreFiltrarParaBackend(semestre: Semestre): SemestreEntity {
    return semestre != null ? {
        nombre      :   semestre.nombre,
        id_SEMESTRE :   semestre.id,
    } : new SemestreEntity()
}