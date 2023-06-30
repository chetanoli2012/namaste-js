const createTimeout = function () {
  let id = 100;
  let timerMap = {};

  function setTimeoutPolyfill(callbackFn, delay, ...args) {
    const timeoutId = ++id;
    timerMap[timeoutId] = true;

    const start = Date.now();
    const end = start + delay;

    function triggerCallback() {
      if (!timerMap[timeoutId]) return;
      if (Date.now() > end) {
        callbackFn.apply(this, args);
      } else {
        requestIdleCallback(triggerCallback);
      }
    }
    requestIdleCallback(triggerCallback);
    return timeoutId;
  }

  function clearTimeoutPolyfill(id) {
    delete timerMap[id];
  }

  return { setTimeoutPolyfill, clearTimeoutPolyfill };
};

console.log("start");

const { setTimeoutPolyfill, clearTimeoutPolyfill } = createTimeout();

setTimeoutPolyfill(function () {
  console.log("Chetan");
}, 1000);

console.log("end");
