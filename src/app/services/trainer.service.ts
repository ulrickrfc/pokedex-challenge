import { Injectable } from '@angular/core';
import { Trainer } from '../Interfaces/Trainer';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }
  set(trainer: Trainer) {
    this.storage.setItem('trainer', JSON.stringify(trainer));
  }
  get(): any {
    if (this.storage.getItem('trainer')) {
      return this.storage.getItem('trainer');
    }
    return null;
  }
  remove(): any {
    this.storage.removeItem('trainer');
  }
}
