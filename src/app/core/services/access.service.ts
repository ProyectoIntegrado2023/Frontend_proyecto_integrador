import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccesoModel } from '../model/backend/acceso.model';
import { Acceso } from '../model/frontend/acceso.model';
import { AccesoFiltrarParaFrontend } from '../transform/acceso.transform';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private url: string = '../../../assets/json/Accesos.json'  //environment_api +'acceso'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Acceso[]>{
    return this.http.get<AccesoModel[]>(this.url).pipe( //+ '/list'
      map((accesosModel: AccesoModel[]) => accesosModel.map(AccesoFiltrarParaFrontend))
    )
  }
}
