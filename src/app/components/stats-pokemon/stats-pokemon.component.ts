import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stats-pokemon',
  templateUrl: './stats-pokemon.component.html',
  styleUrls: ['./stats-pokemon.component.css'],
})
export class StatsPokemonComponent implements OnInit {
  @Input() stats: any = [];

  constructor() {}

  ngOnInit(): void {}

  fixString(string: string): string {
    const fixed = string.charAt(0).toUpperCase() + string.slice(1);

    return fixed.replace('-', ' ');
  }
}
