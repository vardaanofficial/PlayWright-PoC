// dynamicWait.ts

import { Page } from '@playwright/test';

/**
 * Waits dynamically for the page to fully load.
 *
 * The function performs two steps:
 * 1. Waits for the network to be idle, indicating that most asynchronous operations have completed.
 * 2. Optionally waits for a specific element to be visible on the page, ensuring that the UI is fully rendered.
 *
 * @param page - The Playwright Page instance.
 * @param selector - (Optional) CSS selector of an element expected to be visible once the page is loaded.
 * @param timeout - (Optional) Maximum time to wait for each step in milliseconds (default is 30,000 ms).
 */
export async function waitForDynamicPageLoad(page: Page, selector?: string, timeout: number = 30000): Promise<void> {
  // Wait for the network to become idle
  await page.waitForLoadState('networkidle', { timeout });

  // If a selector is provided, wait until that element is visible
  if (selector) {
    await page.waitForSelector(selector, { state: 'visible', timeout });
  }
}
