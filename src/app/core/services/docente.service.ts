import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';
import { Docente } from '../model/index.frontend';
import { DocenteModel } from '../model/index.backend';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  url: string = environment_api + 'docente';

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<Docente[]> {
    return this.http.get<DocenteModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => Docente.fromBackend(s)))
    );
  }

  getById(id: number): Observable<Docente> {
    return this.http.get<DocenteModel>(this.url + '/get/' + id).pipe(
      map(v => Docente.fromBackend(v))
    );
  }

  save(docente: Docente): Observable<Docente> {
    const docenteModel: DocenteModel = DocenteModel.fromFrontend(docente);
    return this.http.post<DocenteModel>(this.url + '/agregar', docenteModel).pipe(
      map(v => Docente.fromBackend(v))
    );
  }

  update(docente: Docente): Observable<Docente> {
    const docenteModel: DocenteModel = DocenteModel.fromFrontend(docente);
    return this.http.put<DocenteModel>(this.url + '/editar/' + docente.id, docenteModel).pipe(
      map(v => Docente.fromBackend(v))
    );
  }

  delete(docenteId: number): Observable<Docente> {
    return this.http.delete<DocenteModel>(this.url + '/eliminar/' + docenteId).pipe(
      map(v => Docente.fromBackend(v))
    );
  }
}
