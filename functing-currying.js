// using bind

console.log("=============== Function Currying using bind ==============");
const multiply = function (x, y) {
  console.log(x * y);
};

multiply(3, 4);

const multiplyBy2 = multiply.bind(this, 2);
multiplyBy2(15);

const multiplyBy3 = multiply.bind(this, 3);
multiplyBy3(15);

// using closures

console.log("=============== Function Currying using closures =============");

const multiplyClosure = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

const multiplyBy2Closure = multiplyClosure(2)(3);

const multiplyBy3Closure = multiplyClosure(3)(5);
