import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmButton: ElementFinder;

  constructor () {
    this.confirmButton = $('#cart_navigation > button');
  }

  public async confirmOrder(): Promise<void> {
    await this.confirmButton.click();
  }
}
