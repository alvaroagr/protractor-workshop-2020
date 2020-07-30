import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private bankPayButton: ElementFinder;

  constructor () {
    this.bankPayButton = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async goToBankPaymentPage(): Promise<void> {
    await this.bankPayButton.click();
  }
}
