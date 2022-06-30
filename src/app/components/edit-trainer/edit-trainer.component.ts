import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/Interfaces/Trainer';
import { TrainerService } from 'src/app/services/trainer.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-trainer',
  templateUrl: './edit-trainer.component.html',
  styleUrls: ['./edit-trainer.component.css'],
})
export class EditTrainerComponent implements OnInit {
  trainer!: FormGroup;

  constructor(
    private trainerService: TrainerService,
    private router: Router,
    private toastr: ToastrService
  ) {}

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
    this.toastr.success('Trainer profile saved!');
    this.router.navigate(['/trainer']);
  }
}
