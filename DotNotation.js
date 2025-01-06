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


