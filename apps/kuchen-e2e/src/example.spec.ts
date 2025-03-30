import { test, expect } from '@playwright/test';

declare global {
  interface Window {
    __kuchen: {
      getSceneKey: () => string;
    };
  }
}

test('loads game and starts in PlaceholderScene', async ({ page }) => {
  await page.goto('/');

  await page.waitForFunction(() => !!window.__kuchen);
  const scene = await page.evaluate(() => window.__kuchen?.getSceneKey());
  expect(scene).toBe('PlaceholderScene');
});
