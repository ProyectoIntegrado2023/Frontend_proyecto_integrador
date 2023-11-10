import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';
import { GrupoUniversitario } from '../../model/index.frontend';
import { GrupoUniversitarioModel } from '../../model/index.backend';

@Injectable({
  providedIn: 'root'
})
export class GrupoUniversitarioService {

  url: string = environment_api + 'grupo-grupo_univ';

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<GrupoUniversitario[]> {
    return this.http.get<GrupoUniversitarioModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => GrupoUniversitario.fromBackend(s)))
    )
  }

  getById(id: number): Observable<GrupoUniversitario> {
    return this.http.get<GrupoUniversitarioModel>(this.url + '/get/' + id).pipe(
      map(v => GrupoUniversitario.fromBackend(v))
    )
  }

  save(grupoUniversitario: GrupoUniversitario): Observable<GrupoUniversitario> {
    const grupoUniversitarioModel: GrupoUniversitarioModel = GrupoUniversitarioModel.fromFrontend(grupoUniversitario);
    return this.http.post<GrupoUniversitarioModel>(this.url + '/agregar', grupoUniversitarioModel).pipe(
      map(v => GrupoUniversitario.fromBackend(v))
    )
  }

  update(grupoUniversitario: GrupoUniversitario): Observable<GrupoUniversitario> {
    const grupoUniversitarioModel: GrupoUniversitarioModel = GrupoUniversitarioModel.fromFrontend(grupoUniversitario);
    return this.http.put<GrupoUniversitarioModel>(this.url + '/editar/' + grupoUniversitario.id, grupoUniversitarioModel).pipe(
      map(v => GrupoUniversitario.fromBackend(v))
    )
  }

  delete(grupoUniversitarioId: number): Observable<GrupoUniversitario> {
    return this.http.delete<GrupoUniversitarioModel>(this.url + '/eliminar/' + grupoUniversitarioId).pipe(
      map(v => GrupoUniversitario.fromBackend(v))
    )
  }
}
