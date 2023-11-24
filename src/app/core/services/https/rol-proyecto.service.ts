import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';
import { RolProyecto } from '../../model/index.frontend';
import { RolProyectoModel } from '../../model/index.backend';

@Injectable({
  providedIn: 'root'
})
export class RolProyectoService {

  url: string = environment_api + 'rol_proyecto';

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<RolProyecto[]> {
    return this.http.get<RolProyectoModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => RolProyecto.fromBackend(s)!))
    );
  }

  getById(id: number): Observable<RolProyecto> {
    return this.http.get<RolProyectoModel>(this.url + '/get/' + id).pipe(
      map(v => RolProyecto.fromBackend(v)!)
    );
  }

  save(rolProyecto: RolProyecto): Observable<RolProyecto> {
    const rolProyectoModel: RolProyectoModel = RolProyectoModel.fromFrontend(rolProyecto)!;
    return this.http.post<RolProyectoModel>(this.url + '/agregar', rolProyectoModel).pipe(
      map(v => RolProyecto.fromBackend(v)!)
    );
  }

  update(rolProyecto: RolProyecto): Observable<RolProyecto> {
    const rolProyectoModel: RolProyectoModel = RolProyectoModel.fromFrontend(rolProyecto)!;
    return this.http.put<RolProyectoModel>(this.url + '/editar/' + rolProyecto.id, rolProyectoModel).pipe(
      map(v => RolProyecto.fromBackend(v)!)
    );
  }

  delete(rolProyectoId: number): Observable<RolProyecto> {
    return this.http.delete<RolProyectoModel>(this.url + '/eliminar/' + rolProyectoId).pipe(
      map(v => RolProyecto.fromBackend(v)!)
    );
  }
}
