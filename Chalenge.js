const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);


// ----- Your code below this line -----

function makeList(arr) {
    const resultDisplayArray = arr.map(item => `‹li class="text-warning">${item}</li>`);
  
    return resultDisplayArray;
  }