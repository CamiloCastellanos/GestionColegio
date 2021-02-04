import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  private url:string ="http://localhost:44309/";

  constructor(private http: HttpClient) { }

  listaAsignatura(): Observable<any> {
    let apiURL: string = this.url + "api/ListaAsignaturas";
    const data = {};
    return this.http.get(
      apiURL
    );
  }
}
