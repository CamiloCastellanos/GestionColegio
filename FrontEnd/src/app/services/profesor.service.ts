import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  private url:string ="http://localhost:44309/";

  constructor(private http: HttpClient) { }

  listaProfesor(): Observable<any> {
    let apiURL: string = this.url + "api/ListaProfesores";
    return this.http.get(
      apiURL
    );
  }


}
