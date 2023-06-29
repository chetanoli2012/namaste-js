String.prototype.mySplit = function (delimiter) {
  const result = [];
  const suppliedString = this;
  if (!delimiter) return Array.from(suppliedString);

  const textSplitter = function (str, splitter) {
    if (splitter >= suppliedString.length) return;

    const delimiterOccurance = str.indexOf(delimiter);
    if (delimiterOccurance >= 0) {
      result.push(str.substring(0, delimiterOccurance));
      textSplitter(
        str.substring(delimiterOccurance + delimiter.length),
        delimiterOccurance + delimiter.length
      );
    } else {
      result.push(str);
    }
  };

  textSplitter(suppliedString, 0);

  return result;
};

let str = "The quick brown fox jumps over the lazy dog";

console.log(str.mySplit(""));
console.log(str.mySplit("the"));
console.log(str.mySplit(" "));
