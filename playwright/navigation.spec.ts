import { expect, test } from '@playwright/test';

test('Check content', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('intro')).toBeVisible();
  await expect(page.getByTestId('projects')).toBeVisible();
  await expect(page.getByTestId('skills')).toBeVisible();
});
