// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function closureTest() {
  const message = 'closure';

  function newFunction() {
    console.log(`This is an example of ${message.toUpperCase()}.`);
  }

  newFunction();
}

closureTest();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====

let count = 0;

const counter = () => {
  count++;
  return count;
  // Return a function that when invoked increments and returns a counter variable.
};

console.log(counter());
console.log(counter());
console.log(counter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let newCount = 0;

  return {
    increment: function(num) {
      newCount++;
      return newCount;
    },
    decrement: function(num) {
      newCount--;
      return newCount;
    }
  }
};

newCounter = counterFactory();

console.log(newCounter.increment());
console.log(newCounter.increment());
console.log(newCounter.increment());
console.log(newCounter.decrement());
console.log(newCounter.decrement());
