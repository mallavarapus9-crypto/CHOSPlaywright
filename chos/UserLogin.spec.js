import { test, expect } from '@playwright/test';

test('Verify Login URL for CHOS', async ({ page }) => {

  await page.goto('https://clhsaastest.cleanharbors.com/')
  await page.locator("//input[@placeholder='Type here']").fill ('sudheer.mallavarapu@cleanharbors.com')
  await page.locator("//input[@value='Continue']").click()

})
