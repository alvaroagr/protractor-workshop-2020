import { $$, ExpectedConditions, browser, ElementArrayFinder } from 'protractor';

export class ProductListPage {

  private products: ElementArrayFinder;

  constructor() {
    this.products = $$('.product-container');
  }

  private findByProduct(productName: string) {
    return this.products.filter((product) => {
      return product.$('.product-name').getAttribute('title').then((title) => {
        return title === productName;
      });
    }).first();
  }

  public async selectProduct(productName: string): Promise<void> {
    await browser
      .wait(ExpectedConditions.elementToBeClickable(this.findByProduct(productName)), 4000);
    await this.findByProduct(productName)
      .$('a.button.ajax_add_to_cart_button.btn.btn-default').click();
  }
}
