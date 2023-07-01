// import { test, expect } from '@playwright/test';
import { test, expect } from '@playwright/experimental-ct-react';
import InputSearch from "./input/InputSearch";

const cityLocator = '["Введите город..."]';
const cityName = 'Анапа';

// test('cityField accepts text input', async ({ mount }) => {
//     const cityComponent = await mount(<InputSearch /> );
//     const cityField = cityComponent.locator(cityLocator)
//
//     await cityField.fill(cityName)
//
//     await expect(cityField).toHaveValue(cityName)
// });

test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const cityComponent = await mount(<InputSearch /> );
    await page.getByPlaceholder('Введите город...').click();
    await page.getByPlaceholder('Введите город...').fill(cityName);
    await page.getByRole('button', { name: 'Search' }).click();
    const cityField = cityComponent.locator(cityLocator)
    await cityField.fill(cityName)
    await expect(cityField).toHaveValue(cityName)
});