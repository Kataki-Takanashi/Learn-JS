// Javascript can not only parse an int from a string of a number but it can also parse from a string with a number from another base


// Standard parseint, this prints 18
console.log(
    parseInt(
        "18"
    )
)
console.log("\n")
// If the string is not a number, this prints NaN
console.log(
    parseInt(
        "I am 18 years old."
    )
)
console.log("\n")
// Other bases

// Binary, this prints 14
console.log(
    parseInt(
        "1110", 2
    )
)
console.log("\n")
// Octal, this prints 10
console.log(
    parseInt(
        "12", 8
    )
)
console.log("\n")
// Hexadecimal, this prints 26
console.log(
    parseInt(
        "1A", 16
    )
)

