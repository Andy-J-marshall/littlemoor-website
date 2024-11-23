import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: 0,
    workers: 4,
    reporter: [['html', { open: 'never' }]],
    outputDir: 'test-results/',
    webServer: {
        command: 'npm run start',
        url: 'http://localhost:5173',
        timeout: 60 * 1000,
        reuseExistingServer: !process.env.CI,
    },
    use: {
        baseURL: process.env.URL ?? 'http://localhost:5173',
        actionTimeout: 0,
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
    ],
};

export default config;
