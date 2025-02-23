// datetimePicker.ts

import { Page } from '@playwright/test';

/**
 * Selects a date and time using a dateTime picker component.
 *
 * This function performs the following steps:
 * 1. Clicks the input element to open the dateTime picker widget.
 * 2. Waits for the widget to become visible.
 * 3. Fills in the desired date and time value directly into the input field.
 *    (Alternatively, you can simulate UI interactions with calendar elements here.)
 * 4. Presses Enter to finalize the selection.
 * 5. Optionally waits for the widget to disappear.
 *
 * Note: Customize selectors (like widgetSelector) as per your application's DOM structure.
 *
 * @param page - The Playwright Page object.
 * @param pickerSelector - The CSS selector for the dateTime picker input element.
 * @param dateTime - The date and time string in the required format (e.g., '2025-02-23T12:00').
 */
export async function selectDateTime(page: Page, pickerSelector: string, dateTime: string): Promise<void> {
  // Click the input to open the dateTime picker widget.
  await page.click(pickerSelector);

  // Selector for the dateTime picker widget. Update this selector based on your app's implementation.
  const widgetSelector = '.datetime-picker-widget';

  // Wait for the widget to appear.
  await page.waitForSelector(widgetSelector, { state: 'visible', timeout: 5000 });

  // Directly fill in the dateTime value. This works if the input field accepts direct input.
  await page.fill(pickerSelector, dateTime);

  // Alternatively, if you need to simulate user interactions with calendar elements,
  // add the necessary click actions here (e.g., selecting year, month, day, etc.).

  // Finalize the selection, e.g., by pressing Enter.
  await page.press(pickerSelector, 'Enter');

  // Optionally, wait for the widget to disappear after selection.
  await page.waitForSelector(widgetSelector, { state: 'hidden', timeout: 5000 });
}
