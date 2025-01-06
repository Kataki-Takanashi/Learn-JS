// Object
const person = {
    "full name": "John Doe",
    age: 30,
    occupation: "Software Engineer",
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    }
};

// Accessing with dot notation
console.log(person["full name"]);
console.log(person.age);
console.log(person.occupation);
console.log(person.address.street);
console.log(person.address.city);

// Accessing with brackets
console.log(person["address"]["state"]);
console.log(person["address"]["zip"]);

// Note: Objects in JavaScript are similar to Python dictionaries and Java maps
// Note: Brackets are needed when accessing properties with spaces in their names




// The following line of code checks if the property exists in the object. If it does, it assigns the value to the property. If it doesn't, it assigns an empty array to the property.
collection[id][prop] = collection[id][prop] || [];

// Example:
const collection = {};
const id = 'user1';
const prop = 'friends';

// Before assignment
console.log(collection[id][prop]); // undefined

// Assigning a value to the property using the OR operator
collection[id][prop] = collection[id][prop] || [];

// After assignment
console.log(collection[id][prop]); // []

// Now we can push values to the array
collection[id][prop].push('John');
collection[id][prop].push('Jane');

console.log(collection[id][prop]); // ['John', 'Jane']

