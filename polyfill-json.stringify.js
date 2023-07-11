const myObj = {
  a: "1",
  b: 2,
  c: { d: 3, e: 4 },
};

const myObjStr = JSON.stringify(myObj);

console.log(myObjStr); // {"a":"1","b":2,"c":{"d":3,"e":4}}

function myStringify(rawObj) {
  let result = "",
    count = 0;
  const noOfElemens = Object.keys(rawObj).length;
  for (let key in rawObj) {
    count++;
    if (typeof rawObj[key] === "object") {
      result += `"${key}":` + myStringify(rawObj[key]);
    } else {
      result += `"${key}":${rawObj[key]}${count !== noOfElemens ? "," : ""}`;
    }
  }
  return `{${result}}`;
}

const myObjStr2 = myStringify(myObj);
console.log(myObjStr2);
