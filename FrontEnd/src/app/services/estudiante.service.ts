import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private url:string ="http://localhost:44309/";

  constructor(private http: HttpClient) { }

  listaEstudiante(): Observable<any> {
    let apiURL: string = this.url + "api/ListaEstudiantes";
    return this.http.get(
      apiURL
    );
  }
}
