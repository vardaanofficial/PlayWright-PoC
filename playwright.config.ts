import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 30000, 
  reporter: [
    ['list'],
    ['allure-playwright', {
      detail: true,                
      outputFolder: 'allure-results', 
      suiteTitle: false                }]
  ],
  use: {
    baseURL: 'https://example-snow-app.com', 
    headless: true,                          
  },
};

export default config;
