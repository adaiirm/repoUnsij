import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/autoizacion/login'; // Cambia por tu URL real

  constructor(private http: HttpClient) {}

  login(data: { correo: string; contrasenia: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }
}
