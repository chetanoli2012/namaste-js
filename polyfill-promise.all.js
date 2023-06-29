const dummyAPI = function (delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(delay);
    }, delay);
  });
};

const tasksArray = [dummyAPI(1000), dummyAPI(3000), dummyAPI(5000)];

const promisePolyfill = function (tasksArray) {
  const output = [];

  return new Promise(function (resolve, reject) {
    tasksArray.forEach(function (element, index) {
      element
        .then(function (data) {
          output.push(data);
          if (index === tasksArray.length - 1) {
            return resolve(output);
          }
        })
        .catch(function (err) {
          return reject(err);
        });
    });
  });
};

promisePolyfill(tasksArray)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err.message);
  });
