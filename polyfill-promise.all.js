const dummyAPI = function (delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(delay);
    }, delay);
  });
};

const tasksArray = [dummyAPI(1000), dummyAPI(3000), dummyAPI(5000)];

function promisePolyfill(tasksArray) {
  const output = [];
  let currentIteration = 0;
  const promise = new Promise(function (resolve, reject) {
    tasksArray.forEach((task, idx) => {
      Promise.resolve(task)
        .then(function (taskData) {
          output[idx] = taskData;
          currentIteration++;
          console.log(idx);
          if (currentIteration === tasksArray.length) {
            resolve(output);
          }
        })
        .catch(function (err) {
          reject(err);
        });
    });
  });
  return promise;
}

promisePolyfill(tasksArray)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err.message);
  });
