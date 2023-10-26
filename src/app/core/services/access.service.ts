import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccesoModel } from '../model/backend/acceso.model';
import { Acceso } from '../model/frontend/acceso.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccesoFiltrarParaFrontend } from '../transform/acceso.transform';
import { environment_api } from 'src/environments/environment.spring';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private url: string =  environment_api +'acceso' //'../../../assets/json/Accesos.json'
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Acceso[]>{
    return this.http.get<AccesoModel[]>(this.url + '/list').pipe(
      map((accesosModel: AccesoModel[]) => accesosModel.map(AccesoFiltrarParaFrontend))
    )
  }
}
