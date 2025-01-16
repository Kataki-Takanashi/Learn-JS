// file1.js

// In JavaScript, we can export functions or variables using the 'export' keyword.
// This is different from Python, where we use 'import' and 'from' statements,
// and from Java, where we use 'import' statements for classes and packages.

const var1 = 2; // A variable defined in this file

// A function that uses the variable defined above
function func1(number) {
    return number * var1; // Multiplies the input number by var1
}

// Exporting the function so it can be used in other files
export { func1 }; // This allows other files to import func1
