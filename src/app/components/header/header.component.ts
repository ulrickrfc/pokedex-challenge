import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleModal: EventEmitter<any> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  handleClick(): void {
    this.toggleModal.emit();
  }
}
