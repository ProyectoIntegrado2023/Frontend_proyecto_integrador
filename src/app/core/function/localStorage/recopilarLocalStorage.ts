import { Persona, Plantilla, Proyecto } from "../../model/index.frontend";

export function recopilarProyecto(nombreItem: string): Proyecto {
    const proyecto = localStorage.getItem(nombreItem) ? JSON.parse(localStorage.getItem(nombreItem)!) : Proyecto.init();
    return proyecto;
}

export function recopilarPersona(nombreItem: string): Persona {
    const persona = localStorage.getItem(nombreItem) ? JSON.parse(localStorage.getItem(nombreItem)!) : Persona.init();
    return persona;
}

export function recopilarPlantilla(nombreItem: string): Plantilla {
    const plantilla = localStorage.getItem(nombreItem) ? JSON.parse(localStorage.getItem(nombreItem)!) : Plantilla.init();
    return plantilla;
}