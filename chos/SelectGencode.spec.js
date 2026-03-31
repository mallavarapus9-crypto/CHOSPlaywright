import { test, expect } from '@playwright/test';

test('Verify Change Location button exists in the CHOS application', async ({ page }) => {

//Script to check Change Location button exists in the CHOS application
  await page.goto('https://clhsaastest.cleanharbors.com/')
   await page.locator("//input[@placeholder='Type here']").fill ('sudheer.mallavarapu@cleanharbors.com')
   await page.locator("//input[@value='Continue']").click()
  await page.locator("(//div[@class='generatorinfowrapper']//div)[1]").click()
  await page.locator("(//input[@class='form-control'])[1]").click()});
  await page.locator("(//input[@class='form-control'])[1]").fill ('3M0022')
await page.locator(("//input[@value='3M0022'])[2]")).click()
await page.locator(("////button[text()='Apply & Continue']")).click()

