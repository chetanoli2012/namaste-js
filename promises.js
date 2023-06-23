const cart = ["shoes", "pants", "kurta"];

const apis = {
  createOrder: () => {},
  proceedToPayment: () => {},
  showOrderSummary: () => {},
  updateWallet: () => {},
};

apis.createOrder(cart); // returns us the order id
apis.proceedToPayment("orderId");

// both are async apis and proceedToPayment is dependent on createOrder

apis.createOrder(cart, function (orderId) {
  apis.proceedToPayment(orderId);
});

// above has inversion of control problem

// const promise = apis.createOrder(cart);

// promise.then(function (orderId) {
//   apis.proceedToPayment(orderId);
// });

// Promise chaining

// apis
//   .createOrder(cart)
//   .then(function (orderId) {
//     return apis.proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     return apis.showOrderSummary(paymentInfo);
//   })
//   .then(function (paymentInfo) {
//     return apis.updateWallet(paymentInfo);
//   });

// Use of promises avoids inversion of control

const GITHUB_API_URL = "https://api.github.com/users/chetanoli2012";

const githubUserData = fetch(GITHUB_API_URL);

// promise objects are immutable [cannot be modified]

githubUserData.then(function (response) {
  return response.json().then(function (data) {
    console.log("data", data);
  });
});
