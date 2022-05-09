import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/Interfaces/Pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() toggleModal: EventEmitter<any> = new EventEmitter();

  pokemonName = '';
  pokemonFound: any = {
    forms: [
      {
        name: '',
        url: '',
      },
    ],
  };
  constructor(private pokemonService: PokemonsService) {}

  ngOnInit(): void {}

  handleClick(): void {
    this.toggleModal.emit();
  }
  error = false;
  getPokemonId(url: string): string {
    const link = url.split('/');
    const id = link[link.length - 2];
    return id;
  }
  loading = false;
  errorMessage = 'error';

  searchPokemon() {
    if (this.pokemonName === '') {
      return;
    }
    this.loading = true;
    this.pokemonService.findOne(this.pokemonName.toLocaleLowerCase()).subscribe(
      (response) => {
        this.loading = false;
        this.pokemonFound = response;
        this.error = false;
      },
      (error) => {
        this.pokemonFound = {
          forms: [
            {
              name: '',
              url: '',
            },
          ],
        };
        this.loading = false;
        this.error = true;
      }
    );
  }
}
