import { ElementFinder, element, by } from 'protractor';

export class BankPaymentPage {
  private confirmButton: ElementFinder;

  constructor () {
    this.confirmButton = element(by.cssContainingText('span', 'I confirm my order'));
  }

  public async confirmOrder(): Promise<void> {
    await this.confirmButton.click();
  }
}
