import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/Interfaces/Trainer';

@Component({
  selector: 'app-register-trainer',
  templateUrl: './register-trainer.component.html',
  styleUrls: ['./register-trainer.component.css'],
})
export class RegisterTrainerComponent implements OnInit {
  trainer: Trainer = {
    name: '',
    age: 0,
    favoritePokemon: '',
    pokemonsAmount: 0,
  };

  constructor(private trainerService: TrainerService, private router: Router) {}

  ngOnInit(): void {}

  storeTrainer(): void {
    this.trainerService.set(this.trainer);
    alert('Trainer profile saved!');
    this.router.navigate(['/trainer']);
  }
  removeTrainer(): void {
    this.trainerService.remove();
  }
}
