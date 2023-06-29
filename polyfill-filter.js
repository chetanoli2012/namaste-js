const arr = [1, 2, 3, 9, 8, 0, 6];

const result = arr.filter(function (values) {
  return values > 3;
});

console.log(result);

Array.prototype.myFilter = function (callbackFn) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    callbackFn.call(this, this[i]) ? result.push(this[i]) : null;
  }
  return result;
};

const myResult = arr.myFilter(function (values) {
  return values > 3;
});

console.log(myResult);
