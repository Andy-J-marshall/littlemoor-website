import { test, expect } from '@playwright/test';

const clubName = 'Littlemoor Sports and Social Club';

test.describe('Each page loads', () => {
    test('Home', async ({ page }) => {
        await page.goto('');

        await expect(page).toHaveTitle(`${clubName}`);
        await expect(page.locator('#home-page')).toBeVisible();
        await expect(page.locator('#navbar')).toBeVisible();
        await expect(page.locator('#header')).toBeVisible();
        await expect(page.locator('#footer')).toBeVisible();
        await expect(page.locator('#carousel')).toBeVisible();
        await expect(page.locator('#news')).toBeVisible();
    });

    test('membership', async ({ page }) => {
        await page.goto('#/membership');

        await expect(page.locator('#membership-page')).toBeVisible();
        await expect(page.locator('#navbar')).toBeVisible();
        await expect(page.locator('#footer')).toBeVisible();
    });

    test('Team info', async ({ page }) => {
        await page.goto('#/teams');

        await expect(page.locator('#team-info-page')).toBeVisible();
        await expect(page.locator('#navbar')).toBeVisible();
        await expect(page.locator('#footer')).toBeVisible();
    });

    test('Contact', async ({ page }) => {
        await page.goto('#/contact');

        await expect(page.locator('#contact-page')).toBeVisible();
        await expect(page.locator('#navbar')).toBeVisible();
        await expect(page.locator('#footer')).toBeVisible();
    });
});
