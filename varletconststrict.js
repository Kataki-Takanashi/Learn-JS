"use strict"; // Comment this out to make the last error not happen and for 50 to be outputed on ln 29

// var, let, and const are used to declare variables in JavaScript.

// var is the oldest way to declare a variable. It has function scope, which means it is accessible throughout the function it is declared in.
var x = 10;
console.log(x); // outputs 10

// let is a newer way to declare a variable. It has block scope, which means it is only accessible within the block it is declared in. Or globally if not in a function.
let y = 20;
console.log(y); // outputs 20

// const is used to declare a constant. It also has block scope.
const z = 30;
console.log(z); // outputs 30

// Trying to reassign a const variable will result in an error.
try {
  z = 40;
  console.log(z); // this line will not be executed
} catch (error) {
  console.log("Error: " + error.message); // outputs "Error: Assignment to constant variable."
}

// "use strict" is a directive that enables strict mode in JavaScript. It helps to prevent common coding mistakes and improves error reporting.
// In strict mode, for example, you cannot use undeclared variables.
try {
  w = 50; // this line will throw an error
  console.log(w); // this line will not be executed
} catch (error) {
  console.log("Error: " + error.message); // outputs "Error: w is not defined"
}

