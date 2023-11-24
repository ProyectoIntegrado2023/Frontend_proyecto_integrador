export function obtenerIdsAEliminar(lista: any[], listaCopia: any[]): number[] {
    const idsAEliminar: number[] = [];
  
    listaCopia.forEach(rpCopia => {
      if (!lista.some(rp => rp.id === rpCopia.id)) {
        idsAEliminar.push(rpCopia.id!);
      }
    });
    
    return idsAEliminar;
}