function Counter() {
  let count = 0;
  this.increaseCounter = () => {
    count++;
    console.log(count);
  };
  this.decreaseCounter = () => {
    count--;
    console.log(count);
  };
  return this;
}

const counter1 = Counter();
counter1.increaseCounter();

const counter2 = new Counter();
counter2.increaseCounter();
counter2.increaseCounter();
counter2.increaseCounter();
