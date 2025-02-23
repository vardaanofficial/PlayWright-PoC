
import { Page } from '@playwright/test';

export async function waitForDynamicPageLoad(page: Page, selector?: string, timeout: number = 30000): Promise<void> {
  await page.waitForLoadState('networkidle', { timeout });

  if (selector) {
    await page.waitForSelector(selector, { state: 'visible', timeout });
  }
}
