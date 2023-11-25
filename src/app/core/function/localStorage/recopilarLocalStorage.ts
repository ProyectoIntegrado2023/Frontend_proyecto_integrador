import { Persona, Plantilla, Proyecto } from "../../model/index.frontend";

export function recopilarProyecto(): Proyecto {
    const nombreItem = 'proyecto';
    const proyecto = localStorage.getItem(nombreItem) ? JSON.parse(localStorage.getItem(nombreItem)!) : Proyecto.init();
    return proyecto;
}

export function recopilarPersona(): Persona {
    const nombreItem = 'persona';
    const persona = localStorage.getItem(nombreItem) ? JSON.parse(localStorage.getItem(nombreItem)!) : Persona.init();
    return persona;
}

export function recopilarPlantilla(): Plantilla {
    const nombreItem = 'plantilla';
    const plantilla = localStorage.getItem(nombreItem) ? JSON.parse(localStorage.getItem(nombreItem)!) : Plantilla.init();
    return plantilla;
}