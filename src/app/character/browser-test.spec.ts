import { test, expect } from 'vitest';
import { render } from 'vitest-browser-angular';
import { Character } from './character';
import { userEvent } from 'vitest/browser';

beforeEach(() => {
    vi.useFakeTimers()
})

afterEach(() => {
    vi.useRealTimers()
})


test('query elements', async () => {
    const screen = await render(Character, {
        inputs: {
            initalName: 'World',
        },
    });
    await expect.element(screen.getByText('character works!')).toBeVisible();
    await screen.getByText('Click me!').click()
    await expect.element(screen.getByText('other name')).toBeVisible();
});
