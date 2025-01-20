// Async/Await Challenge #1! 🎯
// =====================

/*
  Time Travel Agency Management System! ⌛
  
  You're running a time travel agency and need to manage tourist trips to different time periods.
  For each journey you need to:
  1. Check timeline stability for the chosen year (must be > 85%)
  2. Power up the time machine (takes 3 seconds, needs 90% power level)
  3. Run safety protocols (80% success rate)
  4. Transport the tourist (different times for different eras)
  
  Use async/await to manage this sequence. If any step fails, the journey
  should be cancelled with an appropriate message.
*/

const timelinePeriods = {
    "Ancient Egypt": { year: -3000, stability: 90, travelTime: 5000 },
    "Medieval Times": { year: 1200, stability: 85, travelTime: 3000 },
    "Renaissance": { year: 1500, stability: 80, travelTime: 2000 }
};

let machinePowerLevel = 95;

async function checkTimelineStability(period) {
    // Check if timeline stability is > 85% for the chosen period
    // Return stability status message if good, throw error if unstable
}

async function powerUpMachine() {
    // Power up takes 3 seconds
    // Check if power level >= 90%
    // Return power up message or throw error
}

async function runSafetyProtocols() {
    // 80% success rate
    // Return safety check message or throw error
}

async function transportTourist(period) {
    // Takes different time based on period's travelTime
    // Return success message with destination year
}

// Create a timeTravel function that uses async/await to:
// 1. Check timeline stability
// 2. Power up the machine
// 3. Run safety protocols
// 4. Transport the tourist

// Expected success output:
// "Timeline stability confirmed for Ancient Egypt: 90%"
// "Time machine powered up successfully!"
// "Safety protocols: All checks passed"
// "Tourist transported successfully to year -3000!"

// Expected error outputs:
// "Timeline too unstable for travel"
// "Insufficient power level: Current level 85%"
// "Safety protocol failure: [reason]"


// Async/Await Challenge #2! 🎯
// =====================

/*
  Intergalactic Food Delivery Service! 🚀🍕
  
  You're managing an interplanetary food delivery service.
  For each delivery you need to:
  1. Check if the restaurant is open on the origin planet
  2. Prepare the food (different times for different dishes)
  3. Find an available delivery pilot
  4. Calculate delivery route (some planets might be in blackholes!)
  
  Use async/await to manage this sequence. Handle all potential issues
  that might occur during delivery.
*/

const restaurants = {
    "Martian Grill": { status: "open", preparationTime: 2000 },
    "Jupiter's Pizza": { status: "closed", preparationTime: 3000 },
    "Saturn's Sushi": { status: "open", preparationTime: 4000 }
};

const pilots = [
    { name: "Zorg", available: true },
    { name: "Kira", available: false },
    { name: "Rex", available: true }
];

const planets = {
    "Mars": { inBlackhole: false, deliveryTime: 2000 },
    "Jupiter": { inBlackhole: true, deliveryTime: 3000 },
    "Saturn": { inBlackhole: false, deliveryTime: 4000 }
};

async function checkRestaurantStatus(restaurant) {
    // Check if restaurant is open
    // Return confirmation or throw error
}

async function prepareFood(restaurant) {
    // Takes time based on restaurant's preparationTime
    // Return preparation confirmation or throw error
}

async function findPilot() {
    // Find first available pilot
    // Return pilot name or throw error if none available
}

async function calculateRoute(destination) {
    // Check if destination is in blackhole
    // Return route and delivery time or throw error
}

// Create a processDelivery function that uses async/await to:
// 1. Check restaurant status
// 2. Prepare food
// 3. Find pilot
// 4. Calculate route

// Expected success output:
// "Martian Grill is open and accepting orders"
// "Food preparation complete: Order #1234"
// "Pilot Zorg assigned to delivery"
// "Route calculated: Delivery will take 2000ms"

// Expected error outputs:
// "Restaurant currently closed"
// "All pilots currently busy"
// "Destination unreachable: Planet in blackhole"


// Async/Await Challenge #3! 🎯
// =====================

/*
  Magical Library Management System! 📚✨
  
  You're the librarian at a magical library where books have a life of their own!
  For each book checkout you need to:
  1. Find the book (they move around the library)
  2. Calm it down (some books are aggressive!)
  3. Check if reader has required magical level
  4. Create magical contract between book and reader
  
  Use async/await to manage this sequence. Handle all the magical
  complications that might arise!
*/

const books = {
    "Dragonfire Spells": { aggression: 8, minMagicLevel: 7, location: "moving" },
    "Peaceful Potions": { aggression: 2, minMagicLevel: 3, location: "stable" },
    "Ancient Runes": { aggression: 5, minMagicLevel: 8, location: "moving" }
};

const readers = {
    "Merlin": { magicLevel: 10, banned: false },
    "Apprentice Tim": { magicLevel: 4, banned: false },
    "Dark Wizard": { magicLevel: 9, banned: true }
};

async function locateBook(bookName) {
    // Books with "moving" location take longer to find
    // Return location or throw error if book escapes
}

async function calmBook(bookName) {
    // Books with aggression > 5 are harder to calm
    // Return success or throw error if book is too aggressive
}

async function checkMagicLevel(bookName, reader) {
    // Check if reader meets minimum magic level and isn't banned
    // Return approval or throw error
}

async function createMagicalContract(bookName, reader) {
    // 90% success rate for contract creation
    // Return contract or throw error if book refuses
}

// Create a processBookCheckout function that uses async/await to:
// 1. Locate the book
// 2. Calm it down
// 3. Check reader's magic level
// 4. Create magical contract

// Expected success output:
// "Book 'Peaceful Potions' found in the Potions Section"
// "Book successfully calmed"
// "Reader magic level approved"
// "Magical contract created successfully!"

// Expected error outputs:
// "Book escaped before it could be caught"
// "Book too aggressive to handle"
// "Reader's magic level too low"
// "Book refused to create contract"
