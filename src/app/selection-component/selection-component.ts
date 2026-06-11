import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-selection-component',
  imports: [],
  templateUrl: './selection-component.html',
  styleUrl: './selection-component.css',
})
export class SelectionComponent {
  fetch = output()
  filter = output<string>()

  protected onSelect($event: Event) {
    this.filter.emit(($event.target as HTMLSelectElement).value)
  }

  protected fetchData() {
    this.fetch.emit()
  }
}
