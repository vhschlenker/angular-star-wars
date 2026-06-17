import { Component, input } from '@angular/core';
import { Character } from '../../character';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table-component',
  imports: [RouterLink],
  templateUrl: './table-component.html',
  styleUrl: './table-component.css',
})
export class TableComponent {
  data = input.required<Character[]>();

  getId(character: Character) {
    return character.url.slice(character.url.lastIndexOf('/') + 1);
  }
}
