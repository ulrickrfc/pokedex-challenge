import { Component, OnInit, Input } from '@angular/core';
import { Move } from 'src/app/Interfaces/Pokemon';
@Component({
  selector: 'app-moves-pokemon',
  templateUrl: './moves-pokemon.component.html',
  styleUrls: ['./moves-pokemon.component.css'],
})
export class MovesPokemonComponent implements OnInit {
  @Input() moves: Move[] = [];

  constructor() {}

  ngOnInit(): void {}
  fixString(string: string): string {
    const fixed = string.charAt(0).toUpperCase() + string.slice(1);
    return fixed.replace('-', ' ');
  }
}
