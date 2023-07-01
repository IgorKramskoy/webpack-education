import { test, expect } from '@playwright/test';

const cityName = 'Анапа';

test('input has city name', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('Введите город...').click();
  await page.getByPlaceholder('Введите город...').fill(cityName);
  await page.getByRole('button', { name: 'Search' }).click();
  const input = page.getByPlaceholder('Введите город...')
  await  expect(input).toHaveValue(cityName);
});




