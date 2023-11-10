import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccesoModel } from '../../model/index.backend';
import { Acceso } from '../../model/index.frontend';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment_api } from 'src/environments/environment.spring';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private url: string = environment_api +'acceso' //'../../../assets/json/Accesos.json'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Acceso[]> {
    return this.http.get<AccesoModel[]>(this.url + '/list').pipe( //+ '/list'
      map(v => { return v.map(Acceso.fromBackend) })
    )
  }

  getById(id: number): Observable<Acceso> {
    return this.http.get<AccesoModel>(this.url + '/get/' + id).pipe(
      map(v => Acceso.fromBackend(v))
    )
  }

  save(acceso: Acceso): Observable<Acceso> {
    const accesoModel: AccesoModel = AccesoModel.fromFrontend(acceso);
    return this.http.post<AccesoModel>(this.url + '/agregar', accesoModel).pipe(
      map(v => Acceso.fromBackend(v))
    )
  }

  update(acceso: Acceso): Observable<Acceso> {
    const accesoModel: AccesoModel = AccesoModel.fromFrontend(acceso);
    return this.http.put<AccesoModel>(this.url + '/editar/' + acceso.id, accesoModel).pipe(
      map(v => Acceso.fromBackend(v))
    )
  }

  delete(accesoId: number): Observable<Acceso> {
    return this.http.delete<AccesoModel>(this.url + '/eliminar/' + accesoId).pipe(
      map(v => Acceso.fromBackend(v))
    )
  }
}
