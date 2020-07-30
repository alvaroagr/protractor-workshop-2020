import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage {
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async goToCheckoutButton(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.checkoutButton), 4000);
    await this.checkoutButton.click();
  }
}
