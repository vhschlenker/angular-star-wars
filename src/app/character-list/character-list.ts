import { Component, computed, inject, signal } from '@angular/core';
import { StarWarsService } from '../star-wars-service';
import { Character } from '../character';
import { SelectionComponent } from './selection-component/selection-component';
import { TableComponent } from './table-component/table-component';

@Component({
  selector: 'app-character-list',
  imports: [SelectionComponent, TableComponent],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList {
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
