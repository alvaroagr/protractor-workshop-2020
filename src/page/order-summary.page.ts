import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private confirmationText: ElementFinder;

  constructor() {
    this.confirmationText = $('#center_column > div > p > strong');
  }

  public async confirmOrder(): Promise<void> {
    await expect(this.confirmationText.getText())
      .toBe('Your order on My Store is complete.');
  }
}
