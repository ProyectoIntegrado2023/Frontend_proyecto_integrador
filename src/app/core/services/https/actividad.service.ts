import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';
import { Actividad } from '../../model/index.frontend';
import { ActividadModel } from '../../model/index.backend';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  private url: string = environment_api +'actividad'

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<Actividad[]> {
    return this.http.get<ActividadModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => Actividad.fromBackend(s)!))
    );
  }

  getById(id: number): Observable<Actividad> {
    return this.http.get<ActividadModel>(this.url + '/get/' + id).pipe(
      map(v => Actividad.fromBackend(v)!)
    );
  }

  save(actividad: Actividad): Observable<Actividad> {
    const actividadModel: ActividadModel = ActividadModel.fromFrontend(actividad)!;
    return this.http.post<ActividadModel>(this.url + '/agregar', actividadModel).pipe(
      map(v => Actividad.fromBackend(v)!)
    );
  }

  update(actividad: Actividad): Observable<Actividad> {
    const actividadModel: ActividadModel = ActividadModel.fromFrontend(actividad)!;
    return this.http.put<ActividadModel>(this.url + '/editar/' + actividad.id, actividadModel).pipe(
      map(v => Actividad.fromBackend(v)!)
    );
  }

  delete(actividadId: number): Observable<Actividad> {
    return this.http.delete<ActividadModel>(this.url + '/eliminar/' + actividadId).pipe(
      map(v => Actividad.fromBackend(v)!)
    );
  }
}
