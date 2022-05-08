import { Pokemon } from './Pokemon';
export interface PokemonCall {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}
