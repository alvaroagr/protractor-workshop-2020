import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private addToCart: ElementFinder;

  constructor () {
    this.addToCart = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToAddToCart(): Promise<void> {
    await this.addToCart.click();
  }
}
