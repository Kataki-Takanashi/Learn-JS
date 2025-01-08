// There are 5 types of loops in JavaScript: for, while, do-while, for-in, and for-of.

// The for loop is used to iterate over a block of code for a specified number of times.
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// The while loop is used to iterate over a block of code as long as a specified condition is true.
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// The do-while loop is used to iterate over a block of code as long as a specified condition is true.
// It's similar to the while loop, but the code block is executed at least once.
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// The for-in loop is used to iterate over the properties of an object.
let person = {
  name: "John",
  age: 30,
  occupation: "Software Engineer"
};
for (let prop in person) {
  console.log(prop + ": " + person[prop]);
}

// The for-of loop is used to iterate over iterable objects (arrays, strings, etc.).
// It was introduced in ECMAScript 6 (ES6)
let iterable = [10, 20, 30];
for (let value of iterable) {
  console.log(value);
}






