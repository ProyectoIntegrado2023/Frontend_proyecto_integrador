import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyectos } from '../model/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

private url : string = './../../../assets/json/Proyectos.json'

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Proyectos[]>(this.url);
  }
}
