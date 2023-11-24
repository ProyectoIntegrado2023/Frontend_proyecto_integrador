import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment_api } from 'src/environments/environment.spring';
import { ActividadParticipante } from '../../model/index.frontend';
import { ActividadParticipanteModel } from '../../model/index.backend';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadParticipanteService {

  private url: string = environment_api +'actividad_participante'

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<ActividadParticipante[]> {
    return this.http.get<ActividadParticipanteModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => ActividadParticipante.fromBackend(s)!))
    );
  }

  getById(id: number): Observable<ActividadParticipante> {
    return this.http.get<ActividadParticipanteModel>(this.url + '/get/' + id).pipe(
      map(v => ActividadParticipante.fromBackend(v)!)
    );
  }

  save(actividadParticipante: ActividadParticipante): Observable<ActividadParticipante> {
    const actividadParticipanteModel: ActividadParticipanteModel = ActividadParticipanteModel.fromFrontend(actividadParticipante)!;
    return this.http.post<ActividadParticipanteModel>(this.url + '/agregar', actividadParticipanteModel).pipe(
      map(v => ActividadParticipante.fromBackend(v)!)
    );
  }

  update(actividadParticipante: ActividadParticipante): Observable<ActividadParticipante> {
    const actividadParticipanteModel: ActividadParticipanteModel = ActividadParticipanteModel.fromFrontend(actividadParticipante)!;
    return this.http.put<ActividadParticipanteModel>(this.url + '/editar/' + actividadParticipante.id, actividadParticipanteModel).pipe(
      map(v => ActividadParticipante.fromBackend(v)!)
    );
  }

  delete(actividadParticipanteId: number): Observable<ActividadParticipante> {
    return this.http.delete<ActividadParticipanteModel>(this.url + '/eliminar/' + actividadParticipanteId).pipe(
      map(v => ActividadParticipante.fromBackend(v)!)
    );
  }
}
