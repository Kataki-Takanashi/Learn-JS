// The rest operator is used to pass a variable number of arguments to a function.
// It is denoted by three dots (...) before the parameter name.

// Example 1: Using the rest operator to pass a variable number of arguments to a function.
function sum(...args) {
  let total = 0;
  for (let arg of args) {
    total += arg;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5)); // outputs 15

// Example 2: Using the rest operator to pass the rest of the elements of an array to a function.
let numbers = [1, 2, 3, 4, 5];
let [first, ...rest] = numbers;
console.log(first); // outputs 1
console.log(rest); // outputs [2, 3, 4, 5]

// Example 3: Using the rest operator to merge two arrays.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log(merged); // outputs [1, 2, 3, 4, 5, 6]


