import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private apiUrl = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'pokemon/?offset=20&limit=24');
  }
  getOne(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'pokemon/' + id);
  }
}
