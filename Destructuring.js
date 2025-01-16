// Destructuring in JavaScript

// Example 1: Basic Destructuring
let numbers = [1, 2, 3, 4, 5];
let [first, second, third, fourth, fifth] = numbers;
console.log(first); // outputs 1
console.log(second); // outputs 2
console.log(third); // outputs 3
console.log(fourth); // outputs 4
console.log(fifth); // outputs 5

// Example 2: Destructuring with Rest Operator
let numbers2 = [1, 2, 3, 4, 5];
let [first2, ...rest2] = numbers2;
console.log(first2); // outputs 1
console.log(rest2); // outputs [2, 3, 4, 5]

// Example 3: Destructuring Objects
let person = {
  name: "John",
  age: 30,
  city: "New York"
};
let { name, age, city } = person;
console.log(name); // outputs "John"
console.log(age); // outputs 30
console.log(city); // outputs "New York"

// Example 4: Destructuring Nested Objects
let person2 = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY"
  }
};
let { name: name2, age: age2, address: { street, city: city2, state } } = person2;
console.log(name2); // outputs "John"
console.log(age2); // outputs 30
console.log(street); // outputs "123 Main St"
console.log(city2); // outputs "New York"
console.log(state); // outputs "NY"

// Example 5: Destructuring Function Parameters
function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}
greet({ name: "John", age: 30 }); // outputs "Hello, my name is John and I am 30 years old."

// Example 6: Destructuring with Default Values
let numbers3 = [1, 2, 3];
let [first3, second3, third3 = 4] = numbers3;
console.log(first3); // outputs 1
console.log(second3); // outputs 2
console.log(third3); // outputs 3

