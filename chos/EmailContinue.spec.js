import { test, expect } from '@playwright/test';

test('Email Entry and Continue - CHOS', async ({ page }) => {
  // Navigate to the application URL
  await page.goto('https://clhsaastest.cleanharbors.com/');
  
  // Enter email address
  await page.locator("//input[@placeholder='Type here']").fill('sudheer.mallavarapu@cleanharbors.com');
  
  // Click on Continue button
  await page.locator("//input[@value='Continue']").click();
});
