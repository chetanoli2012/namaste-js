const cart = ["shoes", "pants", "kurta"];

const api = {
  createOder: () => {},
  proceedToPayment: () => {},
  showOrderSummay: () => {},
  updateWallet: () => {},
};

// The apis need to be executed in this order
// api.createOder();
// api.proceedToPayment();
// api.showOrderSummay();

api.createOder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummay(function () {
      api.updateWallet();
    });
  });
});

// Too many apis to be called in order creates callback hell

// INVERSION OF CONTROL - We lost control over our code using too many callbacks

api.createOder(cart, function () {
  api.proceedToPayment();
  // Here we are giving the control of proceedToPayment to createOrder API
});
