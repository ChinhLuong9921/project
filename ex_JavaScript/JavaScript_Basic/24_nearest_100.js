// Write a JavaScript program
// to find a value which is nearest to 100 from two different given integer values.

function nearest_100(a, b) {
    return (Math.abs(100 - a) < Math.abs(100 - b)) ? a : b;
}

console.log(nearest_100(12, 13));
console.log(nearest_100(99, 99));
console.log(nearest_100(-1, 102));