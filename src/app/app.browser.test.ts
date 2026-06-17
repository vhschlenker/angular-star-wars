import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-angular';
import { App } from './app';
import { Character } from './character';

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

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

test('query elements', async () => {
  const screen = await render(App, { providers: { } });
  await expect.element(screen.getByText('character works!')).toBeVisible();
});
