import { test, expect } from '@playwright/test';
import { fillAndSubmitForm, validFormDataCyrillic } from '../../data/formData.js';

test.describe('Positive form tests', () => {
    let output;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://purple-flower-0f53a561e.2.azurestaticapps.net/');
        output = page.locator('#output');
    });

    test('form submission with valid data', async ({ page }) => {
        await fillAndSubmitForm(page);
        await expect(output).toContainText('Saved');
        await expect(output).toContainText('- firstName: Test');
        await expect(output).toContainText('- lastName: User');
        await expect(output).toContainText('- email: TestUser@gmail.com');
        await expect(output).toContainText('- phone1: 1231112233');
        await expect(output).toContainText('- phone2: 1231112233');
        await expect(output).toContainText('- addressLine1: Test street 123');
        await expect(output).toContainText('- addressLine2:');
        await expect(output).toContainText('- city: Calgary');
        await expect(output).toContainText('- province: AB');
        await expect(output).toContainText('- postalCode: T3H4W8');
    });

    test('form submission with Cyrillic first and last name', async ({ page }) => {
        await fillAndSubmitForm(page, validFormDataCyrillic);
        await expect(output).toContainText('Saved');
        await expect(output).toContainText('- firstName: Тест');
        await expect(output).toContainText('- lastName: Тест');
        await expect(output).toContainText('- email: TestUser@gmail.com');
        await expect(output).toContainText('- phone1: 1231112233');
        await expect(output).toContainText('- phone2: 1231112233');
        await expect(output).toContainText('- addressLine1: Test street 123');
        await expect(output).toContainText('- addressLine2:');
        await expect(output).toContainText('- city: Calgary');
        await expect(output).toContainText('- province: AB');
        await expect(output).toContainText('- postalCode: T3H4W8');

    });
})
