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

class CreateSalariedCustomer extends CreateCustomer {
  constructor(name, accountBalance, branch, salary) {
    super(name, accountBalance, branch);
    this.salary = salary;
  }

  fetchSalary() {
    console.log(`The salary is ${this.salary}`);
  }
}

const salariedCustomer = new CreateSalariedCustomer("Jane", 500, "XYZ", 2000);
salariedCustomer.addBalance();
salariedCustomer.fetchBalance();
salariedCustomer.fetchSalary();
