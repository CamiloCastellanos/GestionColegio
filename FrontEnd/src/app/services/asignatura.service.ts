import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AsignaturaModel } from '../Models/asignatura.model';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  private url: string = "http://localhost:44309/";

  constructor(private http: HttpClient) { }

  listaAsignatura(): Observable<any> {
    let apiURL: string = this.url + "api/ListaAsignaturas";
    return this.http.get(
      apiURL
    );
  }

  eliminarAsignatura(idAsignatura: number): Observable<any> {
    let data = {
      idAsignatura: idAsignatura
    }

    let apiURL: string = this.url + "api/EliminarAsignatura";
    return this.http.post(
      apiURL,
      data
    );
  }

  adicionarAsignatura(asignatura: AsignaturaModel): Observable<any> {
    let data = {
      ...asignatura
    }

    let apiURL: string = this.url + "api/CrearAsignatura";
    return this.http.post(
      apiURL,
      data
    );
  }
}
