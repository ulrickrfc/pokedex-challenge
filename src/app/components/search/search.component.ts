import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { PokemonSearched, PokemonToSearch } from 'src/app/Interfaces/Pokemon';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() toggleModal: EventEmitter<any> = new EventEmitter();

  pokemonToSearch!: FormGroup;
  loading = false;

  pokemonFound: PokemonSearched = {
    forms: [
      {
        name: '',
        url: '',
      },
    ],
  };
  error = false;

  constructor(private pokemonService: PokemonsService) {}

  ngOnInit(): void {
    this.pokemonToSearch = new FormGroup({
      name: new FormControl(''),
    });
  }

  handleClick(): void {
    //especificar nome *openModal*
    this.toggleModal.emit();
  }
  getPokemonId(url: string): string {
    const link = url.split('/');
    const id = link[link.length - 2];
    return id;
  }
  createForm(pokemonToSearch: PokemonToSearch) {
    this.pokemonToSearch = new FormGroup({
      name: new FormControl(pokemonToSearch.name),
    });
  }
  searchPokemon() {
    if (this.pokemonToSearch.value.name === '') {
      return;
    }
    this.loading = true;
    this.pokemonService
      .findOne(this.pokemonToSearch.value.name.toLocaleLowerCase())
      .subscribe(
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
