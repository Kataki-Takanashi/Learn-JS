// Callback Challenge! 🎯
// =====================

/*
  Welcome to your first callback challenge! 
  
  In this exercise, we'll practice using callbacks with a simple scenario:
  We have a list of student scores, and we need to:
  1. Filter out passing scores (>= 70)
  2. Add 5 bonus points to each passing score
  3. Log the final results
  
  The first part is done for you. Complete the code below!
*/

const studentScores = [45, 75, 60, 90, 85, 55, 70];

// This function filters passing grades
function getPassingScores(scores, callback) {
    const passing = scores.filter(score => score >= 70);
    callback(passing);
}

// This will be our final logging function
function logFinalScores(scores) {
    console.log("Final scores after bonus:", scores);
}

// ===== YOUR CODE BELOW THIS LINE =====
// 1. Create a function called 'addBonusPoints' that:
//    - Takes an array of scores and a callback function as parameters
//    - Adds 5 points to each score
//    - Calls the callback function with the modified scores
//
// 2. Use the functions to:
//    - Get passing scores
//    - Add bonus points
//    - Log the final results
//
// Expected output: "Final scores after bonus: [80, 95, 90, 75]"

getPassingScores(studentScores, (scores) => {
    scores = scores.map((score) => score + 5);
    logFinalScores(scores);
})


// Callback Challenge #2! 🎯 
// =====================

/*
  Online Store Inventory Challenge
  
  In this exercise, we'll work with an online store inventory:
  1. Filter items that are in stock (quantity > 0)
  2. Apply a 20% discount to all prices
  3. Display the final discounted prices
  
  The first part is done for you. Complete the code below!
*/

const inventory = [
    {name: "Laptop", price: 1000, quantity: 5},
    {name: "Mouse", price: 25, quantity: 0}, 
    {name: "Keyboard", price: 75, quantity: 2},
    {name: "Monitor", price: 200, quantity: 0},
    {name: "Headphones", price: 100, quantity: 3}
];

// This function filters in-stock items
function getInStockItems(items, callback) {
    const inStock = items.filter(item => item.quantity > 0);
    callback(inStock);
}

// This will be our final logging function
function displayPrices(items) {
    console.log("Items with discounted prices:", JSON.stringify(items));
}

// ===== YOUR CODE BELOW THIS LINE =====
// 1. Create a function called 'applyDiscount' that:
//    - Takes an array of items and a callback function as parameters
//    - Applies 20% discount to each item's price
//    - Calls the callback function with the modified items
//
// 2. Use the functions to:
//    - Get in-stock items
//    - Apply discount
//    - Display the results
//
// Expected output format: "Items with discounted prices: [{name: 'Laptop', price: 800...}]"

getInStockItems(inventory, (items) => {
    items.forEach((item) => item.price = item.price * 0.8);
    displayPrices(items);
})


// Callback Challenge #3! 🎯
// =====================

/*
  Weather Data Processing Challenge
  
  In this exercise, we'll process weather data:
  1. Filter temperatures above freezing (> 32°F)
  2. Convert temperatures from Fahrenheit to Celsius
  3. Display the converted temperatures
  
  The first part is done for you. Complete the code below!
*/

const temperatures = [28, 45, 35, 15, 50, 30, 40];

// This function filters above freezing temperatures
function getAboveFreezing(temps, callback) {
    const aboveFreezing = temps.filter(temp => temp > 32);
    callback(aboveFreezing);
}

// This will be our final logging function
function displayTemps(temps) {
    console.log("Temperatures in Celsius:", JSON.stringify(temps));
}

// ===== YOUR CODE BELOW THIS LINE =====
// 1. Create a function called 'convertToCelsius' that:
//    - Takes an array of temperatures and a callback function as parameters
//    - Converts each temperature from Fahrenheit to Celsius: (F - 32) * 5/9
//    - Calls the callback function with the converted temperatures
//
// 2. Use the functions to:
//    - Get above freezing temperatures
//    - Convert to Celsius
//    - Display the results
//
// Expected output format: "Temperatures in Celsius: [7.22, 10, ...]"

getAboveFreezing(temperatures, (tempsInFahrenheit) => {
    tempsInCelsius = tempsInFahrenheit.map((temp) => Number(( (temp - 32) * 5/9).toFixed(2) )); // This is to round the result to 2 decimal places like 7.22 instead of 7 bc Math.round() rounds to the nearest integer
    displayTemps(tempsInCelsius);
})