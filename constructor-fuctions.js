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
