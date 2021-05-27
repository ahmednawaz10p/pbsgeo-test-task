import { browser, element, by } from 'protractor';

export class AppSharedPage {
  async navigateAndSetLanguage() {
    // Forces default language
    await this.navigateTo();
    await browser.executeScript(() => localStorage.setItem('language', 'en-US'));
  }

  async navigateTo() {
    await browser.get('/');
  }
}
