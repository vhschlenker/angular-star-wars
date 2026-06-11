import { Component, input } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-table-component',
  imports: [],
  templateUrl: './table-component.html',
  styleUrl: './table-component.css',
})
export class TableComponent {
  data = input.required<Character[]>();
}
