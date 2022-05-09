import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css'],
})
export class TrainerComponent implements OnInit {
  name = '';
  age = '';
  favoritePokemon = '';
  pokemonsAmount = '';

  trainer: any = {};

  classes: any = [];

  constructor(private trainerService: TrainerService) {}

  ngOnInit(): void {
    this.getTrainer();
  }
  storeTrainer(): void {
    this.trainerService.set(
      JSON.stringify({
        name: this.name,
        age: this.age,
        favoritePokemon: this.favoritePokemon,
        pokemonsAmount: this.pokemonsAmount,
      })
    );
  }
  getTrainer(): void {
    this.trainer = JSON.parse(this.trainerService.get());
    console.log(this.trainer === null);
    this.trainer === null ? (this.classes = []) : (this.classes = ['hide']);
  }
  removeTrainer(): void {
    this.trainerService.remove();
  }
}
