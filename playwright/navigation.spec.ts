import { expect, test } from '@playwright/test';

test('Can find the different components in the app', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('intro')).toBeVisible();
  await expect(page.getByTestId('projects')).toBeVisible();
  await expect(page.getByTestId('skills')).toBeVisible();
});
