import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/Interfaces/Trainer';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-trainer',
  templateUrl: './register-trainer.component.html',
  styleUrls: ['./register-trainer.component.css'],
})
export class RegisterTrainerComponent implements OnInit {
  formTrainer!: FormGroup;

  constructor(private trainerService: TrainerService, private router: Router) {}

  ngOnInit(): void {
    this.checkRegister();
    this.formTrainer = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
      favoritePokemon: new FormControl(''),
      pokemonsAmount: new FormControl(''),
    });
  }

  checkRegister(): void {
    const trainer = JSON.parse(this.trainerService.get());
    if (trainer !== null) {
      alert('You already have a register');
      this.router.navigate(['/trainer']);
    }
  }

  storeTrainer(): void {
    this.trainerService.set(this.formTrainer.value);
    alert('Trainer profile saved!');
    this.router.navigate(['/trainer']);
  }
  removeTrainer(): void {
    this.trainerService.remove();
  }

  createForm(trainer: Trainer) {
    this.formTrainer = new FormGroup({
      name: new FormControl(trainer.name),
      age: new FormControl(trainer.age),
      favoritePokemon: new FormControl(trainer.favoritePokemon),
      pokemonsAmount: new FormControl(trainer.pokemonsAmount),
    });
  }
}
