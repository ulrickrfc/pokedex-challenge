import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { PokemonCard, PokemonList } from 'src/app/Interfaces/Pokemon';
import * as Aos from 'aos';
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
  pokemons: PokemonList = {
    results: [],
  };
  loadingPokemons: boolean = true;
  mostrarPokemons: boolean = true;
  input = '';
  showBackToTop = false;
  classes = ['container', 'font'];

  constructor(private pokemonsService: PokemonsService) {
    this.getPokemons();
  }

  ngOnInit(): void {
    Aos.init({
      once: true,
      duration: 600,
    });
  }

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
    this.loadingPokemons = true;
    this.pokemonsService.getMorePokemons();
    this.loadingPokemons = false;

    this.pokemonsService
      .getAll()
      .subscribe(
        (response) =>
          (this.pokemons.results = [
            ...this.pokemons.results,
            ...response.results.slice(-12),
          ])
      );
  }
  backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    window.scrollY > 50
      ? (this.showBackToTop = true)
      : (this.showBackToTop = false);
  }

  ngOnDestroy() {
    this.pokemonsService.resetPokemonsListLimit();
  }
}
