import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';
import { Facultad } from '../model/index.frontend';
import { FacultadModel } from '../model/index.backend';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  url: string = environment_api + 'facultad';

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<Facultad[]> {
    return this.http.get<FacultadModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => Facultad.fromBackend(s)))
    );
  }

  getById(id: number): Observable<Facultad> {
    return this.http.get<FacultadModel>(this.url + '/get/' + id).pipe(
      map(v => Facultad.fromBackend(v))
    );
  }

  save(facultad: Facultad): Observable<Facultad> {
    const facultadModel: FacultadModel = FacultadModel.fromFrontend(facultad);
    return this.http.post<FacultadModel>(this.url + '/agregar', facultadModel).pipe(
      map(v => Facultad.fromBackend(v))
    )
  }

  update(facultad: Facultad): Observable<Facultad> {
    const facultadModel: FacultadModel = FacultadModel.fromFrontend(facultad);
    return this.http.put<FacultadModel>(this.url + '/editar/' + facultad.id, facultadModel).pipe(
      map(v => Facultad.fromBackend(v))
    )
  }

  delete(facultadId: number): Observable<Facultad> {
    return this.http.delete<FacultadModel>(this.url + '/eliminar/' + facultadId).pipe(
      map(v => Facultad.fromBackend(v))
    )
  }
}
