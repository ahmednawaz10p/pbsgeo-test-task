import { browser, element, by } from 'protractor';

export class LoginPage {
  usernameField = element(by.css('input[formControlName="username"]'));
  passwordField = element(by.css('input[formControlName="password"]'));
  loginButton = element(by.css('button[type="submit"]'));

  async login() {
    await this.usernameField.sendKeys('test');
    await this.passwordField.sendKeys('123');
    await this.loginButton.click();
  }
}
