/**
 * Polyfill of reduce
 *
 * params for callback function - currentValue, prevValue, index, array
 *
 */

const arr = [];

const result = arr.reduce(function (max, curr) {
  max = curr > max ? curr : max;
  return max;
}, -999);

console.log(result);

Array.prototype.myReduce = function (callbackFn, initialVal) {
  if (!this) throw new Error("Array is not defined");
  if (!this.length && !initialVal) {
    throw new Error("Initial value needs to be passed, if the array is empty");
  }
  if (!this.length && initialVal) {
    return initialVal;
  }

  let index = 0,
    accumulator;
  if (initialVal) {
    accumulator = initialVal;
  } else {
    accumulator = this[0];
    index = 1;
  }
  for (let i = index; i < this.length; i++) {
    accumulator = callbackFn(accumulator, this[i]);
  }
  return accumulator;
};

const myResult = arr.myReduce(function (max, curr) {
  max = curr > max ? curr : max;
  return max;
}, -999);

console.log("Max from my reduce is " + myResult);

const myResult2 = arr.myReduce(function (sum, curr) {
  return (sum += curr);
}, 0);

console.log("Sum form my reduce is " + myResult2);
