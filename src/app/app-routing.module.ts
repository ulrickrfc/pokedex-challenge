import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { RegisterTrainerComponent } from './components/register-trainer/register-trainer.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { EditTrainerComponent } from './components/edit-trainer/edit-trainer.component';
const routes: Routes = [
  { path: '', component: PokemonsListComponent },
  { path: 'trainer', component: TrainerComponent },
  { path: 'trainer/register', component: RegisterTrainerComponent },
  { path: 'trainer/edit', component: EditTrainerComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
