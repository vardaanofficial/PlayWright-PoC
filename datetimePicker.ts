
import { Page } from '@playwright/test';

export async function selectDateTime(page: Page, pickerSelector: string, dateTime: string): Promise<void> {
  await page.click(pickerSelector);

  const widgetSelector = '.datetime-picker-widget';

  await page.waitForSelector(widgetSelector, { state: 'visible', timeout: 5000 });

  await page.fill(pickerSelector, dateTime);

  await page.press(pickerSelector, 'Enter');

  await page.waitForSelector(widgetSelector, { state: 'hidden', timeout: 5000 });
}
