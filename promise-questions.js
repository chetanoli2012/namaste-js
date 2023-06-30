// var p = new Promise(function (resolve, reject) {
//   reject(new Error("This has failed"));
// });

// p.catch(function (err) {
//   console.log(err.message); // This has failed
// });

// p.catch(function (err) {
//   console.log(err.message); // This has failed
// });

/**
 * errors can be caught to times in promises
 */

// var p2 = new Promise(function (resolve, reject) {
//   reject(new Error("This has failed"));
// })
//   .catch(function (err) {
//     console.log(err.message); // This has failed
//   })
//   .then(function (err) {
//     console.log(err); // undefined
//   });

/**
 * Catch block has not reutrned anything above
 */

// var p3 = new Promise(function (resolve, reject) {
//   resolve("Success");
// })
//   .then(function () {
//     throw new Error("This has failed");
//   })
//   .catch(function (err) {
//     return "Actually, that worked";
//   })
//   .then(function (message) {
//     console.log(message); // "Actually, that worked"
//   });

// Promise.resolve("Success!")
//   .then(function (data) {
//     return data.toUpperCase();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// Promise.resolve("Success!")
//   .then(function () {
//     throw Error("Oh no!");
//   })
//   .catch(function (error) {
//     return "Actually, that worked!";
//   })
//   .then(function () {
//     throw Error("This failed!");
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

var p4 = new Promise(function (resolve, reject) {
  resolve(2);
});

p4.then(function (val) {
  console.log(val);
  return val * 2;
})
  .then(function (val) {
    console.log(val);
    return val * 2;
  })
  .finally(function (val) {
    console.log(val, "finally");
    return val * 2;
  })
  .then(function (val) {
    console.log(val);
  });

/**
 * Finally does not get any params and does not return anything
 */
