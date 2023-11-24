import { Proyecto } from "src/app/core/model/index.frontend";

export function generarCodigoProyecto(escuela: string, listaProyecto: Proyecto[]) {
    const año = new Date().getFullYear();
    const abreviacion = obtenerAbreviacionEscuela(escuela);
    const numeroProyectos = obtenerNumeroProyectos(año + abreviacion, listaProyecto);
    const numeroProyectosStr = numeroProyectos.toString().padStart(2, '0'); 
    const codigoProyecto = año + abreviacion + numeroProyectosStr;

    return codigoProyecto;
}

function obtenerAbreviacionEscuela(escuela: string) {
    const palabras = escuela.split(' ');
    let iniciales = '';
    for (let palabra of palabras) {
      iniciales += palabra.charAt(0);
    }
    return iniciales.toUpperCase();
}

function obtenerNumeroProyectos(codigo: string, listaProyecto: Proyecto[]) {
    let contadorCodigo: number = 0;
    listaProyecto.forEach(p => {
      if(p.codigo != null) {
        try{
          const parteInicial = p.codigo.substring(0, p.codigo.length -2);
          if(parteInicial == codigo) {
            contadorCodigo++;
          }
        } catch {}
      }
    })
    return contadorCodigo + 1;
}