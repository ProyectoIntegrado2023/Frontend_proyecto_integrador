import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';
import { Estudiante } from '../../model/index.frontend';
import { EstudianteModel } from '../../model/index.backend';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  url: string = environment_api + 'estudiante';

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<Estudiante[]> {
    return this.http.get<EstudianteModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => Estudiante.fromBackend(s)!))
    )
  }

  getById(id: number): Observable<Estudiante> {
    return this.http.get<EstudianteModel>(this.url + '/get/' + id).pipe(
      map(v => Estudiante.fromBackend(v)!)
    )
  }

  save(estudiante: Estudiante): Observable<Estudiante> {
    const estudianteModel: EstudianteModel = EstudianteModel.fromFrontend(estudiante)!;
    return this.http.post<EstudianteModel>(this.url + '/agregar', estudianteModel).pipe(
      map(v => Estudiante.fromBackend(v)!)
    )
  }

  update(estudiante: Estudiante): Observable<Estudiante> {
    const estudianteModel: EstudianteModel = EstudianteModel.fromFrontend(estudiante)!;
    return this.http.put<EstudianteModel>(this.url + '/editar/' + estudiante.id, estudianteModel).pipe(
      map(v => Estudiante.fromBackend(v)!)
    )
  }

  delete(estudianteId: number): Observable<Estudiante> {
    return this.http.delete<EstudianteModel>(this.url + '/eliminar/' + estudianteId).pipe(
      map(v => Estudiante.fromBackend(v)!)
    )
  }
}
