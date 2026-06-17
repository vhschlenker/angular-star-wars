import { Component, computed, inject, signal } from '@angular/core';
import { SelectionComponent } from './selection-component/selection-component';
import { TableComponent } from './table-component/table-component';
import { Character } from './character';
import { StarWarsService } from './star-wars-service';

@Component({
  selector: 'app-root',
  imports: [SelectionComponent, TableComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  starWarsService = inject(StarWarsService);

  data = signal<Character[]>([]);

  filterTerm = signal('');

  dataForTable = computed(() => {
      const term = this.filterTerm().toLowerCase();
      return this.data().filter((i) => i.hair_color.toLowerCase().includes(term));
    });

  setData() {
    this.starWarsService.getCharacters().subscribe((data) => {
      this.data.set(data);
    })
  }

  protected filter(hairColor: string) {
    this.filterTerm.set(hairColor);
  }
}
