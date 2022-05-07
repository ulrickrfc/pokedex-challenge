import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private apiUrl = 'https://pokeapi.co/api/v2/';
  private limit = 16;
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(
      this.apiUrl + `pokemon/?offset=20&limit=${this.limit}`
    );
  }
  getOne(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'pokemon/' + id);
  }
  getMorePokemons(): void {
    this.limit += 12;
  }
}
