import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';
import { Recurso } from '../../model/index.frontend';
import { RecursoModel } from '../../model/index.backend';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {

  url: string = environment_api + 'Recurso';

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<Recurso[]> {
    return this.http.get<RecursoModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => Recurso.fromBackend(s)!))
    );
  }

  getById(id: number): Observable<Recurso> {
    return this.http.get<RecursoModel>(this.url + '/get/' + id).pipe(
      map(v => Recurso.fromBackend(v)!)
    );
  }

  save(recurso: Recurso): Observable<Recurso> {
    const recursoModel: RecursoModel = RecursoModel.fromFrontend(recurso)!;
    return this.http.post<RecursoModel>(this.url + '/agregar', recursoModel).pipe(
      map(v => Recurso.fromBackend(v)!)
    )
  }

  update(recurso: Recurso): Observable<Recurso> {
    const recursoModel: RecursoModel = RecursoModel.fromFrontend(recurso)!;
    return this.http.put<RecursoModel>(this.url + '/editar/' + recurso.id, recursoModel).pipe(
      map(v => Recurso.fromBackend(v)!)
    )
  }

  delete(recursoId: number): Observable<Recurso> {
    return this.http.delete<RecursoModel>(this.url + '/eliminar/' + recursoId).pipe(
      map(v => Recurso.fromBackend(v)!)
    )
  }
}
