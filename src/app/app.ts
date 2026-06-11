import { Component, computed, signal } from '@angular/core';
import { SelectionComponent } from './selection-component/selection-component';
import { TableComponent } from './table-component/table-component';
import { Character } from './character';

@Component({
  selector: 'app-root',
  imports: [SelectionComponent, TableComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  data: Character[] = [
    {
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
    },
    {
      name: 'Leia Organa',
      height: 150,
      mass: 49,
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: '19BBY',
    },
  ];

  filterTerm = signal('');

  dataForTable = computed(() => {
      const term = this.filterTerm().toLowerCase();
      return this.data.filter((i) => i.hair_color.toLowerCase().includes(term));
    });

  setData() {
    // this.dataForTable.set(this.data);
  }

  protected filter(hairColor: string) {
    this.filterTerm.set(hairColor);
  }
}
