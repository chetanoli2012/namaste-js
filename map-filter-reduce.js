const arr = [5, 1, 3, 2, 6];

const double = function (ele) {
  return ele * 2;
};

const result = arr.map(double);
console.log(result);

const filterResult = arr.filter(function (ele) {
  return ele % 2 === 0;
});

console.log(filterResult);

const reduceResult = arr.reduce(function (max, ele) {
  return ele > max ? ele : max;
}, -9999);

console.log(reduceResult);

const users = [
  {
    firstName: "chetan",
    lastName: "oli",
    age: 25,
  },
  {
    firstName: "akshay",
    lastName: "saini",
    age: 26,
  },
  {
    firstName: "donald",
    lastName: "trump",
    age: 75,
  },
  {
    firstName: "elon",
    lastName: "musk",
    age: 50,
  },
  {
    firstName: "deepika",
    lastName: "padukone",
    age: 26,
  },
];

// find the list of full names

const listFullNames = users.map((element) => {
  return `${element.firstName} ${element.lastName}`;
});

console.log(listFullNames);

// find the number of people with each age {25: 1, 26 : 2, 75: 1, ...}

const noOfUsers = users.reduce(function (acc, curr) {
  if (!acc[curr.age]) {
    acc[curr.age] = 1;
  } else {
    acc[curr.age]++;
  }
  return acc;
}, {});

console.log(noOfUsers);

// filter out all the users whose age is less than 30

const ageLessThan30 = users
  .filter(function (user) {
    return user.age < 30;
  })
  .map(function (user) {
    return user.firstName;
  });

console.log(ageLessThan30);

const ageLessThan30UsingReduce = users.reduce((acc, curr) => {
  curr.age < 30 && acc.push(curr.firstName);
  return acc;
}, []);

console.log(ageLessThan30UsingReduce.toString());
