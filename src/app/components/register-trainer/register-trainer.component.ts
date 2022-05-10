import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-trainer',
  templateUrl: './register-trainer.component.html',
  styleUrls: ['./register-trainer.component.css'],
})
export class RegisterTrainerComponent implements OnInit {
  name = '';
  age = '';
  favoritePokemon = '';
  pokemonsAmount = '';

  constructor(private trainerService: TrainerService, private router: Router) {}

  ngOnInit(): void {}

  storeTrainer(): void {
    this.trainerService.set(
      JSON.stringify({
        name: this.name,
        age: this.age,
        favoritePokemon: this.favoritePokemon,
        pokemonsAmount: this.pokemonsAmount,
      })
    );
    alert('Trainer profile saved!');
    this.router.navigate(['/trainer']);
  }
  removeTrainer(): void {
    this.trainerService.remove();
  }
}
