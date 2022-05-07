import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';

import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', component: PokemonsListComponent },
  { path: 'search', component: SearchComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
