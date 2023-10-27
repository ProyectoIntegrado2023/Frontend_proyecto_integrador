import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProyectoModel } from '../model/backend/proyecto.model';
import { map } from 'rxjs/operators';
import { Proyecto } from '../model/frontend/proyecto.model';
import { Observable } from 'rxjs';
import { ProyectoFiltrarParaBackend, ProyectoFiltrarParaFrontend } from '../transform/proyecto.transform';
import { ProyectoEntity } from '../model/database/proyecto.model';
import { environment_api } from 'src/environments/environment.spring';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  
  private url: string = environment_api + 'proyecto' // '../../../assets/json/Proyectos.json'
  constructor(
    private http: HttpClient
  ){}

  public getAll(): Observable<Proyecto[]>{
    return this.http.get<ProyectoModel[]>(this.url + '/list').pipe( //+ '/list'
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
