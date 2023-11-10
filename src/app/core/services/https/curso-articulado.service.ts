import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment_api } from 'src/environments/environment.spring';
import { CursoArticuladoModel } from '../../model/index.backend';
import { CursoArticulado } from '../../model/index.frontend';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoArticuladoService {

  private url: string = environment_api + 'Curso_Articulado';

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<CursoArticulado[]>{
    return this.http.get<CursoArticuladoModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => CursoArticulado.fromBackend(s)))
    )
  }

  getById(id: number): Observable<CursoArticulado> {
    return this.http.get<CursoArticuladoModel>(this.url + '/get/' + id).pipe(
      map(v => CursoArticulado.fromBackend(v))
    )
  }

  save(cursoArticulado: CursoArticulado): Observable<CursoArticulado>{
    const cursoArticuladoModel: CursoArticuladoModel = CursoArticuladoModel.fromFrontend(cursoArticulado);
    return this.http.post<CursoArticuladoModel>(this.url + '/agregar', cursoArticuladoModel).pipe(
      map(v => CursoArticulado.fromBackend(v))
    )
  }

  update(cursoArticulado: CursoArticulado): Observable<CursoArticulado>{
    const cursoArticuladoModel: CursoArticuladoModel = CursoArticuladoModel.fromFrontend(cursoArticulado);
    return this.http.patch<CursoArticuladoModel>(this.url + '/' + cursoArticulado.id, cursoArticuladoModel).pipe(
      map(v => CursoArticulado.fromBackend(v))
    )
  }

  delete(cursoArticuladoId: number): Observable<CursoArticulado>{
    return this.http.delete<CursoArticuladoModel>(this.url + '/eliminar/' + cursoArticuladoId).pipe(
      map(v => CursoArticulado.fromBackend(v))
    )
  }
}
