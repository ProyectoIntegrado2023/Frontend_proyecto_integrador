import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioModel } from '../../model/index.backend';
import { Usuario } from '../../model/index.frontend';
import { environment_api } from 'src/environments/environment.spring';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url: string = environment_api + 'usuario'
  
  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<Usuario[]> {
    return this.http.get<UsuarioModel[]>(this.url + '/list').pipe(
      map((usuarioModel: UsuarioModel[]) => usuarioModel.map(v => Usuario.fromBackend(v)))
    )
  }

  getById(id: number): Observable<Usuario> {
    return this.http.get<UsuarioModel>(this.url + '/get/' + id).pipe(
      map(v => Usuario.fromBackend(v))
    )
  }

  save(acceso: Usuario): Observable<Usuario> {
    const usuarioModel: UsuarioModel = UsuarioModel.fromFrontend(acceso);
    return this.http.post<UsuarioModel>(this.url + '/agregar', usuarioModel).pipe(
      map(v => Usuario.fromBackend(v))
    )
  }

  update(acceso: Usuario): Observable<Usuario> {
    const usuarioModel: UsuarioModel = UsuarioModel.fromFrontend(acceso);
    return this.http.put<UsuarioModel>(this.url + '/editar/' + acceso.id, usuarioModel).pipe(
      map(v => Usuario.fromBackend(v))
    )
  }

  delete(accesoId: number): Observable<Usuario> {
    return this.http.delete<UsuarioModel>(this.url + '/eliminar/' + accesoId).pipe(
      map(v => Usuario.fromBackend(v))
    )
  }
}
