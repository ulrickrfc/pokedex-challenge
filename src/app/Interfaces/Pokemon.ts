export interface PokemonList {
  results: PokemonCard[];
}

export interface PokemonCard {
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: string;
  height: string;
  weight: string;
  forms: [{ name: string }];
  abilities: Abilitie[];
  stats: Stat[];
  moves: Move[];
}

export interface Abilitie {
  name: string;
}

export interface Stat {
  name: string;
  values: string;
}
export interface Move {
  name: string;
}

export interface PokemonSearched {
  forms: [
    {
      name: string;
      url: string;
    }
  ];
}
