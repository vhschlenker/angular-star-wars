import { Component, output, signal } from '@angular/core';
import { FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-selection-component',
  imports: [],
  templateUrl: './selection-component.html',
  styleUrl: './selection-component.css',
})
export class SelectionComponent {
  fetch = output();
  selectHairColorFilter = output<string>()
  inputNameFilter = output<string>();
  filterText = output<string>();

  protected onSelect($event: Event) {
    this.selectHairColorFilter.emit(($event.target as HTMLSelectElement).value);
  }

  protected fetchData() {
    this.fetch.emit();
  }

  protected onTextInput($event: Event) {
    const textFilterValue = ($event.target as HTMLInputElement).value;
    this.inputNameFilter.emit(textFilterValue)
  }
}
