/**
 *
 * Create a simple banking fucntionality where users can update the bank amount and get the updated value
 *
 */

const customer1 = {
  name: "Alex",
  accountBalance: 100,
  addMoney: function () {
    customer1.accountBalance++;
  },
};

customer1.addMoney();
console.log(customer1.accountBalance);

const customer2 = {
  name: "Jane",
  accountBalance: 200,
  addMoney: function () {
    customer2.accountBalance++;
  },
};

customer2.addMoney();
console.log(customer2.accountBalance);

/**
 * The problem with above approach is that we are creating multiple customers with same attributes and functions.
 *
 * This can be improved as:
 */

function createCustomer(name, accountBalance, branch) {
  const customer = {};

  customer.name = name;
  customer.accountBalance = accountBalance;
  customer.branch = branch;
  customer.addMoney = function () {
    customer.accountBalance++;
  };

  return customer;
}

const customer3 = createCustomer("Alex", 100, "XYZ");
const customer4 = createCustomer("Jane", 200, "XYZ-2");

customer3.addMoney();
console.log(customer3.accountBalance);

/**
 * With this approach we have solved the problem of creating multiple objects. But even in this approach, addMoney() is getting replicated with all the customers we careate.
 *
 * In the approach below, we try to segregate the fuction.
 *
 */

const functionsBundle = {
  addMoney: function () {
    this.accountBalance++;
  },
  fetchBalance: function () {
    console.log(`The balance is ${this.accountBalance}`);
  },
};

// Inheritance using Object.create() method in ES5 and above versions of JavaScript

function createCustomerNew(name, accountBalance, branch) {
  const customer = Object.create(functionsBundle);
  customer.name = name;
  customer.accountBalance = accountBalance;
  customer.branch = branch;

  return customer;
}

const customer5 = createCustomerNew("Alex", 100, "XYZ");
const customer6 = createCustomerNew("Jane", 200, "XYZ-2");

customer5.addMoney();
customer5.fetchBalance();

// This solves both the problem of having to create multiple customers as well as having muiltiple copies of functions
