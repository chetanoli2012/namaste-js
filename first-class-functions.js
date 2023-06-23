// Function Statement

() => {
  console.log("This is a function statement");
};

// Function Expression

const expression = () => {
  console.log("This is an expression");
};

// Function Declaration

() => {
  console.log("This is a function declaration");
};

// Anonymous function

() => {
  console.log("Function without name");
};

// Named function expression

const namedExpression = (a = () => {});

// First class Functions

// Because of the ability to be treated as values and be passed to other functions
// Or be returned from them,
// they are callsed 'first class'

// Arrow functions

const arrow = (param1, param2) => {};
arrow((arg1 = 1), (arg2 = 2));
