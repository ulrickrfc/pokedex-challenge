import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }
  set(value: string) {
    this.storage.setItem('trainer', value);
  }
  get(): any {
    if (this.storage) {
      return this.storage.getItem('trainer');
    }
    return null;
  }
  remove(): any {
    this.storage.removeItem('trainer');
  }
}
