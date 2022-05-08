import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  modalOpen: boolean = false;

  toggleModal(): void {
    this.modalOpen = !this.modalOpen;
  }
}
