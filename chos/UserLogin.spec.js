import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'node:dns';

test('Verify Login URL for CHOS', async ({ page }) => {

  await page.goto('https://clhsaastest.cleanharbors.com/')
  await page.locator("//input[@placeholder='Type here']").fill ('process.env.APP_USERNAME')
  await page.locator("//input[@value='Continue']").click()
  //await expect(page).toHaveURL('https://clhsaastest.cleanharbors.com/home', { timeout: 10000 });
  //await expect(page.locator(':text("Welcome to Clean Harbors Online Services")')).toBeVisible()
})

test('Verify Inavlid Login URL for CHOS', async ({ page }) => {

  await page.goto('https://clhsaastest.cleanharbors.com/')
  await page.locator("//input[@placeholder='Type here']").fill ('process.env.APP_USERNAME')
  await page.locator("//input[@value='Continue']").click()

})