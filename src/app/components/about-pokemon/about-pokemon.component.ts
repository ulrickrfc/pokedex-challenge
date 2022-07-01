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
  pokemonSpecies: any = {
    color: {
      name: '',
    },
  };
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

  formatNumber(number: string): string {
    const formattedNumber = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      maximumFractionDigits: 2,
      minimumFractionDigits: 1,
    }).format(Number(number) / 10);
    return formattedNumber;
  }
}
