// A fuction that takes function as a pram or returns function is called a hof (Higher Order Function)

const radius = [3, 1, 2, 4];

const area = (radius) => {
  return Math.PI * radius * radius;
};

const circuference = (radius) => {
  return 2 * Math.PI * radius;
};

// hof
Array.prototype.calculate = function (logic) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(logic(this[i]));
  }
  return result;
};

console.log(radius.calculate(area));
