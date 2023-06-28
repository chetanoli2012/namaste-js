let user = {
  name: "Chetan",
  city: "Kathmandu",
  getIntro: function () {
    console.log(`${this.name} is form ${this.city}`);
  },
};

let user2 = {
  name: "Akshay",
};

// This is not recommended as this overrides the prototype
user2.__proto__ = user;

user.getIntro();
user2.getIntro();
