import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlantillaModel } from '../../model/index.backend';
import { Plantilla } from '../../model/index.frontend';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment_api } from 'src/environments/environment.spring';

@Injectable({
  providedIn: 'root'
})
export class PlantillaService {

  private url: string = environment_api + 'plantilla';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Plantilla[]>{
    return this.http.get<PlantillaModel[]>(this.url + '/list').pipe(
      map(v => v.map( s => Plantilla.fromBackend(s)!))
    )
  }

  getById(id: number): Observable<Plantilla> {
    return this.http.get<PlantillaModel>(this.url + '/get/' + id).pipe(
      map(v => Plantilla.fromBackend(v)!)
    )
  }

  save(plantilla: Plantilla): Observable<Plantilla>{
    const plantillaModel: PlantillaModel = PlantillaModel.fromFrontend(plantilla)!;
    return this.http.post<PlantillaModel>(this.url + '/agregar', plantillaModel).pipe(
      map(v => Plantilla.fromBackend(v)!)
    )
  }

  update(plantilla: Plantilla): Observable<Plantilla>{
    const plantillaModel: PlantillaModel = PlantillaModel.fromFrontend(plantilla)!;
    return this.http.put<PlantillaModel>(this.url + '/editar/' + plantilla.id, plantillaModel).pipe(
      map(v => Plantilla.fromBackend(v)!)
    )
  }

  delete(plantillaId: number): Observable<Plantilla>{
    return this.http.delete<PlantillaModel>(this.url + '/eliminar/' + plantillaId).pipe(
      map(v => Plantilla.fromBackend(v)!)
    )
  }
}
