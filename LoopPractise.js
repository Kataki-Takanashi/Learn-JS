// 
const contacts = [
    {
      firstname: "Astrid",
      lastname: "Larsen",
      number: "8421357901",
      likes: ["photography", "gaming", "hiking"]
    },
    {
      firstname: "Kai",
      lastname: "Reyes",
      number: "2198765432",
      likes: ["cooking", "reading", "traveling"]
    },
    {
      firstname: "Luna",
      lastname: "Kim",
      number: "6543210987",
      likes: ["dancing", "writing", "yoga"]
    },
    {
      firstname: "Caspian",
      lastname: "Hall",
      number: "9876543210",
      likes: ["coding", "skating", "trying new foods"]
    },
    {
      firstname: "Remi",
      lastname: "Lee",
      number: "1357902468",
      likes: ["painting", "gardening", "biking"]
    },
    {
      firstname: "Indigo",
      lastname: "Patel",
      number: "4680213579",
      likes: ["playing guitar", "swimming", "meditating"]
    },
    {
      firstname: "Marlowe",
      lastname: "Brooks",
      number: "7531924680",
      likes: ["acting", "volunteering", "learning languages"]
    },
    {
      firstname: "Wren",
      lastname: "Chen",
      number: "2468013579",
      likes: ["poetry", "hiking", "trying new restaurants"]
    },
    {
      firstname: "Sage",
      lastname: "Martin",
      number: "9821357460",
      likes: ["playing soccer", "reading", "spending time with family"]
    },
    {
      firstname: "Lylah",
      lastname: "Taylor",
      number: "3579102468",
      likes: ["cooking", "reading", "traveling"]
    },
    {
      firstname: "Clio",
      lastname: "Jackson",
      number: "4680932157",
      likes: ["writing stories", "drawing", "playing video games"]
    },
    {
      firstname: "Orion",
      lastname: "Davis",
      number: "7532468013",
      likes: ["playing basketball", "listening to podcasts", "hanging out with friends"]
    },
    {
      firstname: "Piper",
      lastname: "Garcia",
      number: "9824671350",
      likes: ["playing tennis", "reading", "trying new restaurants"]
    },
    {
      firstname: "Sawyer",
      lastname: "Hernandez",
      number: "3579109821",
      likes: ["playing guitar", "hiking", "spending time outdoors"]
    },
    {
      firstname: "Remington",
      lastname: "Brown",
      number: "4680932571",
      likes: ["playing football", "watching movies", "playing video games"]
    },
    {
      firstname: "Indie",
      lastname: "Miller",
      number: "7532460932",
      likes: ["playing soccer", "reading", "trying new things"]
    },
    {
      firstname: "Magnolia",
      lastname: "Wilson",
      number: "9824670135",
      likes: ["dancing", "singing", "playing with cats"]
    },
    {
      firstname: "Beckett",
      lastname: "Moore",
      number: "3579104680",
      likes: ["playing basketball", "listening to podcasts", "hanging out with friends"]
    },
    {
      firstname: "Willow",
      lastname: "Hall",
      number: "4680939821",
      likes: ["writing stories", "drawing", "playing video games"]
    },
    {
      firstname: "Ophelia",
      lastname: "Lee",
      number: "7532463579",
      likes: ["playing tennis", "reading", "trying new restaurants"]
    }
  ];
  
  function lookUpProfile(name, prop, target) {
    let profile = {};
    for (let i in target) {
        if (target[i].firstname === name) {
            profile = target[i];
        }
    }
    if (JSON.stringify(profile) === '{}') { // This checks if the object is empty, therefore no profile was found
        return "Profile Not Found.";
    }

    return profile[prop] || profile.name + " does not have the property " + '"' + prop + '".' ;
  }

  function generateOutputString(stuffLiked, name) {
    if (!Array.isArray(stuffLiked)) { // Check if "lookUpProfile" returned an error instead of an array
      return stuffLiked;
    }

    let lastItem = stuffLiked.pop();
  
    let output = name + " likes ";

    for (let i in stuffLiked) {
      output += stuffLiked[i] + ", "
    }

    output += "and " + lastItem + ".";
    return output;
  }

  let stuffLiked = lookUpProfile("Astrid", "arps", contacts);
  let output = generateOutputString(stuffLiked, "Astrid");


  console.log(output)