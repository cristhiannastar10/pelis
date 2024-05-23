import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Production } from './productions';
import { Info } from '../info/info';

@Injectable({
  providedIn: 'root'
})
export class ProductionService{

  constructor(private http:HttpClient) {}

  obtenerProductions():Observable<Production[]>{
    return this.http.get<Production[]>('http://127.0.0.1:8000/myApp/watchProduction'); 
  }

  createProduction(production: Production): Observable<Production>{
    return this.http.post<Production>('http://127.0.0.1:8000/myApp/createProduction', production); 
  }
}
