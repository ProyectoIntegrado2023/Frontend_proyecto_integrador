import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlantillaModel } from '../model/backend/plantilla.model';
import { Plantilla } from '../model/frontend/plantilla.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlantillaFiltrarParaFrontend } from '../transform/plantilla.transform';

@Injectable({
  providedIn: 'root'
})
export class PlantillaService {

  private url: string = './../../../assets/json/Plantillas.json'

  constructor(private http: HttpClient) {}

  getAll(): Observable<Plantilla[]>{
    return this.http.get<PlantillaModel[]>(this.url).pipe(
      map((plantillasModel: PlantillaModel[]) => plantillasModel.map(PlantillaFiltrarParaFrontend))
    )
  }
}
