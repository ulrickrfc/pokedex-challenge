import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';

const routes: Routes = [
  { path: '', component: PokemonsListComponent },
  { path: 'trainer', component: TrainerComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
