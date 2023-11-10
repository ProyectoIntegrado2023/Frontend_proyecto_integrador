import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';
import { Ciclo } from '../../model/index.frontend';
import { CicloModel } from '../../model/index.backend';

@Injectable({
  providedIn: 'root'
})
export class CicloService {

  url: string = environment_api + 'ciclo'

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<Ciclo[]> {
    return this.http.get<CicloModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => Ciclo.fromBackend(s)))
    )
  }

  getById(id: number): Observable<Ciclo> {
    return this.http.get<CicloModel>(this.url + '/get/' + id).pipe(
      map(v => Ciclo.fromBackend(v))
    )
  }

  save(ciclo: Ciclo): Observable<Ciclo> {
    const cicloModel: CicloModel = CicloModel.fromFrontend(ciclo);
    return this.http.post<CicloModel>(this.url + '/agregar', cicloModel).pipe(
      map(v => Ciclo.fromBackend(v))
    )
  }

  update(ciclo: Ciclo): Observable<Ciclo> {
    const cicloModel: CicloModel = CicloModel.fromFrontend(ciclo);
    return this.http.put<CicloModel>(this.url + '/editar/' + ciclo.id, cicloModel).pipe(
      map(v => Ciclo.fromBackend(v))
    )
  }

  delete(cicloId: number): Observable<Ciclo> {
    return this.http.delete<CicloModel>(this.url + '/eliminar/' + cicloId).pipe(
      map(v => Ciclo.fromBackend(v))
    )
  }
}
