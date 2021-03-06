import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('a.standard-checkout');
  }

  public async goToCheckoutSignIn(): Promise<void> {
    await this.checkoutButton.click();
  }
}
