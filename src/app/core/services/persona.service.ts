import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Persona } from '../model/index.frontend';
import { PersonaModel } from '../model/index.backend';
import { environment_api } from 'src/environments/environment.spring';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url: string = environment_api + 'persona'

  constructor(
    private http: HttpClient
  ){}

  getAll(): Observable<Persona[]> {
    return this.http.get<PersonaModel[]>(this.url + '/list').pipe(
      map(v => v.map(s => Persona.fromBackend(s)))
    );
  }

  getById(id: number): Observable<Persona> {
    return this.http.get<PersonaModel>(this.url + '/get/' + id).pipe(
      map(v => Persona.fromBackend(v))
    );
  }

  save(persona: Persona): Observable<Persona> {
    const personaModel: PersonaModel = PersonaModel.fromFrontend(persona);
    return this.http.post<PersonaModel>(this.url + '/agregar', personaModel).pipe(
      map(v => Persona.fromBackend(v))
    );
  }

  update(persona: Persona): Observable<Persona> {
    const personaModel: PersonaModel = PersonaModel.fromFrontend(persona);
    return this.http.put<PersonaModel>(this.url + '/editar/' + persona.id, personaModel).pipe(
      map(v => Persona.fromBackend(v))
    );
  }

  delete(personaId: number): Observable<Persona> {
    return this.http.delete<PersonaModel>(this.url + '/eliminar/' + personaId).pipe(
      map(v => Persona.fromBackend(v))
    )
  }
}
