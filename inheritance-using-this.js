function CreateCustomer(name, accountBalance, branch) {
  this.name = name;
  this.accountBalance = accountBalance;
  this.branch = branch;
}

CreateCustomer.prototype.addBalance = function () {
  this.accountBalance++;
};

CreateCustomer.prototype.fetchBalance = function () {
  console.log(`The balance is ${this.accountBalance}`);
};

const customer = new CreateCustomer("Alex", 100, "XYZ");
customer.addBalance();
customer.fetchBalance();

function CreateSalariedCustomer(name, accountBalance, branch, salary) {
  CreateCustomer.call(this, name, accountBalance, branch);
  this.salary = salary;
}

Object.setPrototypeOf(
  CreateSalariedCustomer.prototype,
  CreateCustomer.prototype
);

CreateSalariedCustomer.prototype.fetchSalary = function () {
  console.log(`The Salary of the employee is: ${this.salary}`);
};

const salariedCustomer = new CreateSalariedCustomer("Jane", 100, "XYZ", 1000);
salariedCustomer.addBalance();
salariedCustomer.fetchBalance();
salariedCustomer.fetchSalary();
