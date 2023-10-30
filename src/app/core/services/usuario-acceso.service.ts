import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';
import { UsuarioAcceso } from '../model/index.frontend';
import { UsuarioAccesoModel } from '../model/index.backend';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAccesoService {

  url: string = environment_api + 'usuario_accesos';

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<UsuarioAcceso[]> {
    return this.http.get<UsuarioAccesoModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => UsuarioAcceso.fromBackend(s)))
    );
  }

  getById(id: number): Observable<UsuarioAcceso> {
    return this.http.get<UsuarioAccesoModel>(this.url + '/get/' + id).pipe(
      map(v => UsuarioAcceso.fromBackend(v))
    );
  }

  save(usuarioAcceso: UsuarioAcceso): Observable<UsuarioAcceso> {
    const usuarioAccesoModel: UsuarioAccesoModel = UsuarioAccesoModel.fromFrontend(usuarioAcceso);
    return this.http.post<UsuarioAccesoModel>(this.url + '/agregar', usuarioAccesoModel).pipe(
      map(v => UsuarioAcceso.fromBackend(v))
    );
  }

  update(usuarioAcceso: UsuarioAcceso): Observable<UsuarioAcceso> {
    const usuarioAccesoModel: UsuarioAccesoModel = UsuarioAccesoModel.fromFrontend(usuarioAcceso);
    return this.http.put<UsuarioAccesoModel>(this.url + '/editar/' + usuarioAcceso.id, usuarioAccesoModel).pipe(
      map(v => UsuarioAcceso.fromBackend(v))
    );
  }

  delete(usuarioAccesoId: number): Observable<UsuarioAcceso> {
    return this.http.delete<UsuarioAccesoModel>(this.url + '/eliminar/' + usuarioAccesoId).pipe(
      map(v => UsuarioAcceso.fromBackend(v))
    );
  }
}
