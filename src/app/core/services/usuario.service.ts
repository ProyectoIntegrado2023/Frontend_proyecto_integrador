import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioFiltrarParaFrontend } from '../transform/usuario.transform';
import { UsuarioModel } from '../model/backend/usuario.model';
import { Usuario } from '../model/frontend/usuario.model';
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
      map((usuarioModel: UsuarioModel[]) => usuarioModel.map(UsuarioFiltrarParaFrontend))
    )
  }
}
