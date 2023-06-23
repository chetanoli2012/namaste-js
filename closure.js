// Print 1 through 5 in each second

printNumber = () => {
  for (var i = 1; i <= 5; i++) {
    ((i) => {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i);
  }
};
printNumber();

printNumberWithLet = () => {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
};

printNumberWithLet();
