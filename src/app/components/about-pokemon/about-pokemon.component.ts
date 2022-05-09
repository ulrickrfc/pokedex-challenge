import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-about-pokemon',
  templateUrl: './about-pokemon.component.html',
  styleUrls: ['./about-pokemon.component.css'],
})
export class AboutPokemonComponent implements OnInit {
  @Input() height = '';
  @Input() weight = '';
  @Input() name = '';
  @Input() abilities: any = [];
  pokemonSpecies: any = {};
  constructor(
    private pokemonService: PokemonsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.getPokemonSpecies();
    });
  }
  getPokemonSpecies() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService
      .getPokemonSpecies(id)
      .subscribe((pokemonData) => (this.pokemonSpecies = pokemonData));
  }
  fixString(string: string): string {
    const fixed = string.charAt(0).toUpperCase() + string.slice(1);
    return fixed.replace('-', ' ');
  }
  // fixValue(value: string): string {
  //   const string = value.split('');
  //   const a = string.join();
  //   return a;
  // }
  formatNumber(number: string): string {
    const formattedNumber = new Intl.NumberFormat('pt-BR', {
      style: 'decimal',
      maximumFractionDigits: 2,
      minimumFractionDigits: 1,
    }).format(Number(number));
    return formattedNumber;
  }
}
