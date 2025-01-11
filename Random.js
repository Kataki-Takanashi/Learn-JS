// Random num between 0 and 1
console.log(
    Math.random()
);

// Random whole num between 0 and n
const n = 20;

console.log(
    Math.floor(
        Math.random() * n
    )
);

// Random whole num between min and max
const min = 5
const max = 15
console.log(
    Math.floor(
        Math.random() * (
            max - min + 1
        )
    )
    + min
)

