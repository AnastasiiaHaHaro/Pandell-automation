import { test, expect } from '@playwright/test';
import { fillAndSubmitForm, spacePostalCode, invalidEmail } from '../../data/formData.js';

test.describe('Negative form tests', () => {
    let output;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://purple-flower-0f53a561e.2.azurestaticapps.net/');
        output = page.locator('#output');
    });


    test('form displays error for postal code with space', async ({ page }) => {
        await fillAndSubmitForm(page, spacePostalCode);
        await expect(output).toContainText('Validation failed');
        await expect(output).toContainText('- postalCode : Please enter a valid Canadian postal code.')
    });

    test('form displays error for invalid email', async ({ page }) => {
        await fillAndSubmitForm(page, invalidEmail);
        await expect(output).toContainText('Validation failed');
        await expect(output).toContainText('- email : Please enter proper email')
    });

})

