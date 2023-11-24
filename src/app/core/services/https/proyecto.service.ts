import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProyectoModel } from '../../model/backend/proyecto.model';
import { map } from 'rxjs/operators';
import { Proyecto } from '../../model/frontend/proyecto.model';
import { Observable } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  public url: string = environment_api + 'proyecto'
  constructor(
    private http: HttpClient
  ){}

  public getAll(): Observable<Proyecto[]>{
    return this.http.get<ProyectoModel[]>(this.url + '/list').pipe(
      map( v => v.map(s => Proyecto.fromBackend(s)!))
    );

  }

  public save(proyecto: Proyecto): Observable<Proyecto> {
    const proyectoModel: ProyectoModel = ProyectoModel.fromFrontend(proyecto)!;
    return this.http.post<ProyectoModel>(this.url + '/agregar', proyectoModel).pipe(
        map(v => Proyecto.fromBackend(v)!)
      );

  }

  public update(proyecto: Proyecto): Observable<Proyecto> {
    const proyectoModel: ProyectoModel = ProyectoModel.fromFrontend(proyecto)!;
    return this.http.put<ProyectoModel>(this.url + '/editar/' + proyectoModel.id_proyecto, proyectoModel).pipe(
        map(v => Proyecto.fromBackend(v)!)
      );
  }

  public delete (proyectoId: number): Observable<Proyecto> {
    return this.http.delete<ProyectoModel>(this.url + '/eliminar/' + proyectoId).pipe(
        map(v => Proyecto.fromBackend(v)!)
      );
  }

  // funcion para simular el delete
  private deleteByEstado(proyectoId: number): Observable<Proyecto> {
    return this.http.patch<ProyectoModel>(this.url + '/' + proyectoId, { estado: 'Eliminado' }).pipe(
        map(v => Proyecto.fromBackend(v)!)
      );
  }
}
