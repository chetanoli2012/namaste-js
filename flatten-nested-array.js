// [
//   [[1, [1.1]], 2, 3],
//   [4, 5],
// ];

// return [1, 1.2, 2, 3, 4, 5]

const flattenArray = function (nestedArray, finalArray) {
  for (ele of nestedArray) {
    if (Array.isArray(ele)) {
      flattenArray(ele, finalArray);
    } else {
      finalArray.push(ele);
    }
  }
  return finalArray;
};

// using reduce

const flattenArrayUsingReduce = function (nestedArray) {
  const result = nestedArray.reduce(function (acc, curr) {
    if (Array.isArray(curr)) {
      acc = acc.concat(flattenArrayUsingReduce(curr));
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);

  return result;
};

const nestedArray = [
  [[1, [1.1]], 2, 3],
  [4, 5],
];

console.log(flattenArray(nestedArray, []));

console.log(flattenArrayUsingReduce(nestedArray));
