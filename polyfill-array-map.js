const arr = [1, 2, 3];
const result = arr.map(function (element) {
  return element * 2;
});

console.log(result);

Array.prototype.myMap = function (fn) {
  let arr = this,
    result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
};

const myresult = arr.myMap(function (element) {
  return element * 2;
});

console.log(myresult);
