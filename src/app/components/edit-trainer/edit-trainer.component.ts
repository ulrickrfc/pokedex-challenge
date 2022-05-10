import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/Interfaces/Trainer';
import { TrainerService } from 'src/app/services/trainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-trainer',
  templateUrl: './edit-trainer.component.html',
  styleUrls: ['./edit-trainer.component.css'],
})
export class EditTrainerComponent implements OnInit {
  constructor(private trainerService: TrainerService, private router: Router) {}

  ngOnInit(): void {
    this.getTrainer();
  }
  registered!: boolean;
  trainer: Trainer = {
    name: '',
    age: 0,
    favoritePokemon: '',
    pokemonsAmount: 0,
  };
  getTrainer(): void {
    this.trainer = JSON.parse(this.trainerService.get());
    if (this.trainer === null) {
      alert("You don't have a trainer profile, please register");
      this.router.navigate(['/trainer/register']);
    }
    this.trainer === null
      ? (this.registered = false)
      : (this.registered = true);
  }
  storeTrainer(): void {
    this.trainerService.set(this.trainer);
    alert('Trainer profile saved!');
    this.router.navigate(['/trainer']);
  }
}
