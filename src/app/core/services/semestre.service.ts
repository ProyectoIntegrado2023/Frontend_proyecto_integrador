import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';
import { Semestre } from '../model/index.frontend';
import { SemestreModel } from '../model/index.backend';

@Injectable({
  providedIn: 'root'
})
export class SemestreService {

  url: string = environment_api + 'Semestre';

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<Semestre[]> {
    return this.http.get<SemestreModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => Semestre.fromBackend(s)))
    );
  }

  getById(id: number): Observable<Semestre> {
    return this.http.get<SemestreModel>(this.url + '/get/' + id).pipe(
      map(v => Semestre.fromBackend(v))
    );
  }

  save(semestre: Semestre): Observable<Semestre> {
    const semestreModel: SemestreModel = SemestreModel.fromFrontend(semestre);
    return this.http.post<SemestreModel>(this.url + '/agregar', semestreModel).pipe(
      map(v => Semestre.fromBackend(v))
    )
  }

  update(semestre: Semestre): Observable<Semestre> {
    const semestreModel: SemestreModel = SemestreModel.fromFrontend(semestre);
    return this.http.put<SemestreModel>(this.url + '/editar/' + semestre.id, semestreModel).pipe(
      map(v => Semestre.fromBackend(v))
    )
  }

  delete(semestreId: number): Observable<Semestre> {
    return this.http.delete<SemestreModel>(this.url + '/eliminar/' + semestreId).pipe(
      map(v => Semestre.fromBackend(v))
    )
  }
}
