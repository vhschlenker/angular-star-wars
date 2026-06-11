import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-character',
  imports: [],
  templateUrl: './character.html',
  styleUrl: './character.css',
})
export class Character {
  initalName = input.required<string>();
  name = signal("name")
  isResetEnabled = computed(() => this.name() == "name");

  changeName() {
    this.name.set("other name")
  }

  reset() {
    this.name.set("name")
  }
}
