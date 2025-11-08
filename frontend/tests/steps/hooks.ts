import { Before, After, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright'; // runtime from 'playwright'
import type { Browser } from 'playwright';
import { CustomWorld } from './world.ts';

setDefaultTimeout(60_000);

let sharedBrowser: Browser | null = null;

Before(async function (this: CustomWorld) {
  if (!sharedBrowser) {
    sharedBrowser = await chromium.launch({ headless: true });
  }
  this.browser = sharedBrowser;
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld) {
  await this.page?.close();
  await this.context?.close();
});

AfterAll(async function () {
  await sharedBrowser?.close();
});
