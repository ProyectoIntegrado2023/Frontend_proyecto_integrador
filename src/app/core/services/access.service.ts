import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModuleView } from '../model/moduleView.model';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private url: string = './../../../assets/json/Accesos.json'
  
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<ModuleView[]>(this.url);
  }
}
