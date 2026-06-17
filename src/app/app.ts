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

  dataFromService = signal<Character[]>([]);

  hairColoFilterValue = signal('');
  nameFilterValue = signal('');

  dataForTable = computed(() => {
    const currentHairFilterValue = this.hairColoFilterValue().toLowerCase();
    const currentNameFilterValue = this.nameFilterValue().toLowerCase();
    return this.dataFromService().filter(
      (i) =>
        i.hair_color.toLowerCase().includes(currentHairFilterValue) &&
        i.name.toLowerCase().includes(currentNameFilterValue),
    );
  });

  setData() {
    this.starWarsService.getCharacters().subscribe((data) => {
      this.dataFromService.set(data);
    });
  }

  protected filterByHairColor(hairColor: string) {
    this.hairColoFilterValue.set(hairColor);
  }

  protected filterByName(name: string) {
    this.nameFilterValue.set(name);
  }
}
