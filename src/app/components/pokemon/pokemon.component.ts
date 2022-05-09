import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/Interfaces/Pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  data: any = {};
  constructor(
    private pokemonService: PokemonsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.getPokemon();
    });
  }

  getPokemon() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService
      .getOne(id)
      .subscribe((pokemonData) => (this.data = pokemonData));
  }
}
