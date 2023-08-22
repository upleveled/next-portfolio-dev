import { expect, test } from '@playwright/test';

test('Navigate and check content', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('intro')).toBeVisible();
  await expect(page.getByTestId('projects')).toBeVisible();
  await expect(page.getByTestId('skills')).toBeVisible();

  await page.getByRole('link', { name: 'About' }).click();
  await page.waitForURL('/#about');

  await page.getByRole('link', { name: 'Projects' }).click();
  await page.waitForURL('/#projects');

  await page.getByRole('link', { name: 'Contact' }).click();
  await page.waitForURL('/#contact');
});
