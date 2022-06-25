import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/Interfaces/Trainer';
import { TrainerService } from 'src/app/services/trainer.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-trainer',
  templateUrl: './edit-trainer.component.html',
  styleUrls: ['./edit-trainer.component.css'],
})
export class EditTrainerComponent implements OnInit {
  trainer!: FormGroup;

  constructor(private trainerService: TrainerService, private router: Router) {}

  ngOnInit(): void {
    this.getTrainer();
  }

  getTrainer(): void {
    const trainerFound = JSON.parse(this.trainerService.get());

    if (trainerFound === null) {
      alert("You don't have a trainer profile, please register");
      this.router.navigate(['/trainer/register']);
    }
    this.trainer = new FormGroup({
      name: new FormControl(trainerFound.name),
      age: new FormControl(trainerFound.age),
      favoritePokemon: new FormControl(trainerFound.favoritePokemon),
      pokemonsAmount: new FormControl(trainerFound.pokemonsAmount),
    });
  }
  storeTrainer(): void {
    this.trainerService.set(this.trainer.value);
    alert('Trainer profile saved!');
    this.router.navigate(['/trainer']);
  }
}
