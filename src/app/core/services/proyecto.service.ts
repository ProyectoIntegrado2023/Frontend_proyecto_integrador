import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  
  private url: string = "http://localhost:8080/proyecto"
  constructor(
    private http: HttpClient
  ){}

  getAll(){
    return this.http.get<Proyecto[]>(this.url + '/list');
  }
}
