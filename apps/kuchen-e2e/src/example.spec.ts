import { test, expect } from '@playwright/test';

test('loads game and starts in PlaceholderScene', async ({ page }) => {
  await page.goto('/');

  await page.waitForFunction(() => !!(window as any).__kuchen);
  const scene = await page.evaluate(() => (window as any).__kuchen?.getSceneKey());
  expect(scene).toBe('PlaceholderScene');
});
