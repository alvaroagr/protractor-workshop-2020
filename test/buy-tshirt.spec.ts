import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage,
  SummaryStepPage, SignInStepPage, AddressStepPage, ShippingStepPage,
  PaymentStepPage, BankPaymentPage, OrderSummaryPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');

    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(5000));

    await productListPage.goToAddToCart();
    await(browser.sleep(5000));

    await productAddedModalPage.goToCheckoutButton();
    await(browser.sleep(5000));

    await summaryStepPage.goToCheckoutSignIn();
    await(browser.sleep(5000));

    await signInStepPage.fillEmailForm();
    await(browser.sleep(5000));

    await addressStepPage.goToShippingPage();
    await(browser.sleep(5000));

    await shippingStepPage.goToPaymentPage();
    await(browser.sleep(5000));

    await paymentStepPage.goToBankPaymentPage();
    await(browser.sleep(5000));

    await bankPaymentPage.confirmOrder();
    await(browser.sleep(5000));

    await expect(orderSummaryPage.getOrderText()).toBe('Your order on My Store is complete.');
  });
});
