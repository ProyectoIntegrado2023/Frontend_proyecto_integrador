import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';
import { RolSistema } from '../../model/index.frontend';
import { RolSistemaModel } from '../../model/index.backend';

@Injectable({
  providedIn: 'root'
})
export class RolSistemaService {

  url: string = environment_api + 'rol_sistema';

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<RolSistema[]> {
    return this.http.get<RolSistemaModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => RolSistema.fromBackend(s)!))
    );
  }

  getById(id: number): Observable<RolSistema> {
    return this.http.get<RolSistemaModel>(this.url + '/get/' + id).pipe(
      map(v => RolSistema.fromBackend(v)!)
    )
  }

  save(rolSistema: RolSistema): Observable<RolSistema> {
    const rolSistemaModel: RolSistemaModel = RolSistemaModel.fromFrontend(rolSistema)!;
    return this.http.post<RolSistemaModel>(this.url + '/agregar', rolSistemaModel).pipe(
      map(v => RolSistema.fromBackend(v)!)
    )
  }

  update(rolSistema: RolSistema): Observable<RolSistema> {
    const rolSistemaModel: RolSistemaModel = RolSistemaModel.fromFrontend(rolSistema)!;
    return this.http.put<RolSistemaModel>(this.url + '/editar/' + rolSistema.id, rolSistemaModel).pipe(
      map(v => RolSistema.fromBackend(v)!)
    )
  }

  delete(rolSistemaId: number): Observable<RolSistema> {
    return this.http.delete<RolSistemaModel>(this.url + '/eliminar/' + rolSistemaId).pipe(
      map(v => RolSistema.fromBackend(v)!)
    )
  }
}
