import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-angular';
import { App } from './app';
import { Character } from './character';
import { StarWarsService } from './star-wars-service';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

const data: Character[] = [
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

class FakeStarWarsService {
  getCharacters(): Observable<Character[]> {
    return new BehaviorSubject(data);
  }
}

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

test('query elements', async () => {
  const screen = await render(App, {
    componentProviders: [{ provide: StarWarsService, useClass: FakeStarWarsService }],
  });
  await screen.getByText("Fetch").click()
  await expect.element(screen.getByText('Leia Organa')).toBeVisible();
});
