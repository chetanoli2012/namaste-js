const user = {
  name: "Chetan",
  address: {
    personal: {
      city: "Kathmandu",
      area: "Swoyambhu",
      country: "Nepal",
    },
    office: {
      city: "Kathmandu",
      area: {
        landmark: "Airport",
      },
      country: "Nepal",
    },
  },
};

// Write a function to return the following

let finalObj = {
  user_name: "Chetan",
  user_address_personal_city: "Kathmandu",
  user_address_personal_area: "Swoyambhu",
  user_address_personal_country: "Nepal",
  user_address_office_city: "Kathmandu",
  user_address_office_area_landmark: "Airport",
  user_address_office_country: "Nepal",
};

const flattenObj = function (obj, prefix, finalObj) {
  for (key in obj) {
    const appendedPrefix = `${prefix}_${key}`;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObj(obj[key], appendedPrefix, finalObj);
    } else {
      finalObj[appendedPrefix] = obj[key];
    }
  }

  return finalObj;
};

console.log(flattenObj(user, "user", {}));
