import { setWorldConstructor } from '@cucumber/cucumber';
import type { Browser, BrowserContext, Page } from 'playwright';

export class CustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  baseUrl: string;

  constructor({ parameters }: { parameters?: Record<string, unknown> }) {
    this.baseUrl = (parameters?.baseUrl as string) || 'http://localhost:5173';
  }
}

setWorldConstructor(CustomWorld);
