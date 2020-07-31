import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private bankPayButton: ElementFinder;

  constructor () {
    this.bankPayButton = $('a.bankwire');
  }

  public async goToBankPaymentPage(): Promise<void> {
    await this.bankPayButton.click();
  }
}
