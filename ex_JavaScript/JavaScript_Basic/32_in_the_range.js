// Write a JavaScript program
// to check if a given number in the range 40..10000 presents in two number (in same range).
// For example 40 presents in 400 and 4000.

function theRange(a, b, x) {
    if ((a < 40 || b > 10000) && (b < 40 || b > 10000)) return false;
    return Math.abs(a - b) >= Math.abs(a - x) && Math.abs(a - b) >= Math.abs(b - x); 
}

console.log(theRange(1, 3, 2));
console.log(theRange(100, 10000, 10200));
console.log(theRange(120, 1230, 1100));
console.log(theRange(1, 3, 3));
console.log(theRange(40, 100, 60));
