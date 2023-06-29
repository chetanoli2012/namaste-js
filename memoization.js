const addThreeNumber = function (a, b, c) {
  return a + b + c;
};

const memoize = function (fn) {
  const cache = {};

  return function (...args) {
    const stringifiedArgs = JSON.stringify(args);
    if (stringifiedArgs in cache) {
      console.log(`Fetching values from args from ${stringifiedArgs}`);
      return cache[stringifiedArgs];
    } else {
      console.log(`Calculating values for ${stringifiedArgs}`);
      const result = fn.apply(this, args);
      cache[stringifiedArgs] = result;
      return result;
    }
  };
};

const add = memoize(addThreeNumber);
console.log(add(1, 2, 3));
console.log(add(1, 2, 3));

const factorial = function (x) {
  if (x === 0) return 1;
  else return x * factorial(x - 1);
};

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));
