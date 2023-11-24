import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';
import { RolNegocio } from '../../model/index.frontend';
import { RolNegocioModel } from '../../model/index.backend';

@Injectable({
  providedIn: 'root'
})
export class RolNegocioService {

  url: string = environment_api + 'rol_negocio';

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<RolNegocio[]> {
    return this.http.get<RolNegocioModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => RolNegocio.fromBackend(s)!))
    );
  }

  getById(id: number): Observable<RolNegocio> {
    return this.http.get<RolNegocioModel>(this.url + '/get/' + id).pipe(
      map(v => RolNegocio.fromBackend(v)!)
    )
  }

  save(rolNegocio: RolNegocio): Observable<RolNegocio> {
    const rolNegocioModel: RolNegocioModel = RolNegocioModel.fromFrontend(rolNegocio)!;
    return this.http.post<RolNegocioModel>(this.url + '/agregar', rolNegocioModel).pipe(
      map(v => RolNegocio.fromBackend(v)!)
    );
  }

  update(rolNegocio: RolNegocio): Observable<RolNegocio> {
    const rolNegocioModel: RolNegocioModel = RolNegocioModel.fromFrontend(rolNegocio)!;
    return this.http.put<RolNegocioModel>(this.url + '/editar/' + rolNegocio.id, rolNegocioModel).pipe(
      map(v => RolNegocio.fromBackend(v)!)
    );
  }

  delete(rolNegocioId: number): Observable<RolNegocio> {
    return this.http.delete<RolNegocioModel>(this.url + '/eliminar/' + rolNegocioId).pipe(
      map(v => RolNegocio.fromBackend(v)!)
    );
  }
}
