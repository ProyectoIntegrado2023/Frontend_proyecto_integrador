import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';
import { RolSistemaAcceso } from '../../model/index.frontend';
import { RolSistemaAccesoModel } from '../../model/index.backend';

@Injectable({
  providedIn: 'root'
})
export class RolSistemaAccesoService {

  url: string = environment_api + 'rol_sistema_accesos';

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<RolSistemaAcceso[]> {
    return this.http.get<RolSistemaAccesoModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => RolSistemaAcceso.fromBackend(s)))
    );
  }

  getById(id: number): Observable<RolSistemaAcceso> {
    return this.http.get<RolSistemaAccesoModel>(this.url + '/get/' + id).pipe(
      map(v => RolSistemaAcceso.fromBackend(v))
    )
  }

  save(rolSistemaAcceso: RolSistemaAcceso): Observable<RolSistemaAcceso> {
    const rolSistemaAccesoModel: RolSistemaAccesoModel = RolSistemaAccesoModel.fromFrontend(rolSistemaAcceso);
    return this.http.post<RolSistemaAccesoModel>(this.url + '/agregar', rolSistemaAccesoModel).pipe(
      map(v => RolSistemaAcceso.fromBackend(v))
    )
  }

  update(rolSistemaAcceso: RolSistemaAcceso): Observable<RolSistemaAcceso> {
    const rolSistemaAccesoModel: RolSistemaAccesoModel = RolSistemaAccesoModel.fromFrontend(rolSistemaAcceso);
    return this.http.put<RolSistemaAccesoModel>(this.url + '/editar/' + rolSistemaAcceso.id, rolSistemaAccesoModel).pipe(
      map(v => RolSistemaAcceso.fromBackend(v))
    )
  }

  delete(rolSistemaAccesoId: number): Observable<RolSistemaAcceso> {
    return this.http.delete<RolSistemaAccesoModel>(this.url + '/eliminar/' + rolSistemaAccesoId).pipe(
      map(v => RolSistemaAcceso.fromBackend(v))
    )
  }
}
