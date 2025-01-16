// IIFE stands for Immediately Invoked Function Expression. It is a function that is executed right after it is created.
// Here are some examples of IIFE in JavaScript:

// Example 1: A simple IIFE that logs "Hello, world!" to the console
(function() {
  console.log("Hello, world!");
})();

// Example 2: An IIFE that takes a parameter and logs it to the console
let name = "John";
(function(name) {
  console.log("Hello, " + name + "!");
})(name);

// Example 3: An IIFE that returns a value
let result = (function() {
  return 2 + 2;
})();
console.log(result); // outputs 4

// Example 4: An IIFE that uses an arrow function to log a message to the console
((name) => {
  console.log(`Hello, ${name}!`); // The ${} syntax in JavaScript is similar to Python's f-string. It allows you to embed expressions within a string literal.
})("Jane");

// Example 5: An IIFE without a parameter, using an arrow function
(() => {
  console.log("This IIFE is used to create a new scope, which can be useful for avoiding variable name conflicts and for managing memory more efficiently.");
})();

// This type of IIFE is often used when you need to execute some code immediately, but you don't need to pass any parameters to it.
// It's also useful when you want to create a new scope, but you don't need to return any value from the IIFE.


