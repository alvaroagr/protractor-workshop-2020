import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private confirmationText: ElementFinder;

  constructor() {
    this.confirmationText = $('p.cheque-indent > strong');
  }

  public getOrderText() {
    return this.confirmationText.getText();
  }
}
