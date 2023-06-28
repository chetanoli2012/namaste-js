const expensive = function () {
  console.log("This is an expensive operation ");
};

const throttle = function (func, limit) {
  let flag = true;
  return function () {
    const context = this,
      args = arguments;
    if (flag) {
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterExpensive = throttle(expensive, 5000);
window.addEventListener("resize", betterExpensive);
