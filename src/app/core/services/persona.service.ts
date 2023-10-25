import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Persona } from '../model/frontend/persona.model';
import { PersonaModel } from '../model/backend/persona.model';
import { PersonaFiltrarParaFrontend } from '../transform/persona.transform';
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
      map((personaModel: PersonaModel[]) => personaModel.map(PersonaFiltrarParaFrontend))
    );
  }

  getById(id: number): Observable<Persona> {
    return this.http.get<PersonaModel>(this.url + '/get/' + id).pipe(
      map(PersonaFiltrarParaFrontend)
    );
  }
}
