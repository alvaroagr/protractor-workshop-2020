import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('#center_column > form > p > button');
  }

  public async goToShippingPage(): Promise<void> {
    await this.checkoutButton.click();
  }
}
