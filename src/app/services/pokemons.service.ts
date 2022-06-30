import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonList, PokemonSearched } from '../Interfaces/Pokemon';
@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private apiUrl = 'https://pokeapi.co/api/v2/';
  private limit = 16;
  constructor(private http: HttpClient) {}

  getAll(): Observable<PokemonList> {
    return this.http.get<PokemonList>(
      this.apiUrl + `pokemon/?offset=20&limit=${this.limit}`
    );
  }
  getOne(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'pokemon/' + id);
  }
  findOne(name: string): Observable<PokemonSearched> {
    return this.http.get<PokemonSearched>(this.apiUrl + 'pokemon/' + name);
  }

  getMorePokemons(): void {
    this.limit += 12;
  }

  getPokemonSpecies(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'pokemon-species/' + id);
  }
  resetPokemonsListLimit(): void {
    this.limit = 16;
  }
}
