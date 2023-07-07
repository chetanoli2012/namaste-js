class CreateCustomer {
  constructor(name, accountBalance, branch) {
    this.name = name;
    this.accountBalance = accountBalance;
    this.branch = branch;
  }

  addBalance() {
    this.accountBalance++;
  }

  fetchBalance() {
    console.log(`Balance is ${this.accountBalance}`);
  }
}

const customer = new CreateCustomer("Alex", 100, "XYZ");
customer.addBalance();
customer.fetchBalance();
