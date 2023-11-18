import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';
import { Escuela } from '../../model/index.frontend';
import { EscuelaModel } from '../../model/index.backend';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {

  url: string = environment_api + 'Escuela';

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<Escuela[]> {
    return this.http.get<EscuelaModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => Escuela.fromBackend(s)!))
    );
  }

  getById(id: number): Observable<Escuela> {
    return this.http.get<EscuelaModel>(this.url + '/get/' + id).pipe(
      map(v => Escuela.fromBackend(v)!)
    );
  }

  save(escuela: Escuela): Observable<Escuela> {
    const escuelaModel: EscuelaModel = EscuelaModel.fromFrontend(escuela)!;
    return this.http.post<EscuelaModel>(this.url + '/agregar', escuelaModel).pipe(
      map(v => Escuela.fromBackend(v)!)
    )
  }

  update(escuela: Escuela): Observable<Escuela> {
    const escuelaModel: EscuelaModel = EscuelaModel.fromFrontend(escuela)!;
    return this.http.put<EscuelaModel>(this.url + '/editar/' + escuela.id, escuelaModel).pipe(
      map(v => Escuela.fromBackend(v)!)
    )
  }

  delete(escuelaId: number): Observable<Escuela> {
    return this.http.delete<EscuelaModel>(this.url + '/eliminar/' + escuelaId).pipe(
      map(v => Escuela.fromBackend(v)!)
    )
  }
}
