import { expect, test } from '@playwright/test';

test('should add a new todo and display it in the list', async ({ page }) => {
    // Navigate to your app
    await page.goto('http://localhost:3000');

    // Fill in the form
    await page.fill('input[name="title"]', 'Buy groceries');
    await page.fill('input[name="assignee"]', 'John Doe');

    // Click submit button
    await page.click('input[type="submit"]');

    // Verify the new todo appears in the list
    await expect(page.locator('text=Buy groceries')).toBeVisible();
    await expect(page.locator('text=John Doe')).toBeVisible();
});