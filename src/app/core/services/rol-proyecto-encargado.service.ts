import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';
import { RolProyectoEncargado } from '../model/index.frontend';
import { RolProyectoEncargadoModel } from '../model/index.backend';

@Injectable({
  providedIn: 'root'
})
export class RolProyectoEncargadoService {

  url: string = environment_api + 'rol_proyecto_encargado';

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<RolProyectoEncargado[]> {
    return this.http.get<RolProyectoEncargadoModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => RolProyectoEncargado.fromBackend(s)))
    );
  }

  getById(id: number): Observable<RolProyectoEncargado> {
    return this.http.get<RolProyectoEncargadoModel>(this.url + '/get/' + id).pipe(
      map(v => RolProyectoEncargado.fromBackend(v))
    );
  }

  save(rolProyectoEncargado: RolProyectoEncargado): Observable<RolProyectoEncargado> {
    const rolProyectoEncargadoModel: RolProyectoEncargadoModel = RolProyectoEncargadoModel.fromFrontend(rolProyectoEncargado);
    return this.http.post<RolProyectoEncargadoModel>(this.url + '/agregar', rolProyectoEncargadoModel).pipe(
      map(v => RolProyectoEncargado.fromBackend(v))
    );
  }

  update(rolProyectoEncargado: RolProyectoEncargado): Observable<RolProyectoEncargado> {
    const rolProyectoEncargadoModel: RolProyectoEncargadoModel = RolProyectoEncargadoModel.fromFrontend(rolProyectoEncargado);
    return this.http.put<RolProyectoEncargadoModel>(this.url + '/editar/' + rolProyectoEncargado.id, rolProyectoEncargadoModel).pipe(
      map(v => RolProyectoEncargado.fromBackend(v))
    );
  }

  delete(rolProyectoEncargadoId: number): Observable<RolProyectoEncargado> {
    return this.http.delete<RolProyectoEncargadoModel>(this.url + '/eliminar/' + rolProyectoEncargadoId).pipe(
      map(v => RolProyectoEncargado.fromBackend(v))
    );
  }
}
