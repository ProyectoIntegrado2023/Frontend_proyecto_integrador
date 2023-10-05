import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plantilla } from '../model/plantilla.model';

@Injectable({
  providedIn: 'root'
})
export class PlantillaService {

  private url: string = './../../../assets/json/Plantillas.json'

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get<Plantilla[]>(this.url);
  }
}
