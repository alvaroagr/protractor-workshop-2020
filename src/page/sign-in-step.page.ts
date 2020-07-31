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

  public async fillEmailForm(): Promise<void> {
    await this.emailField.sendKeys('aperdomobo@gmail.com');
    await this.passwordField.sendKeys('WorkshopProtractor');
    await this.signInButton.click();
  }
}
