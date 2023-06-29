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
