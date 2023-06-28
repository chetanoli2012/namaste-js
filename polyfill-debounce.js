const getData = function () {
  console.log("Data is fetched");
};

function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(function (...args) {
      fn.apply(this, args);
    }, delay);
  };
}

const debouncedFunction = debounce(getData, 1000);
debouncedFunction();
