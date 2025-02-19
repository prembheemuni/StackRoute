// Adaptor allows you to create a compatible version to a legacy system
// Example
// There is Legacy Payment System, there is a Ecommerce system, we will create an Adaptor where ecom will talk with adaptor

class LegacyPaymentSystem {
  public makePayment(amountInCents: number, customerId) {
    return `Payment recorded for ${customerId} with ${amountInCents} cents`;
  }
}

interface ModernPaymentGateway {
  makePaymentInDollers(
    amountInDollers: number,
    customerId: string
  ): Promise<string>;
}

class AdapterLegacyPayment implements ModernPaymentGateway {
  private legacyPaymentSystem: LegacyPaymentSystem;

  constructor(legacyPaymentSystem: LegacyPaymentSystem) {
    this.legacyPaymentSystem = legacyPaymentSystem;
  }
  public async makePaymentInDollers(
    amountInDollers: number,
    customerId: string
  ): Promise<string> {
    const result = this.legacyPaymentSystem.makePayment(
      amountInDollers * 100,
      customerId
    );

    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(result);
      }, 2000);
    });
  }
}

class Ecommerce {
  private adapterLegacyPayment: AdapterLegacyPayment;
  constructor(adapterLegacyPayment: AdapterLegacyPayment) {
    this.adapterLegacyPayment = adapterLegacyPayment;
  }

  checkout(amountInDollers: number, customerId: string) {
    return this.adapterLegacyPayment.makePaymentInDollers(
      amountInDollers,
      customerId
    );
  }
}

const legacyPaymentSystem = new LegacyPaymentSystem();
const adapterLegacyPayment = new AdapterLegacyPayment(legacyPaymentSystem);
const eccomerce = new Ecommerce(adapterLegacyPayment);

eccomerce
  .checkout(7, "CUSTOMER1")
  .then((res) => {
    console.log(res);
  })
  .catch(() => {
    console.log("error");
  });
