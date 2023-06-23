// Creating a Promise, Chaining & Error Handling

const cart = ["shoes", "pants", "kurta"];

// producer

function validateCart(cart) {
  return cart.length;
}

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 1000);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  const pr = new Promise(function (resolve, reject) {
    if (!orderId) {
      const err = new Error("Order id should be valid");
      reject(err);
    }
    resolve("paymentInfoRecorded");
  });

  return pr;
}

const promise = createOrder(cart); // returns the orderId

promise
  .then(function (orderId) {
    console.log("orderId", orderId);
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log("paymentInfo", paymentInfo);
  })
  .catch(function (e) {
    console.error(e.message);
  });
