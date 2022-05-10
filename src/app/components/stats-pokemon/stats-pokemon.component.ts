import { Component, OnInit, Input } from '@angular/core';
import { Stat } from 'src/app/Interfaces/Pokemon';

@Component({
  selector: 'app-stats-pokemon',
  templateUrl: './stats-pokemon.component.html',
  styleUrls: ['./stats-pokemon.component.css'],
})
export class StatsPokemonComponent implements OnInit {
  @Input() stats: Stat[] = [];

  constructor() {}

  ngOnInit(): void {}

  fixString(string: string): string {
    const fixed = string.charAt(0).toUpperCase() + string.slice(1);

    return fixed.replace('-', ' ');
  }
  fixLineStats(value: string, statName: string) {
    if (statName === 'hp') {
      return (100 * Number(value)) / 255;//colocar como constantes
    } else if (statName === 'attack') {
      return (100 * Number(value)) / 190;
    } else if (statName === 'defense' || statName === 'special-defense') {
      return (100 * Number(value)) / 230;
    } else if (statName === 'special-attack') {
      return (100 * Number(value)) / 194;
    } else if (statName === 'speed') {
      return (100 * Number(value)) / 180;
    }

    return 0;
  }
}
