import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { SearchComponent } from './components/search/search.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { MatTabsModule } from '@angular/material/tabs';
import { AboutPokemonComponent } from './components/about-pokemon/about-pokemon.component';
import { StatsPokemonComponent } from './components/stats-pokemon/stats-pokemon.component';
import { MovesPokemonComponent } from './components/moves-pokemon/moves-pokemon.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { RegisterTrainerComponent } from './components/register-trainer/register-trainer.component';
import { EditTrainerComponent } from './components/edit-trainer/edit-trainer.component';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    PokemonsListComponent,
    SearchComponent,
    PokemonComponent,
    HeaderComponent,
    AboutPokemonComponent,
    StatsPokemonComponent,
    MovesPokemonComponent,
    TrainerComponent,
    RegisterTrainerComponent,
    EditTrainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
