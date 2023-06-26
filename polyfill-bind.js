let user = {
  firstName: "Chetan",
  lastName: "Oli",
};

const printName = function (city, country) {
  console.log(`${this.firstName} ${this.lastName} from ${city}, ${country}`);
};

const printMyName = printName.bind(user, "Kathmandu");

printMyName("Nepal");

Function.prototype.customBind = function (...args) {
  const suppliedMethod = this,
    params = args.slice(1);
  return function (...newArgs) {
    suppliedMethod.apply(args[0], [...params, ...newArgs]);
  };
};

const printMyName2 = printName.customBind(user, "Kathmandu");

printMyName2("Nepal");
