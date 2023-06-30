function createInterval() {
  let intervalId = 10,
    intervalMap = {};

  function setIntervalPolyfill(callbackFn, timer) {
    const id = ++intervalId;

    function reiterate() {
      intervalMap[id] = setTimeout(function () {
        callbackFn();
        if (intervalMap[id]) {
          reiterate();
        }
      }, timer);
    }
    reiterate();
    return id;
  }

  function clearIntervalPoly(id) {
    clearTimeout(intervalMap[id]);
    delete intervalMap[id];
  }

  return { setIntervalPolyfill, clearIntervalPoly };
}

const { setIntervalPolyfill, clearIntervalPoly } = createInterval();

const interval = setIntervalPolyfill(function () {
  console.log("I am to be reiterated");
}, 1000);

clearIntervalPoly(interval);
