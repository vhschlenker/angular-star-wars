import { Component, signal } from '@angular/core';
import { Character } from "./character/character";

@Component({
  selector: 'app-root',
  imports: [Character],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-star-wars');
}
