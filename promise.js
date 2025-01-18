// Promise Challenge #1! 🎯
// =====================

/*
  Space Mission Launch Sequence Challenge! 🚀
  
  You're working at NASA, and you need to create a launch sequence for a Mars mission.
  The sequence must:
  1. Check fuel levels (should be >= 90%)
  2. Verify life support systems (should be 100% operational)
  3. Begin launch countdown
  
  Each check should be a separate promise and they must happen in order.
  If any check fails, the launch should be aborted with an appropriate message.
*/

const fuelLevel = 94;
const lifeSupport = 100;
const countdownSeconds = 3;

function checkFuelLevels() {
    // Return a promise that resolves if fuel >= 90%, rejects otherwise
    return new Promise((resolve, reject) => 
        fuelLevel >= 90 ?
            resolve("Fuel levels nominal...") :
            reject("Launch aborted: Fuel levels too low")
    );
}

function verifyLifeSupport() {
    // Return a promise that resolves if life support is 100%, rejects otherwise
    return new Promise((resolve, reject) => 
        lifeSupport === 100 ?
            resolve("Life support systems verified...") :
            reject("Launch aborted: Life support systems failed")
    );
}

function startCountdown() {
    // Return a promise that counts down from countdownSeconds to 1
    // Should log each number during countdown
    // Resolves with "🚀 Liftoff!" when done
    return new Promise((resolve, reject) => {
        for (let i = countdownSeconds; i > 0; i--) {
            console.log(`${i}...`);
        }
        resolve("🚀 Liftoff!");
    });
}

// Use your promises here to run the launch sequence!
// Remember to handle any errors in the sequence

function launchSequence() {
    checkFuelLevels()
        .then(console.log) // Logs "Fuel levels nominal..."
        .then(verifyLifeSupport)
        .then(console.log) // Logs "Life support systems verified..."
        .then(startCountdown)
        .then(console.log) // Logs the resolved value from startCountdown() ("🚀 Liftoff!")
        .catch(error => console.error(error)); // Logs the error message if any of the promises fail
}

//launchSequence();

// Expected success output:
// "Fuel levels nominal..."
// "Life support systems verified..."
// "3..."
// "2..."
// "1..."
// "🚀 Liftoff!"

// Expected error output (if a check fails):
// "Launch aborted: [reason for failure]"


// Promise Challenge #2! 🎯
// =====================

/*
  Virtual Pet Adoption System! 🐾
  
  You're building a virtual pet adoption platform where:
  1. Find an available pet (dog, cat, or rabbit)
  2. Process adoption papers
  3. Schedule a pickup appointment
  
  Each step should be a promise, and you need to ensure the adoption
  process follows the correct sequence. If any step fails, the adoption
  should be cancelled with an appropriate message.
*/

const availablePets = [
    { id: 1, type: "dog", name: "Buddy", status: "available" },
    { id: 2, type: "cat", name: "Whiskers", status: "pending" },
    { id: 3, type: "rabbit", name: "Hoppy", status: "available" }
];

const adoptionHours = {
    monday: "9:00 - 17:00",
    tuesday: "9:00 - 17:00",
    wednesday: "closed",
    thursday: "9:00 - 17:00",
    friday: "9:00 - 17:00"
};

function findAvailablePet(petType) {
    // Return a promise that resolves with an available pet of the specified type
    // Reject if no pets of that type are available
    return new Promise((resolve, reject) => {
        const pet = availablePets.find(pet => pet.type === petType && pet.status === "available");
        pet ?
            resolve(`Found pet: ${pet.name}`) :
            reject("No pets of that type available")
    });
}

function processAdoptionPapers(pet) {
    // Return a promise that processes the adoption papers
    // Should take 2 seconds to process (use setTimeout)
    // 80% chance of success, 20% chance of rejection
    return new Promise((resolve, reject) => {
        console.log("Processing adoption papers...");
        setTimeout(() => {
            const success = Math.random() < 0.8;

            success ?
                resolve("Papers approved!") :
                reject("Adoption papers rejected")
        }, 2000);
    });
}

function schedulePickup(day) {
    // Return a promise that schedules a pickup
    // Should reject if the selected day is 'wednesday' (closed)
    // Should reject if the pet adoption hasn't been processed
    return new Promise((resolve, reject) => {
        if (day === "wednesday") {
            reject("Cannot schedule pickup: Wednesday is closed");
        }

        resolve(`Pickup scheduled for ${day} at 9:00`);
    });
}

function adoptPet() {
    findAvailablePet("dog")
        .then(console.log)
        .then(processAdoptionPapers)
        .then(console.log)
        .then(() => schedulePickup("monday"))
        .then(console.log)
        .catch(error => console.error(error));
}

adoptPet();

// Use your promises here to:
// 1. Find an available dog
// 2. Process its adoption papers
// 3. Schedule a pickup for monday

// Expected success output:
// "Found pet: Buddy"
// "Processing adoption papers..."
// "Papers approved!"
// "Pickup scheduled for monday at 9:00"

// Expected error outputs:
// "No pets of that type available"
// "Adoption papers rejected"
// "Cannot schedule pickup: [reason]"


// Promise Challenge #3! 🎯
// =====================

/*
  Magical Potion Brewing System! 🧪
  
  You're creating a system for a magical potion brewing game where you need to:
  1. Gather ingredients (check if in stock)
  2. Brew the potion (different times for different potions)
  3. Test the potion's effectiveness
  
  Each step should be a promise, and the brewing must follow the correct sequence.
  If any step fails, the brewing should be cancelled with an appropriate message.
*/

const ingredients = {
    "dragon scale": 3,
    "phoenix feather": 0,
    "unicorn hair": 5,
    "mermaid tear": 2
};

const potionRecipes = {
    "Luck Elixir": ["dragon scale", "mermaid tear"],
    "Power Potion": ["phoenix feather", "dragon scale"],
    "Wisdom Brew": ["unicorn hair", "mermaid tear"]
};

const brewingTimes = {
    "Luck Elixir": 3000,
    "Power Potion": 5000,
    "Wisdom Brew": 4000
};

function gatherIngredients(potionName) {
    // Return a promise that resolves if all ingredients for the potion are in stock
    // Reject if any ingredient is missing
}

function brewPotion(potionName) {
    // Return a promise that resolves after the correct brewing time
    // Should show a brewing progress message
}

function testPotion(potionName) {
    // Return a promise that tests the potion
    // 70% chance of success, 30% chance of failure
    // If successful, resolve with a magical effect message
}

// Use your promises here to:
// 1. Gather ingredients for a "Luck Elixir"
// 2. Brew the potion
// 3. Test it

// Expected success output:
// "Ingredients gathered successfully!"
// "Brewing in progress..."
// "Brewing complete!"
// "Test successful: [magical effect message]"

// Expected error outputs:
// "Missing ingredient: [ingredient name]"
// "Brewing failed: [reason]"
// "Test failed: Potion was ineffective"
