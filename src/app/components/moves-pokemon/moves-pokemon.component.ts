import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moves-pokemon',
  templateUrl: './moves-pokemon.component.html',
  styleUrls: ['./moves-pokemon.component.css'],
})
export class MovesPokemonComponent implements OnInit {
  @Input() moves: any = [];

  constructor() {}

  ngOnInit(): void {}
  fixString(string: string): string {
    const fixed = string.charAt(0).toUpperCase() + string.slice(1);
    return fixed.replace('-', ' ');
  }
}
