// sum(1)(2)() -> 3
// sum(1)(2)(3)() -> 6
// sum(1)(2)(3)(4)() -> 10 and so on...

function sum(a) {
  return function (b) {
    if (!b) {
      console.log(a);
    }
    return sum(a + b);
  };
}

sum(1)(2)(3)();

// carete a function that'll accept 5 arguments in any order

const ARGS_LEN = 5;

const newSum = function (...args) {
  if (args.length === ARGS_LEN) {
    // calculate sum
    return args.reduce(function (sum, cur) {
      return (sum += cur);
    }, 0);
  } else {
    recusiveSum = function (...args2) {
      args = args.concat(args2);
      if (args.length === ARGS_LEN) {
        return args.reduce(function (sum, cur) {
          return (sum += cur);
        }, 0);
      } else {
        return recusiveSum;
      }
    };
    return recusiveSum;
  }
};

console.log(newSum(1)(2)(3)(4)(5)); // 15
console.log(newSum(1, 2)(3)(4)(5)); // 15
console.log(newSum(1, 2, 3)(4)(5)); // 15
console.log(newSum(1, 2, 3, 4)(5)); // 15
console.log(newSum(1, 2, 3, 4, 5)); // 15
