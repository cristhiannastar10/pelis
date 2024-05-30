import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://api.tuapi.com/users';  // Asegúrate de cambiar la URL a la correcta

  constructor(private http: HttpClient) {}

  crearUsuario(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}

