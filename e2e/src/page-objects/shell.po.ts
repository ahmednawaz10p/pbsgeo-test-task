import { browser, element, by } from 'protractor';

export class ShellPage {
  welcomeText = element(by.css('app-root h1'));

  getParagraphText() {
    return this.welcomeText.getText();
  }
}
