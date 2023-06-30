/**
 * * Notes: *
 *
 * 1. For objects, this refers to an object
 * 2. For functions, the value of this depends on how the fuction is invoked
 *
 * - Behaviour of this in a Function: this refers to window object
 * - Behaviour of this in a Object: this refers to the object
 *
 *  - Arrow Fuctions: Arrow functions don't have a defined this. Instead it treats `this` as a variable as a variable and it tries to get the new value lexically (inherit from parent scope)
 *
 *
 */

// const person = {
//   name: "Chetan",
//   getName: function () {
//     console.log(`${this.name} is my name`);
//   },
// };

// person.getName();

// function thisTest() {
//   console.log(this);
// }

// thisTest();

// const user = {
//   name: "Chetan",
//   getName: () => {
//     console.log(`${this.name} is my name`);
//   },
// };

// user.getName();

// function User() {
//   this.name = "Chetan Oli";
//   this.score = 20;
//   this.logUser = function () {
//     // when this is accessible
//     console.log(`${this.name} - outer function`);

//     function innerFunction() {
//       // when this refers to the global scope / object
//       console.log(`${this.name} - inner function`);
//     }
//     innerFunction();
//   };
// }

// const user = new User();
// user.logUser();

function NewUser() {
  this.name = "Chetan Oli";
  this.score = 20;
  this.logNewUser = function () {
    console.log(`${this.name} - outer function`);

    innerFunction = () => {
      console.log(`${this.name} - inner function`);
    };
    innerFunction();
  };
}

const newUser = new NewUser();
newUser.logNewUser();
