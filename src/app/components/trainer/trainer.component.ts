import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/Interfaces/Trainer';
import { ToastrService } from 'ngx-toastr';

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

  registered!: boolean;
  trainer!: Trainer;

  constructor(
    private trainerService: TrainerService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getTrainer();
  }

  getTrainer(): void {
    this.trainer = JSON.parse(this.trainerService.get());

    this.trainer === null
      ? (this.registered = false)
      : (this.registered = true);
  }
  removeTrainer(): void {
    this.trainerService.remove();
    this.toastr.success('Trainer profile deleted');
    this.router.navigate(['/']);
  }
}
