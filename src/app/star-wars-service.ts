import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './character';

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  private http = inject(HttpClient);

  getCharacters() {
    return this.http.get<Character[]>('https://swapi.info/api/people');
  }
}
