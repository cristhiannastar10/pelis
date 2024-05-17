import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from './info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http:HttpClient) {}

  obtenerInfo():Observable<Info[]>{
    return this.http.get<Info[]>('http://127.0.0.1:8000/myApp/readInfo'); //CAMBIAR ENLACE
  }


}
