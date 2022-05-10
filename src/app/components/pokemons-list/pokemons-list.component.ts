import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { PokemonCard, PokemonList } from 'src/app/Interfaces/Pokemon';
@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css'],
})
export class PokemonsListComponent implements OnInit {
  pokemonName = 'Pikachu';

  treinador = {
    name: 'Ash',
    pokeballs: 3,
  };
  numeroDeVitorias = 0;
  classes = ['container', 'font'];

  pokemons: PokemonList = {
    results: [],
  };

  mostrarPokemons: boolean = true;

  input = '';
  constructor(private pokemonsService: PokemonsService) {
    this.getPokemons();
  }

  ngOnInit(): void {}

  getPokemons() {
    this.pokemonsService
      .getAll()
      .subscribe((response) => (this.pokemons.results = response.results));
  }
  getPokemonId(url: string): string {
    const link = url.split('/');
    const id = link[link.length - 2];
    return id;
  }
  addPokemons(): void {
    this.pokemonsService.getMorePokemons();
    this.getPokemons();
  }
}
