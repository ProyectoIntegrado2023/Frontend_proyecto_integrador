import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProyectoModel } from '../model/backend/proyecto.model';
import { ProyectoEntity } from '../model/database/proyecto.model';
import { Proyecto } from '../model/frontend/proyecto.model';
import { ProyectoFiltrarParaBackend, ProyectoFiltrarParaFrontend } from '../transform/proyecto.transform';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private url: string = '../../../assets/json/Proyectos.json' // environment_api + 'proyecto'
  constructor(
    private http: HttpClient
  ){}

  public getAll(): Observable<Proyecto[]>{
    return this.http.get<ProyectoModel[]>(this.url).pipe( //+ '/list'
      map((proyectosModel: ProyectoModel[]) => proyectosModel.map(ProyectoFiltrarParaFrontend))
    );

  }

  public save(proyecto: Proyecto): Observable<Proyecto> {
    const proyectoModel: ProyectoEntity = ProyectoFiltrarParaBackend(proyecto);
    return this.http.post<ProyectoModel>(this.url + '/agregar', proyectoModel).pipe(
        map(ProyectoFiltrarParaFrontend)
      );

  }

  public update(proyecto: Proyecto): Observable<Proyecto> {
    const proyectoModel: ProyectoEntity = ProyectoFiltrarParaBackend(proyecto);
    return this.http.put<ProyectoModel>(this.url + '/editar/' + proyectoModel.id_PROYECTO, proyectoModel).pipe(
        map(ProyectoFiltrarParaFrontend)
      );
  }

  public delete (proyectoId: number): Observable<Proyecto> {
    return this.http.delete<ProyectoModel>(this.url + '/eliminar/' + proyectoId).pipe(
        map(ProyectoFiltrarParaFrontend)
      );
  }

  // funcion para simular el delete
  private deleteByEstado(proyectoId: number): Observable<Proyecto> {
    return this.http.patch<ProyectoModel>(this.url + '/' + proyectoId, { estado: 'Eliminado' }).pipe(
        map(ProyectoFiltrarParaFrontend)
      );
  }
}
