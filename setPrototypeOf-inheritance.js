const functionsBundle = {
  addMoney: function () {
    this.accountBalance++;
  },
  fetchBalance: function () {
    console.log(`The balance is ${this.accountBalance}`);
  },
};

// Inheritance using Object.create() method in ES5 and above versions of JavaScript

function createCustomer(name, accountBalance, branch) {
  const customer = {};
  customer.name = name;
  customer.accountBalance = accountBalance;
  customer.branch = branch;

  Object.setPrototypeOf(customer, functionsBundle);

  return customer;
}

const customer = createCustomer("Alex", 100, "XYZ");

customer.addMoney();
customer.fetchBalance();

const salariedUserFunctionBundle = {
  fetchSalary: function () {
    console.log(`The salary is ${this.salary}`);
  },
};

function CreateSalariedCustomer(name, accountBalance, branch, salary) {
  const salariedUser = createCustomer(name, accountBalance, branch);
  Object.setPrototypeOf(salariedUser, salariedUserFunctionBundle);
  salariedUser.salary = salary;
  return salariedUser;
}

Object.setPrototypeOf(salariedUserFunctionBundle, functionsBundle);

const salariedUser = new CreateSalariedCustomer("Jane", 100, "XYZ", 10);
salariedUser.fetchSalary();
