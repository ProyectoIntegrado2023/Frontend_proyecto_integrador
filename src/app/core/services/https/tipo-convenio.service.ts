import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';
import { TipoConvenio } from '../../model/index.frontend';
import { TipoConvenioModel } from '../../model/index.backend';

@Injectable({
  providedIn: 'root'
})
export class TipoConvenioService {

  url: string = environment_api + 'convenio';

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<TipoConvenio[]> {
    return this.http.get<TipoConvenioModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => TipoConvenio.fromBackend(s)!))
    );
  }

  getById(id: number): Observable<TipoConvenio> {
    return this.http.get<TipoConvenioModel>(this.url + '/get/' + id).pipe(
      map(v => TipoConvenio.fromBackend(v)!)
    )
  }

  save(tipoConvenio: TipoConvenio): Observable<TipoConvenio> {
    const tipoConvenioModel: TipoConvenioModel = TipoConvenioModel.fromFrontend(tipoConvenio)!;
    return this.http.post<TipoConvenioModel>(this.url + '/agregar', tipoConvenioModel).pipe(
      map(v => TipoConvenio.fromBackend(v)!)
    )
  }

  update(tipoConvenio: TipoConvenio): Observable<TipoConvenio> {
    const tipoConvenioModel: TipoConvenioModel = TipoConvenioModel.fromFrontend(tipoConvenio)!;
    return this.http.put<TipoConvenioModel>(this.url + '/editar/' + tipoConvenio.id, tipoConvenioModel).pipe(
      map(v => TipoConvenio.fromBackend(v)!)
    )
  }

  delete(tipoConvenioId: number): Observable<TipoConvenio> {
    return this.http.delete<TipoConvenioModel>(this.url + '/eliminar/' + tipoConvenioId).pipe(
      map(v => TipoConvenio.fromBackend(v)!)
    )
  }
}
