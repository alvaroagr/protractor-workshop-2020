import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage,
  SummaryStepPage, SignInStepPage, AddressStepPage, ShippingStepPage,
  PaymentStepPage, BankPaymentPage, OrderSummaryPage } from '../src/page';

describe('Open website', () => {
  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('Select T-shirts on menu', () => {
    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      await menuContentPage.goToTShirtMenu();
    });

    describe('Add product to cart', () => {
      beforeAll(async () => {
        const productListPage: ProductListPage = new ProductListPage();
        await productListPage.selectProduct('Faded Short Sleeve T-shirts');
      });

      describe('Go to checkout', () => {
        beforeAll(async () => {
          const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
          await productAddedModalPage.goToCheckoutButton();

        });

        describe('Go to sign in page', () => {
          beforeAll(async () => {
            const summaryStepPage: SummaryStepPage = new SummaryStepPage();
            await summaryStepPage.goToCheckoutSignIn();
          });

          describe('Fill user form, go to the address page', () => {
            beforeAll(async () => {
              const signInStepPage: SignInStepPage = new SignInStepPage();
              await signInStepPage.fillEmailForm('aperdomobo@gmail.com', 'WorkshopProtractor');
            });

            describe('Go to shipping page', () => {
              beforeAll(async () => {
                const addressStepPage: AddressStepPage = new AddressStepPage();
                await addressStepPage.goToShippingPage();
              });

              describe('Go to payment page', () => {
                beforeAll(async () => {
                  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
                  await shippingStepPage.goToPaymentPage();
                });

                describe('Select bank payment', () => {
                  beforeAll(async () => {
                    const paymentStepPage: PaymentStepPage = new PaymentStepPage();
                    await paymentStepPage.goToBankPaymentPage();
                  });

                  describe('Confirm order', () => {
                    beforeAll(async () => {
                      const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
                      await bankPaymentPage.confirmOrder();
                    });

                    const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
                    it('then should have bought a t-shirt', async () => {
                      await expect(orderSummaryPage.getOrderText()).toBe('Your order on My Store is complete.');
                    });

                  });

                });

              });

            });

          });

        });

      });

    });

  });

});
