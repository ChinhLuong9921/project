// Write a JavaScript program
// to check if two numbers are in range 40..60 or in the range 70..100 inclusive.

const checkNum = (a, b) => {
    if (Math.abs(50 - a) <= 10 || Math.abs(85 - a) <= 15) {
        if (Math.abs(50 - b) <= 10 || Math.abs(85 - b) <= 15) {
            return true;
        }
    } else return false;
}

console.log(checkNum(45, 45));
console.log(checkNum(12, 56));
console.log(checkNum(102, -1));