import { Component } from '@angular/core';
import { modalAnimation } from './components/search/search.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [modalAnimation],
})
export class AppComponent {
  modalOpen: boolean = false;

  toggleModal(): void {
    this.modalOpen = !this.modalOpen;
  }
}
