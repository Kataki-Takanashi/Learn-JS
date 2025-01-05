// TRUth table (lol) for equality operators

console.log(
    1 == 1, // true
    1 == 2, // false
    1 == '1', // true
    
    1 === 1, // true
    1 === 2, // false
    1 === '1' // false
);

console.log(
    1 != 1, // false
    1 != 2, // true
    1 != '1', // false

    1 !== 1, // false
    1 !== 2, // true
    1 !== '1' // true
);

/*
A possible reason for there not being a string less than or equal to operator is that you wouldent know if it failed due to a string or a number.
For example: if we say <== is our strict less than or equal to operator, then a <== b could be true but we wouldent know if a >== b is false because its less than or because of the type check.
See the link below for more info: 
https://stackoverflow.com/questions/14533046/why-doesnt-javascript-have-strict-greater-less-than-comparison-operators
*/

