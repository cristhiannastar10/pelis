import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Production } from './productions';

@Injectable({
  providedIn: 'root'
})
export class ProductionService{

  constructor(private http:HttpClient) {}

  obtenerInfo():Observable<Production[]>{
    return this.http.get<Production[]>('http://127.0.0.1:8000/myApp/watchProduction'); //CAMBIAR ENLACE
  }


}
