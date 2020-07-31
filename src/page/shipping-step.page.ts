import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private tosRadioButton: ElementFinder;
  private checkoutButton: ElementFinder;

  constructor () {
    this.tosRadioButton = $('#cgv');
    this.checkoutButton = $('button[name="processCarrier"]');
  }

  public async goToPaymentPage(): Promise<void> {
    await this.tosRadioButton.click();
    await this.checkoutButton.click();
  }
}
