
import { Page } from '@playwright/test';

export async function waitForAjaxCall(page: Page, urlFragment: string, timeout: number = 10000): Promise<void> {
  await page.waitForResponse(response =>
    response.url().includes(urlFragment) && response.status() === 200, { timeout }
  );
}
