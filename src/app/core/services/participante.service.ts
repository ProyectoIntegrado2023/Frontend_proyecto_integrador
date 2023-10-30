import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';
import { Participante } from '../model/index.frontend';
import { ParticipanteModel } from '../model/index.backend';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {

  url: string = environment_api + 'participante';

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<Participante[]> {
    return this.http.get<ParticipanteModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => Participante.fromBackend(s)))
    );
  }

  getById(id: number): Observable<Participante> {
    return this.http.get<ParticipanteModel>(this.url + '/get/' + id).pipe(
      map(v => Participante.fromBackend(v))
    );
  }

  save(participante: Participante): Observable<Participante> {
    const participanteModel: ParticipanteModel = ParticipanteModel.fromFrontend(participante);
    return this.http.post<ParticipanteModel>(this.url + '/agregar', participanteModel).pipe(
      map(v => Participante.fromBackend(v))
    )
  }

  update(participante: Participante): Observable<Participante> {
    const participanteModel: ParticipanteModel = ParticipanteModel.fromFrontend(participante);
    return this.http.put<ParticipanteModel>(this.url + '/editar/' + participante.id, participanteModel).pipe(
      map(v => Participante.fromBackend(v))
    )
  }

  delete(participanteId: number): Observable<Participante> {
    return this.http.delete<ParticipanteModel>(this.url + '/eliminar/' + participanteId).pipe(
      map(v => Participante.fromBackend(v))
    )
  }
}
