import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'https://backend2025-u9yl.onrender.com';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  // Obtener todos los registros
  getAll(): Observable<any> {
    return this.http.get(API_URL);
  }

  // Crear un nuevo registro
  create(person: any): Observable<any> {
    return this.http.post(API_URL, person);
  }

  // Actualizar un registro
  update(id: string, person: any): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, person);
  }

  // Eliminar un registro
  delete(id: string): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }
}
