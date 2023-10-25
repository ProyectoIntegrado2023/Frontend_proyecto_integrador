import { PersonaEntity } from './../model/database/persona.model';
import { PersonaModel } from '../model/backend/persona.model';
import { Persona } from '../model/frontend/persona.model';

export function PersonaFiltrarParaFrontend(persona: PersonaModel): Persona {
    return persona != null ? {
        id              :   persona.id_persona,
        rol_sistema     :   persona.id_rol_sistema,
        nombre          :   persona.nombre
    } : new Persona()
}

export function PersonaFiltrarParaBackend(persona: Persona): PersonaEntity {
    return persona != null ? {
        id_PERSONA      :   persona.id,
        id_ROL_SISTEMA  :   persona.rol_sistema,
        nombre          :   persona.nombre
    } : new PersonaEntity()
}