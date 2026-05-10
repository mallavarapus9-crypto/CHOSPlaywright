import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://clhsaastest.cleanharbors.com/');
  await page.locator("//input[@placeholder='Type here']").fill ('sudheer.mallavarapu@cleanharbors.com')
  await page.getByRole('button', { name: 'Continue' }).click();
 
  await page.getByRole('link', { name: 'Change Location' }).click();
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().pressSequentially("3m0022", {delay: 4000});
  await page.getByRole('radio').check();
  await page.getByRole('button', { name: 'Apply & Continue' }).click();
 // await page.goto('https://clhsaastest.cleanharbors.com/home',{delay:5000});
  await expect(page.getByText('3M Company - 3M0022')).toContainText('3M Company - 3M0022');
});