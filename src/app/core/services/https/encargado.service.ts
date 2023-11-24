import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';
import { Encargado } from '../../model/index.frontend';
import { EncargadoModel } from '../../model/index.backend';

@Injectable({
  providedIn: 'root'
})
export class EncargadoService {

  url: string = environment_api + 'encargado';

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<Encargado[]> {
    return this.http.get<EncargadoModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => Encargado.fromBackend(s)!))
    )
  }

  getById(id: number): Observable<Encargado> {
    return this.http.get<EncargadoModel>(this.url + '/get/' + id).pipe(
      map(v => Encargado.fromBackend(v)!)
    )
  }

  save(encargado: Encargado): Observable<Encargado> {
    const encargadoModel: EncargadoModel = EncargadoModel.fromFrontend(encargado)!;
    return this.http.post<EncargadoModel>(this.url + '/agregar', encargadoModel).pipe(
      map(v => Encargado.fromBackend(v)!)
    )
  }

  update(encargado: Encargado): Observable<Encargado> {
    const encargadoModel: EncargadoModel = EncargadoModel.fromFrontend(encargado)!;
    return this.http.put<EncargadoModel>(this.url + '/editar/' + encargado.id, encargadoModel).pipe(
      map(v => Encargado.fromBackend(v)!)
    )
  }

  delete(encargadoId: number): Observable<Encargado> {
    return this.http.delete<EncargadoModel>(this.url + '/eliminar/' + encargadoId).pipe(
      map(v => Encargado.fromBackend(v)!)
    )
  }
}
