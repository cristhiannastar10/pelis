import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}

  obtenerInfo():Observable<User[]>{
    return this.http.get<User[]>('http://127.0.0.1:8000/myApp/listar_vehiculos'); //CAMBIAR ENLACE
  }

  
}
