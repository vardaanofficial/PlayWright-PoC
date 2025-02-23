import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // Define reporters; here we add Allure. Extent can be added similarly.
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  use: {
    baseURL: 'https://example-snow-app.com', // Base URL for your SNOW application
  },
  timeout: 30000, // Global test timeout
};

export default config;
