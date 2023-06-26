const printFullName = function (city, country) {
  console.log(`${this.firstName} ${this.lastName} from ${city}, ${country}`);
};

const user = {
  firstName: "Chetan",
  lastName: "Oli",
};

const user2 = {
  firstName: "Akshay",
  lastName: "Saini",
};

// function burrowing
printFullName.call(user, "Kathmandu", "Nepal");
printFullName.call(user2, "Dehradhun", "India");

console.log("==========================================");

// apply
printFullName.apply(user, ["Kathmandu", "Nepal"]);
printFullName.apply(user2, ["Dehradhun", "India"]);

console.log("==========================================");

// bind
boundPrintFullName = printFullName.bind(user, "Kathmandu", "Nepal");
boundPrintFullName();
