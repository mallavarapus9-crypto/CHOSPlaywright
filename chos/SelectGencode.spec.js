import { test, expect } from '@playwright/test';

test('Verify Change Location button exists in the CHOS application', async ({ page }) => {

//Script to check Change Location button exists in the CHOS application
  await page.goto('https://clhsaastest.cleanharbors.com/')
   await page.locator("//input[@placeholder='Type here']").fill ('sudheer.mallavarapu@cleanharbors.com')
   await page.locator("//input[@value='Continue']").click()
 // await page.locator("selectedGenCodes").toBeVisible()
  //await page.locator("//div[@class='generatorinfowrapper']//div)[1]").toBeVisible()
  await page.locator("(//div[@class='generatorinfowrapper']//div)[1]").click()});
