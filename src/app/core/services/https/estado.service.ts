import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';
import { Estado } from '../../model/index.frontend';
import { EstadoModel } from '../../model/index.backend';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  url: string = environment_api + 'estado';

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<Estado[]> {
    return this.http.get<EstadoModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => Estado.fromBackend(s)!))
    );
  }

  getById(id: number): Observable<Estado> {
    return this.http.get<EstadoModel>(this.url + '/get/' + id).pipe(
      map(v => Estado.fromBackend(v)!)
    );
  }

  save(estado: Estado): Observable<Estado> {
    const estadoModel: EstadoModel = EstadoModel.fromFrontend(estado)!;
    return this.http.post<EstadoModel>(this.url + '/agregar', estadoModel).pipe(
      map(v => Estado.fromBackend(v)!)
    );
  }

  update(estado: Estado): Observable<Estado> {
    const estadoModel: EstadoModel = EstadoModel.fromFrontend(estado)!;
    return this.http.put<EstadoModel>(this.url + '/editar/' + estado.id, estadoModel).pipe(
      map(v => Estado.fromBackend(v)!)
    );
  }

  delete(estadoId: number): Observable<Estado> {
    return this.http.delete<EstadoModel>(this.url + '/eliminar/' + estadoId).pipe(
      map(v => Estado.fromBackend(v)!)
    )
  }
}
