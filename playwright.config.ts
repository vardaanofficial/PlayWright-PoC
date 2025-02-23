// playwright.config.ts

import type { PlaywrightTestConfig } from '@playwright/test';

/**
 * Playwright configuration file.
 *
 * This configuration demonstrates how to set up test reporting using both the default list reporter and the Allure reporter.
 * The Allure reporter generates detailed, visually appealing test reports that include step-by-step logs, screenshots, and attachments.
 *
 * If you need to integrate Extent Reports, you can add a custom reporter configuration in a similar fashion.
 */
const config: PlaywrightTestConfig = {
  timeout: 30000, // Global test timeout
  reporter: [
    // Default reporter for console output
    ['list'],
    // Allure reporter configuration
    ['allure-playwright', {
      detail: true,                // Show detailed test steps in the report
      outputFolder: 'allure-results', // Folder where the report results will be saved
      suiteTitle: false            // Use test file name as suite title
    }]
  ],
  use: {
    baseURL: 'https://example-snow-app.com', // Replace with your application's base URL
    headless: true,                          // Run tests in headless mode
    // Other global options can be added here
  },
};

export default config;
