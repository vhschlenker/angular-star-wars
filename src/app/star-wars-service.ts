import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  private http = inject(HttpClient);

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>('https://swapi.info/api/people');
  }
}
