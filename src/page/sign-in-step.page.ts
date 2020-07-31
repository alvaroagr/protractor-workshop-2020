import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private signInButton: ElementFinder;
  private emailField: ElementFinder;
  private passwordField: ElementFinder;

  constructor () {
    this.signInButton = $('#SubmitLogin');
    this.emailField = $('#email');
    this.passwordField = $('#passwd');
  }

  public async fillEmailForm(email: string, passwd: string): Promise<void> {
    await this.emailField.sendKeys(email);
    await this.passwordField.sendKeys(passwd);
    await this.signInButton.click();
  }
}
